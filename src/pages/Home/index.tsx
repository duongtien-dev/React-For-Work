import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Clock3,
    Search,
    Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    'Computer Science',
    'Data Science',
    'Business',
    'Information Technology',
    'Health',
    'Personal Development',
];

const courses = [
    {
        _id: 'course1',
        title: 'Google Data Analytics Professional Certificate',
        company: 'Google',
        rating: '4.8',
        reviews: '125K',
        level: 'Beginner',
        duration: '6 months',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    },
    {
        _id: 'course2',
        title: 'Meta Front-End Developer Professional Certificate',
        company: 'Meta',
        rating: '4.7',
        reviews: '84K',
        level: 'Beginner',
        duration: '7 months',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    },
    {
        _id: 'course3',
        title: 'Machine Learning Specialization',
        company: 'Stanford University',
        rating: '4.9',
        reviews: '180K',
        level: 'Intermediate',
        duration: '3 months',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800',
    },
    {
        _id: 'course4',
        title: 'Python for Everybody',
        company: 'University of Michigan',
        rating: '4.8',
        reviews: '220K',
        level: 'Beginner',
        duration: '8 months',
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800',
    },
];

const programs = [
    {
        title: 'Professional Certificates',
        description:
            'Get job-ready skills from industry leaders and earn a career credential.',
        icon: '🎓',
    },
    {
        title: 'University Degrees',
        description:
            'Earn an accredited degree from leading universities online.',
        icon: '🏫',
    },
    {
        title: 'Guided Projects',
        description:
            'Build real-world skills through hands-on projects.',
        icon: '💻',
    },
];

export default function HomePage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Navbar */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-6">
                    <div className="text-2xl font-bold text-blue-700">
                        Coursera
                    </div>

                    <Link to="/explore" className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
                        Explore
                    </Link>

                    <div className="relative hidden max-w-md flex-1 md:block">
                        <Search
                            size={19}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />

                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                            className="h-11 w-full rounded-md border border-gray-400 pl-11 pr-4 text-sm outline-none focus:border-blue-600"
                        />
                    </div>

                    <nav className="ml-auto hidden items-center gap-6 text-sm lg:flex">
                        <a href="#" className="hover:text-blue-700">
                            For Individuals
                        </a>
                        <a href="#" className="hover:text-blue-700">
                            For Business
                        </a>
                        <Link to="/login" className="hover:text-blue-700">
                            Log In
                        </Link>

                        <button className="rounded-md bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
                            Join for Free
                        </button>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="bg-[#f5f7fa]">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
                    <div>
                        <p className="mb-4 font-semibold text-blue-700">
                            LEARN WITHOUT LIMITS
                        </p>

                        <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                            Learn the skills you need to build your future
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Learn from world-class universities and companies.
                            Build skills, earn credentials, and advance your
                            career.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <button className="rounded-md bg-blue-700 px-7 py-4 font-semibold text-white hover:bg-blue-800">
                                Explore courses
                            </button>

                            <button className="rounded-md border border-gray-400 bg-white px-7 py-4 font-semibold hover:bg-gray-50">
                                View certificates
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
                                alt="Students learning"
                                className="h-[380px] w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-5 shadow-xl sm:block">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-green-100 p-2">
                                    <CheckCircle2
                                        size={22}
                                        className="text-green-600"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold">
                                        Keep learning
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Your future starts here
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section className="border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <p className="text-center text-sm font-medium text-gray-500">
                        Learn from leading universities and companies
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 text-xl font-bold text-gray-400">
                        <span>Google</span>
                        <span>IBM</span>
                        <span>Microsoft</span>
                        <span>Stanford</span>
                        <span>Meta</span>
                        <span>University of Michigan</span>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold">
                        Explore popular categories
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Choose a subject and start learning today.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="cursor-pointer rounded-lg border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-md"
                        >
                            <BookOpen
                                size={24}
                                className="mb-5 text-blue-700"
                            />

                            <h3 className="text-sm font-semibold">
                                {category}
                            </h3>

                            <p className="mt-2 text-xs text-gray-500">
                                Explore courses
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Courses */}
            <section className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">
                                Recommended courses
                            </h2>

                            <p className="mt-2 text-gray-600">
                                Learn skills that can help you move your career
                                forward.
                            </p>
                        </div>

                        <button className="hidden items-center gap-2 font-semibold text-blue-700 md:flex">
                            View all
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {courses.map((course) => (
                            <Link
                                to={`/course/${course._id}`} // course:courseId
                                className="overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="h-44 w-full object-cover"
                                />

                                <div className="p-5">
                                    <p className="text-xs font-semibold text-gray-500">
                                        {course.company}
                                    </p>

                                    <h3 className="mt-2 line-clamp-2 min-h-12 font-bold leading-6">
                                        {course.title}
                                    </h3>

                                    <div className="mt-4 flex items-center gap-2">
                                        <span className="font-semibold">
                                            {course.rating}
                                        </span>

                                        <div className="flex">
                                            {Array.from({ length: 5 }).map(
                                                (_, index) => (
                                                    <Star
                                                        key={index}
                                                        size={14}
                                                        fill="currentColor"
                                                        className="text-yellow-500"
                                                    />
                                                ),
                                            )}
                                        </div>

                                        <span className="text-xs text-gray-500">
                                            ({course.reviews})
                                        </span>
                                    </div>

                                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                                        <span>{course.level}</span>

                                        <span className="flex items-center gap-1">
                                            <Clock3 size={14} />
                                            {course.duration}
                                        </span>
                                    </div>

                                    <button className="mt-5 w-full rounded-md border border-blue-700 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                                        View course
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs */}
            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold">
                        Find the right learning path
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Learn at your own pace and choose the experience that
                        fits your goals.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {programs.map((program) => (
                        <div
                            key={program.title}
                            className="rounded-xl border border-gray-200 p-7"
                        >
                            <div className="text-4xl">{program.icon}</div>

                            <h3 className="mt-5 text-xl font-bold">
                                {program.title}
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                {program.description}
                            </p>

                            <button className="mt-6 flex items-center gap-2 font-semibold text-blue-700">
                                Learn more
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-700">
                <div className="mx-auto max-w-5xl px-6 py-16 text-center text-white">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Ready to start learning?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-blue-100">
                        Join millions of learners and start building the skills
                        you need for your future.
                    </p>

                    <button className="mt-8 rounded-md bg-white px-8 py-4 font-bold text-blue-700 hover:bg-gray-100">
                        Join for Free
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-950 text-gray-300">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            Coursera
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-gray-400">
                            Learn from anywhere and build skills for your
                            future.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">
                            Learn
                        </h4>
                        <div className="mt-4 space-y-3 text-sm">
                            <p>Courses</p>
                            <p>Certificates</p>
                            <p>Degrees</p>
                            <p>Guided Projects</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">
                            Coursera
                        </h4>
                        <div className="mt-4 space-y-3 text-sm">
                            <p>About</p>
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
                            <p>Become a Partner</p>
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
