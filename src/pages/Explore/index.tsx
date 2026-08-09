import {
    BookOpen,
    ChevronDown,
    Clock3,
    Filter,
    Search,
    Star,
} from 'lucide-react';

const categories = [
    'Computer Science',
    'Data Science',
    'Business',
    'Information Technology',
    'Personal Development',
    'Health',
];

const courses = [
    {
        title: 'Meta Front-End Developer Professional Certificate',
        provider: 'Meta',
        rating: '4.8',
        reviews: '18K',
        level: 'Beginner',
        duration: '7 months',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    },
    {
        title: 'Google Data Analytics Professional Certificate',
        provider: 'Google',
        rating: '4.8',
        reviews: '125K',
        level: 'Beginner',
        duration: '6 months',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    },
    {
        title: 'Machine Learning Specialization',
        provider: 'Stanford University',
        rating: '4.9',
        reviews: '180K',
        level: 'Intermediate',
        duration: '3 months',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800',
    },
    {
        title: 'Python for Everybody Specialization',
        provider: 'University of Michigan',
        rating: '4.8',
        reviews: '220K',
        level: 'Beginner',
        duration: '8 months',
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800',
    },
    {
        title: 'IBM Full Stack Software Developer',
        provider: 'IBM',
        rating: '4.7',
        reviews: '42K',
        level: 'Beginner',
        duration: '8 months',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800',
    },
    {
        title: 'Business Foundations',
        provider: 'University of Pennsylvania',
        rating: '4.7',
        reviews: '32K',
        level: 'Beginner',
        duration: '4 months',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
    },
];

export default function ExplorePage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <header className="border-b border-gray-200">
                <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-6">
                    <h1 className="text-2xl font-bold text-blue-700">
                        Coursera
                    </h1>

                    <button className="hidden rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 md:block">
                        Explore
                    </button>

                    <div className="relative max-w-xl flex-1">
                        <Search
                            size={19}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />

                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                            className="h-11 w-full rounded-md border border-gray-400 pl-11 pr-4 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                    </div>

                    <nav className="hidden items-center gap-6 text-sm lg:flex">
                        <a href="#" className="hover:text-blue-700">
                            For Business
                        </a>

                        <a href="#" className="hover:text-blue-700">
                            Log In
                        </a>

                        <button className="rounded-md bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
                            Join for Free
                        </button>
                    </nav>
                </div>
            </header>

            {/* Page Header */}
            <section className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <p className="text-sm font-semibold text-blue-700">
                        EXPLORE COURSES
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight">
                        Learn something new
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg text-gray-600">
                        Explore thousands of courses, Professional
                        Certificates, and degrees from leading universities
                        and companies.
                    </p>
                </div>
            </section>

            {/* Main */}
            <section className="mx-auto max-w-7xl px-6 py-10">
                <div className="flex gap-10">
                    {/* Sidebar */}
                    <aside className="hidden w-64 shrink-0 lg:block">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold">
                                Filters
                            </h3>

                            <Filter size={18} />
                        </div>

                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <h4 className="font-semibold">
                                Subject
                            </h4>

                            <div className="mt-4 space-y-3">
                                {categories.map((category) => (
                                    <label
                                        key={category}
                                        className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
                                    >
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-400"
                                        />

                                        {category}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 border-t border-gray-200 pt-6">
                            <h4 className="font-semibold">
                                Level
                            </h4>

                            <div className="mt-4 space-y-3">
                                {[
                                    'Beginner',
                                    'Intermediate',
                                    'Advanced',
                                ].map((level) => (
                                    <label
                                        key={level}
                                        className="flex items-center gap-3 text-sm text-gray-700"
                                    >
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4"
                                        />

                                        {level}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 border-t border-gray-200 pt-6">
                            <h4 className="font-semibold">
                                Learning type
                            </h4>

                            <div className="mt-4 space-y-3">
                                {[
                                    'Courses',
                                    'Specializations',
                                    'Professional Certificates',
                                    'Degrees',
                                ].map((type) => (
                                    <label
                                        key={type}
                                        className="flex items-center gap-3 text-sm text-gray-700"
                                    >
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4"
                                        />

                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                        {/* Category pills */}
                        <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
                            <button className="whitespace-nowrap rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white">
                                All courses
                            </button>

                            {categories.slice(0, 4).map((category) => (
                                <button
                                    key={category}
                                    className="whitespace-nowrap rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium hover:border-blue-600 hover:text-blue-700"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Result header */}
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold">
                                    Explore courses
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    10,000+ results
                                </p>
                            </div>

                            <button className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 text-sm font-medium">
                                Sort by
                                <ChevronDown size={16} />
                            </button>
                        </div>

                        {/* Course Grid */}
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {courses.map((course) => (
                                <article
                                    key={course.title}
                                    className="overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="h-44 w-full object-cover"
                                    />

                                    <div className="p-5">
                                        <p className="text-xs font-semibold text-gray-500">
                                            {course.provider}
                                        </p>

                                        <h4 className="mt-2 line-clamp-2 min-h-12 font-bold leading-6">
                                            {course.title}
                                        </h4>

                                        <div className="mt-4 flex items-center gap-2">
                                            <span className="font-bold text-gray-900">
                                                {course.rating}
                                            </span>

                                            <div className="flex">
                                                {Array.from({
                                                    length: 5,
                                                }).map((_, index) => (
                                                    <Star
                                                        key={index}
                                                        size={14}
                                                        fill="currentColor"
                                                        className="text-yellow-500"
                                                    />
                                                ))}
                                            </div>

                                            <span className="text-xs text-gray-500">
                                                ({course.reviews})
                                            </span>
                                        </div>

                                        <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <BookOpen size={14} />
                                                {course.level}
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <Clock3 size={14} />
                                                {course.duration}
                                            </span>
                                        </div>

                                        <button className="mt-5 w-full rounded-md border border-blue-700 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                                            View course
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Pagination UI */}
                        <div className="mt-12 flex justify-center gap-2">
                            <button className="h-10 w-10 rounded-md bg-blue-700 text-sm font-semibold text-white">
                                1
                            </button>

                            <button className="h-10 w-10 rounded-md border border-gray-300 text-sm hover:bg-gray-50">
                                2
                            </button>

                            <button className="h-10 w-10 rounded-md border border-gray-300 text-sm hover:bg-gray-50">
                                3
                            </button>

                            <button className="h-10 w-10 rounded-md border border-gray-300 text-sm hover:bg-gray-50">
                                4
                            </button>

                            <button className="h-10 rounded-md border border-gray-300 px-4 text-sm hover:bg-gray-50">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-10 bg-gray-950 text-gray-300">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            Coursera
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-gray-400">
                            Learn from world-class universities and companies.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">
                            Explore
                        </h4>

                        <div className="mt-4 space-y-3 text-sm">
                            <p>Courses</p>
                            <p>Certificates</p>
                            <p>Degrees</p>
                            <p>Specializations</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">
                            About
                        </h4>

                        <div className="mt-4 space-y-3 text-sm">
                            <p>About Coursera</p>
                            <p>Careers</p>
                            <p>Blog</p>
                            <p>Contact</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">
                            Community
                        </h4>

                        <div className="mt-4 space-y-3 text-sm">
                            <p>For Students</p>
                            <p>For Business</p>
                            <p>For Universities</p>
                            <p>Partners</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800">
                    <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-gray-500">
                        © 2026 Coursera Clone. Built for learning purposes.
                    </div>
                </div>
            </footer>
        </main>
    );
}

