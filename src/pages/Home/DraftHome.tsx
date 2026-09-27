import { useEffect, useState } from 'react';
import { ArrowRight, Check, CircleHelp, Copy, Globe2, Grid2X2, Link2, RotateCcw, Search, Shield, Swords, X } from 'lucide-react';
import heroes from '../../data/hero.json';
import './draft.css';

const modes = ['Free Draft', 'Fearless Draft', 'Infinite Fearless Draft'];
const layouts = ['Classic', 'Compact', 'Dynamic'];
const roles = [{ name: 'All Lanes', value: '', icon: 'All_roles' }, { name: 'Top', value: 'Trên', icon: 'top' }, { name: 'Jungle', value: 'Đi Rừng', icon: 'jungle' }, { name: 'Mid', value: 'Giữa', icon: 'middle' }, { name: 'Bot', value: 'Dưới', icon: 'bottom' }, { name: 'Support', value: 'Hỗ Trợ', icon: 'support' }];
type Draft = { slots: (string | null)[]; history: string[][]; mode: string; layout: string };
const empty = (): Draft => ({ slots: Array(20).fill(null), history: [], mode: modes[0], layout: layouts[0] });
const normalize = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function initialDraft(): Draft {
    try {
        const raw = new URLSearchParams(location.hash.slice(1)).get('draft') || localStorage.getItem('draft-vision-v1');
        if (!raw) return empty();
        const d = JSON.parse(raw) as Draft;
        const valid = (s: unknown) => s === null || heroes.some(h => h.name === s);
        if (d.slots?.length === 20 && d.slots.every(valid) && Array.isArray(d.history) && d.history.every(a => Array.isArray(a) && a.every(valid)) && modes.includes(d.mode) && layouts.includes(d.layout)) return d;
    } catch { /* Ignore invalid stored data. */ }
    return empty();
}
function Portrait({ hero }: { hero: typeof heroes[number] }) {
    const [failed, setFailed] = useState(false);
    return failed ? <span className="portrait-fallback">{hero.name.slice(0, 2)}</span> : <img src={hero.avatar} alt={hero.name} loading="lazy" onError={() => setFailed(true)} />;
}
export default function DraftHome() {
    const [draft, setDraft] = useState(initialDraft);
    const [active, setActive] = useState(0);
    const [query, setQuery] = useState('');
    const [role, setRole] = useState('');
    const [notice, setNotice] = useState('');
    const [modal, setModal] = useState<'share' | 'help' | 'reset' | null>(null);
    const [shareLink, setShareLink] = useState('');
    const [copied, setCopied] = useState(false);
    useEffect(() => { try { localStorage.setItem('draft-vision-v1', JSON.stringify(draft)); } catch { /* Continue in memory when storage is unavailable. */ } }, [draft]);
    useEffect(() => { if (!modal) return; const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setModal(null); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [modal]);
    const used = new Set(draft.mode === modes[0] ? [] : draft.history.flat());
    const filtered = heroes.filter(h => normalize(h.name).includes(normalize(query)) && (!role || h.position.split('|').includes(role))).sort((a, b) => a.name.localeCompare(b.name));
    const blue = active < 5 || (active >= 10 && active < 15);
    const pick = (name: string) => {
        if (draft.slots.includes(name) || used.has(name)) return;
        const slots = [...draft.slots]; slots[active] = name;
        setDraft({ ...draft, slots });
        const next = slots.findIndex((s, i) => i > active && !s), fallback = slots.findIndex(s => !s);
        if (next >= 0 || fallback >= 0) setActive(next >= 0 ? next : fallback);
        setNotice(`${name} ${active >= 10 ? 'banned' : 'picked'} for ${blue ? 'Blue' : 'Red'} Team.`);
    };
    const nextGame = () => {
        if (draft.slots.slice(0, 10).some(s => !s)) { setNotice('Complete all 10 picks before starting the next game.'); return; }
        setDraft({ ...draft, slots: Array(20).fill(null), history: [...draft.history, draft.slots.slice(0, 10).filter((s): s is string => !!s)] }); setActive(0); setNotice('Next game ready. Previous picks are unavailable.');
    };
    const slot = (index: number) => {
        const hero = heroes.find(h => h.name === draft.slots[index]);
        const team = index < 5 || (index >= 10 && index < 15) ? 'Blue' : 'Red';
        return <div className={`slot-wrap ${hero ? 'filled' : ''}`} key={index}><button className={`draft-slot ${active === index ? 'selected' : ''} ${index >= 10 ? 'ban-slot' : ''}`} aria-label={`${team} Team ${index >= 10 ? 'Bans' : 'Picks'} ${index % 5 + 1}${hero ? `: ${hero.name}` : ''}`} aria-pressed={active === index} onClick={() => setActive(index)}>{hero ? <><Portrait hero={hero} /><span className="slot-name">{hero.name}</span></> : <><span className="slot-number">{index % 5 + 1}</span><span className="slot-prompt">{active === index ? 'Select champion' : 'Empty slot'}</span></>}</button>{hero && <button className="remove-slot" aria-label={`Remove ${hero.name}`} onClick={() => { const slots = [...draft.slots]; slots[index] = null; setDraft({ ...draft, slots }); setActive(index); }}><X size={12} /></button>}</div>;
    };
    const brand = <><span className="brand-mark"><Swords size={23} /></span><span>DRAFT<span className="brand-second">VISION</span></span></>;
    return <div className="draft-app">
        <header className="site-header"><div className="header-inner"><a className="brand" href="/" aria-label="Draft Vision home">{brand}</a><nav className="main-nav" aria-label="Main navigation"><a className="nav-active" href="/">Draft Pick Tool</a>{[['Battle Mode', 'battle'], ['Map Tool', 'map'], ['Tier List Maker', 'tierlist']].map(([name, url]) => <a key={url} href={`https://loldraftvision.fun/${url}/`} target="_blank" rel="noreferrer">{name}</a>)}</nav><div className="header-end"><span><Globe2 size={15} /> English</span><button className="icon-button" aria-label="How to draft" onClick={() => setModal('help')}><CircleHelp size={19} /></button></div></div></header>
        <main className={`workspace layout-${draft.layout.toLowerCase()}`}>
            <div className="workspace-heading"><div><div className="eyebrow"><span /> YOUR NEXT WIN STARTS HERE</div><h1>Draft Pick Tool</h1><p>Plan your picks. Build your team. Own the game.</p></div><span className="data-badge"><span /> {heroes.length} champions available</span></div>
            <section className="toolbar" aria-label="Draft settings"><div className="mode-tabs">{modes.map(m => <button key={m} aria-pressed={draft.mode === m} className={draft.mode === m ? 'active' : ''} onClick={() => setDraft({ ...draft, mode: m })}>{m === modes[0] && <Swords size={15} />}{m}</button>)}</div><div className="toolbar-right"><span className="layout-label">Layout</span><div className="layout-tabs">{layouts.map(l => <button key={l} aria-pressed={draft.layout === l} className={draft.layout === l ? 'active' : ''} onClick={() => setDraft({ ...draft, layout: l })}>{l}</button>)}</div><button className="share-button" onClick={() => { setShareLink(`${location.origin}${location.pathname}#${new URLSearchParams({ draft: JSON.stringify(draft) })}`); setCopied(false); setModal('share'); }}><Link2 size={15} /> Create share link</button></div></section>
            {draft.mode !== modes[0] && <div className="series-bar"><span><Shield size={16} /> {draft.mode} <strong>Game {draft.history.length + 1}</strong> · {used.size} previous picks excluded</span><button onClick={nextGame} disabled={draft.mode === modes[1] && draft.history.length >= 4}>Next game <ArrowRight size={14} /></button></div>}
            <section className="filter-bar" aria-label="Champion filters"><div className="roles">{roles.map(r => <button key={r.name} title={r.name} aria-label={r.name} aria-pressed={role === r.value} className={role === r.value ? 'active' : ''} onClick={() => setRole(r.value)}>{r.value ? <img src={`https://loldraftvision.fun/images/icon/${r.icon}.webp`} alt="" /> : <Grid2X2 size={20} />}{role === r.value && <span>{r.name}</span>}</button>)}</div><div className="filter-actions"><label className="search-box"><Search size={16} /><input aria-label="Search champions" placeholder="Search champions..." value={query} onChange={e => setQuery(e.target.value)} />{query && <button aria-label="Clear search" onClick={() => setQuery('')}><X size={14} /></button>}<span>{filtered.length}</span></label><button className="reset-button" onClick={() => { setDraft({ ...draft, slots: Array(20).fill(null) }); setActive(0); setNotice('All picks and bans have been reset.'); }}><RotateCcw size={15} /> Pick Reset</button></div></section>
            <div className="draft-status"><span><span className={`status-dot ${blue ? 'blue-dot' : 'red-dot'}`} /><strong>{blue ? 'Blue' : 'Red'} Team</strong><span className="status-divider">/</span>{active >= 10 ? 'Ban' : 'Pick'} {active % 5 + 1}<span className="status-instruction">— Select a slot, then choose a champion</span></span><span>{draft.slots.filter(Boolean).length}<span className="muted"> / 20 selected</span></span></div>
            <div className="draft-board"><section className="team-panel blue-team" aria-label="Blue Team picks"><div className="team-label"><span /> BLUE TEAM</div><div className="pick-slots">{Array.from({ length: 5 }, (_, i) => slot(i))}</div></section><section className="champion-panel" aria-label="Champion selection"><div className="champion-grid">{filtered.map(h => { const index = draft.slots.indexOf(h.name), unavailable = index >= 0 || used.has(h.name); return <button key={h.name} className={`champion ${unavailable ? 'unavailable' : ''}`} disabled={unavailable} onClick={() => pick(h.name)} title={`${h.name} · ${roles.filter(r => r.value && h.position.split('|').includes(r.value)).map(r => r.name).join(' / ')}\nCounters: ${h.counters.split('|').join(', ')}`}><span className="champion-image"><Portrait hero={h} />{unavailable && <span className="champion-tag">{used.has(h.name) ? 'USED' : index >= 10 ? 'BAN' : 'PICK'}</span>}</span><span className="champion-name">{h.name}</span></button>; })}</div>{!filtered.length && <div className="empty-state"><Search size={30} /><h3>No champions match your filters.</h3><p>Try another name or lane.</p><button onClick={() => { setQuery(''); setRole(''); }}>Clear filters</button></div>}</section><section className="team-panel red-team" aria-label="Red Team picks"><div className="team-label"><span /> RED TEAM</div><div className="pick-slots">{Array.from({ length: 5 }, (_, i) => slot(i + 5))}</div></section></div>
            <div className="bans-board">{['Blue', 'Red'].map((team, t) => <section key={team} className={`ban-panel ${team.toLowerCase()}-team`}><div className="ban-heading"><h2><Shield size={14} /> {team} Team <span>— Bans</span></h2><span>{draft.slots.slice(10 + t * 5, 15 + t * 5).filter(Boolean).length} / 5</span></div><div className="ban-slots">{Array.from({ length: 5 }, (_, i) => slot(10 + t * 5 + i))}</div></section>)}</div>
            <div className="workspace-bottom"><span><CircleHelp size={14} /> Click a champion to fill the selected slot. Use × to remove a selection.</span><span className="saved"><Check size={13} /> Saved on this device</span></div>
            {draft.history.length > 0 && <section className="history"><div className="ban-heading"><h2>Draft history</h2><button onClick={() => setModal('reset')}>Reset series</button></div>{draft.history.map((game, i) => <div className="history-game" key={i}><strong>Game {i + 1}</strong>{game.map(name => <span key={name}>{name}</span>)}</div>)}</section>}
            {notice && <div className="notice" role="status">{notice}<button aria-label="Dismiss notification" onClick={() => setNotice('')}><X size={14} /></button></div>}
        </main>
        <footer className="site-footer"><div className="footer-top"><div className="footer-about"><a className="brand" href="/">{brand}</a><p>Your workspace for champion selection, fearless drafts, and better team compositions.</p><span className="footer-game">ARENA OF VALOR · DRAFT PLANNER</span></div><div><h3>Information</h3><p>Champion roster <strong>{heroes.length} heroes</strong></p><p>Language <strong>English</strong></p></div><div><h3>Guides</h3><button onClick={() => setModal('help')}>How to draft</button><a href="https://loldraftvision.fun/fearless-draft/" target="_blank" rel="noreferrer">Fearless Draft Guide</a></div><div><h3>Tools</h3><a href="/">Draft Pick Tool</a><a href="https://loldraftvision.fun/map/" target="_blank" rel="noreferrer">Map Tool ↗</a></div></div><div className="footer-bottom"><span>© 2026 Draft Vision. Community draft planner.</span><span>Champion names and artwork belong to their respective owners.</span></div></footer>
        {modal && <div className="modal-backdrop" onClick={() => setModal(null)}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => e.stopPropagation()} onKeyDown={e => { if (e.key !== 'Tab') return; const items = e.currentTarget.querySelectorAll<HTMLElement>('button,input'); const first = items[0], last = items[items.length - 1]; if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } }}><button className="modal-close icon-button" aria-label="Close dialog" autoFocus onClick={() => setModal(null)}><X size={20} /></button><h2 id="modal-title">{modal === 'share' ? 'Share your draft' : modal === 'reset' ? 'Reset this series?' : 'Build your winning draft'}</h2>{modal === 'share' ? <><p>Anyone with this link can open a copy of your current draft.</p><input className="share-input" aria-label="Draft share link" readOnly value={shareLink} onFocus={e => e.target.select()} /><button className="primary-button" onClick={async () => { try { await navigator.clipboard.writeText(shareLink); setCopied(true); } catch { setNotice('Select and copy the link manually.'); } }}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Copied!' : 'Copy link'}</button></> : modal === 'reset' ? <><p>This clears the current draft and all previous games.</p><button className="primary-button" onClick={() => { setDraft({ ...empty(), mode: draft.mode, layout: draft.layout }); setActive(0); setModal(null); }}>Reset series</button></> : <><p>Select a blue or red pick / ban slot, then choose a champion. Each champion can be used once per game.</p><ul><li>Filter by lane or search for a champion by name.</li><li>Hover over a champion to see roles and counters.</li><li>Fearless Draft excludes previous picks in a five-game series.</li><li>Infinite Fearless Draft has no game limit.</li><li>Change layouts anytime. Drafts are saved automatically.</li></ul><button className="primary-button" onClick={() => setModal(null)}>Start drafting <ArrowRight size={16} /></button></>}</section></div>}
    </div>;
}
