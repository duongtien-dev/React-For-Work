import { Eye } from 'lucide-react';

export default function LoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md rounded-lg bg-white px-8 py-10 shadow-sm">
                {/* Logo */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-blue-700">
                        Coursera
                    </h1>

                    <h2 className="mt-8 text-2xl font-bold text-gray-900">
                        Log in to Coursera
                    </h2>

                    <p className="mt-2 text-sm text-gray-600">
                        Welcome back! Please enter your details.
                    </p>
                </div>

                {/* Social Login */}
                <div className="mt-8 space-y-3">
                    <button
                        type="button"
                        className="flex h-12 w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50"
                    >
                        <span className="text-lg font-bold">G</span>
                        Continue with Google
                    </button>

                    <button
                        type="button"
                        className="flex h-12 w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50"
                    >
                        <span className="text-lg font-bold"></span>
                        Continue with Apple
                    </button>
                </div>

                {/* Divider */}
                <div className="my-7 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs text-gray-500">OR</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Form */}
                <div className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-semibold text-gray-800"
                        >
                            Email address
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 w-full rounded-md border border-gray-400 px-4 text-sm outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                    </div>

                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>

                            <a
                                href="#"
                                className="text-sm font-semibold text-blue-700 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <div className="relative">
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="h-12 w-full rounded-md border border-gray-400 px-4 pr-12 text-sm outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                            />

                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                <Eye size={19} />
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="h-12 w-full rounded-md bg-blue-700 font-semibold text-white transition hover:bg-blue-800"
                    >
                        Log in
                    </button>
                </div>

                {/* Register */}
                <p className="mt-8 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a
                        href="#"
                        className="font-semibold text-blue-700 hover:underline"
                    >
                        Sign up
                    </a>
                </p>

                {/* Terms */}
                <p className="mt-8 text-center text-xs leading-5 text-gray-500">
                    By continuing, you agree to Coursera's{' '}
                    <a href="#" className="text-blue-700 hover:underline">
                        Terms of Use
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-700 hover:underline">
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>
        </main>
    );
}
