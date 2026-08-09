import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-8xl font-bold text-blue-600">404</h1>

            <h2 className="mt-4 text-2xl font-bold text-slate-900">
                Page not found
            </h2>

            <p className="mt-2 text-slate-500">
                The page you are looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-6 rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
                Back to Home
            </Link>
        </main>
    );
}
