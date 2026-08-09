import {
    BookOpen,
    Clock3,
    Globe2,
    PlayCircle,
    Star,
    Users,
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'Frontend Development',
    'Web Development',
];

const syllabus = [
    {
        title: 'Introduction to Front-End Development',
        lessons: '12 lessons',
        duration: '2h 30m',
    },
    {
        title: 'HTML and CSS Fundamentals',
        lessons: '18 lessons',
        duration: '4h 10m',
    },
    {
        title: 'JavaScript Programming',
        lessons: '24 lessons',
        duration: '6h 20m',
    },
    {
        title: 'React Development',
        lessons: '20 lessons',
        duration: '5h 40m',
    },
    {
        title: 'Building a Complete Web Application',
        lessons: '15 lessons',
        duration: '4h 30m',
    },
];

export default function CourseDetailPage() {
    // JS
    const { courseId } = useParams(); // courseId: course1
    const navigate = useNavigate();

    // logic gọi API lấy chi tiết khóa học


    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-6">
                    <h1 className="text-2xl font-bold text-blue-700">
                        Coursera
                    </h1>

                    <button className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold hover:bg-gray-50">
                        Explore
                    </button>

                    <div className="hidden flex-1 md:block">
                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                            className="h-11 w-full max-w-xl rounded-md border border-gray-400 px-4 text-sm outline-none focus:border-blue-600"
                        />
                    </div>

                    <nav className="ml-auto hidden items-center gap-6 text-sm lg:flex">
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

            {/* Course Hero */}
            <section className="bg-[#1f2937] text-white">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    {/* Breadcrumb */}
                    <div className="mb-8 flex flex-wrap gap-2 text-sm text-gray-300">
                        <span>Home</span>
                        <span>/</span>
                        <span>Computer Science</span>
                        <span>/</span>
                        <span>Web Development</span>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
                        {/* Course Info */}
                        <div>
                            <p className="text-sm font-semibold text-blue-300">
                                META
                            </p>

                            <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                                Meta Front-End Developer Professional
                                Certificate
                            </h2>

                            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">
                                Launch your career as a front-end developer.
                                Learn the skills you need to build modern,
                                responsive websites and web applications.
                            </p>

                            {/* Rating */}
                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <span className="font-bold text-yellow-400">
                                    4.8
                                </span>

                                <div className="flex">
                                    {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <Star
                                                key={index}
                                                size={18}
                                                fill="currentColor"
                                                className="text-yellow-400"
                                            />
                                        ),
                                    )}
                                </div>

                                <span className="text-sm text-gray-300">
                                    18,000+ ratings
                                </span>

                                <span className="text-sm text-gray-300">
                                    250,000+ learners
                                </span>
                            </div>

                            <p className="mt-6 text-sm text-gray-300">
                                Created by{' '}
                                <span className="font-semibold text-white">
                                    Meta
                                </span>
                            </p>
                        </div>

                        {/* Enrollment Card */}
                        <div className="lg:relative">
                            <div className="overflow-hidden rounded-lg bg-white text-gray-900 shadow-xl lg:absolute lg:right-0 lg:top-0 lg:w-[380px]">
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000"
                                    alt="Course"
                                    className="h-52 w-full object-cover"
                                />

                                <div className="p-6">
                                    <div className="flex items-center gap-2">
                                        <span className="text-3xl font-bold">
                                            $49
                                        </span>

                                        <span className="text-sm text-gray-500 line-through">
                                            $79
                                        </span>
                                    </div>

                                    <p className="mt-1 text-sm text-gray-600">
                                        7-day free trial
                                    </p>

                                    <button
                                        onClick={() => navigate(`/checkout/${courseId}`)}
                                        className="mt-5 h-12 w-full rounded-md bg-blue-700 font-bold text-white hover:bg-blue-800">
                                        Enroll now
                                    </button>

                                    <p className="mt-3 text-center text-xs text-gray-500">
                                        Start learning today
                                    </p>

                                    <div className="mt-6 border-t border-gray-200 pt-5">
                                        <p className="font-semibold">
                                            This course includes:
                                        </p>

                                        <div className="mt-4 space-y-3 text-sm">
                                            <div className="flex gap-3">
                                                <PlayCircle
                                                    size={18}
                                                    className="shrink-0"
                                                />
                                                <span>
                                                    100+ hours of learning
                                                </span>
                                            </div>

                                            <div className="flex gap-3">
                                                <BookOpen
                                                    size={18}
                                                    className="shrink-0"
                                                />
                                                <span>
                                                    Shareable certificate
                                                </span>
                                            </div>

                                            <div className="flex gap-3">
                                                <Clock3
                                                    size={18}
                                                    className="shrink-0"
                                                />
                                                <span>
                                                    Flexible schedule
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
                    <div className="py-12">
                        {/* Course Stats */}
                        <section className="border-b border-gray-200 pb-10">
                            <div className="grid gap-6 sm:grid-cols-3">
                                <div className="flex gap-4">
                                    <Clock3
                                        size={25}
                                        className="text-gray-700"
                                    />

                                    <div>
                                        <p className="font-bold">
                                            7 months
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            At 6 hours per week
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Users
                                        size={25}
                                        className="text-gray-700"
                                    />

                                    <div>
                                        <p className="font-bold">
                                            Beginner level
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            No prior experience required
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Globe2
                                        size={25}
                                        className="text-gray-700"
                                    />

                                    <div>
                                        <p className="font-bold">
                                            English
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Subtitles available
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* About */}
                        <section className="border-b border-gray-200 py-10">
                            <h3 className="text-2xl font-bold">
                                About this course
                            </h3>

                            <p className="mt-5 leading-8 text-gray-700">
                                This professional certificate prepares you
                                for an entry-level career in front-end
                                development. You will learn how to create
                                responsive websites and interactive web
                                applications using modern technologies.
                            </p>

                            <p className="mt-4 leading-8 text-gray-700">
                                Through hands-on projects, you will build a
                                portfolio that demonstrates your skills and
                                prepares you for real-world development work.
                            </p>
                        </section>

                        {/* Skills */}
                        <section className="border-b border-gray-200 py-10">
                            <h3 className="text-2xl font-bold">
                                Skills you'll gain
                            </h3>

                            <div className="mt-5 flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Syllabus */}
                        <section className="py-10">
                            <h3 className="text-2xl font-bold">
                                What you'll learn
                            </h3>

                            <p className="mt-2 text-gray-600">
                                5 course series • 100+ hours of content
                            </p>

                            <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
                                {syllabus.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className="flex items-center justify-between border-b border-gray-200 px-5 py-5 last:border-b-0 hover:bg-gray-50"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                                                {index + 1}
                                            </div>

                                            <div>
                                                <h4 className="font-semibold">
                                                    {item.title}
                                                </h4>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    {item.lessons}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="hidden text-sm text-gray-500 sm:block">
                                            {item.duration}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right empty space for sticky enrollment card */}
                    <aside className="hidden lg:block" />
                </div>
            </div>

            {/* Instructor */}
            <section className="border-t border-gray-200 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <h3 className="text-2xl font-bold">
                        Instructor
                    </h3>

                    <div className="mt-6 flex items-center gap-5">
                        <img
                            src="https://i.pravatar.cc/150?img=12"
                            alt="Instructor"
                            className="h-20 w-20 rounded-full object-cover"
                        />

                        <div>
                            <h4 className="text-xl font-bold text-blue-700">
                                Meta Staff
                            </h4>

                            <p className="mt-1 text-sm text-gray-600">
                                Meta Professional Education Team
                            </p>

                            <div className="mt-3 flex gap-5 text-sm text-gray-600">
                                <span>4.8 Instructor Rating</span>
                                <span>250K+ Learners</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="mx-auto max-w-7xl px-6 py-12">
                <h3 className="text-2xl font-bold">
                    Student reviews
                </h3>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {[
                        {
                            name: 'Alex Johnson',
                            review: 'Great course with practical projects and clear explanations.',
                        },
                        {
                            name: 'Sarah Miller',
                            review: 'The projects helped me understand front-end development much better.',
                        },
                        {
                            name: 'David Smith',
                            review: 'A very good starting point for anyone interested in web development.',
                        },
                    ].map((item) => (
                        <div
                            key={item.name}
                            className="rounded-lg border border-gray-200 p-6"
                        >
                            <div className="flex">
                                {Array.from({ length: 5 }).map(
                                    (_, index) => (
                                        <Star
                                            key={index}
                                            size={16}
                                            fill="currentColor"
                                            className="text-yellow-500"
                                        />
                                    ),
                                )}
                            </div>

                            <p className="mt-4 leading-7 text-gray-700">
                                "{item.review}"
                            </p>

                            <p className="mt-5 text-sm font-semibold">
                                {item.name}
                            </p>
                        </div>
                    ))}
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
                            Learn from world-class universities and companies.
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
                            <p>Specializations</p>
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
