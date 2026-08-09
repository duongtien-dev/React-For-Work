import {
    Check,
    CreditCard,
    Lock,
    ShieldCheck,
    Tag,
} from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function CheckoutPage() {
    // JS
    const { courseId } = useParams(); // courseId: course1
    // logic thanh toán

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
                    <h1 className="text-2xl font-bold text-blue-700">
                        Coursera
                    </h1>

                    <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
                        <Lock size={16} />
                        Secure Checkout
                    </div>
                </div>
            </header>

            {/* Content */}
            <section className="mx-auto max-w-6xl px-6 py-12">
                <div className="mb-10">
                    <p className="text-sm font-semibold text-blue-700">
                        ENROLLMENT
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        Complete your enrollment
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Review your course and payment information.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                    {/* Left */}
                    <div className="space-y-6">
                        {/* Course */}
                        <section className="rounded-lg border border-gray-200 bg-white p-6">
                            <h3 className="text-lg font-bold">
                                Course
                            </h3>

                            <div className="mt-5 flex gap-5">
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                                    alt="Course"
                                    className="h-28 w-44 rounded-md object-cover"
                                />

                                <div>
                                    <p className="text-sm font-semibold text-gray-500">
                                        Meta
                                    </p>

                                    <h4 className="mt-1 text-lg font-bold">
                                        Meta Front-End Developer
                                        Professional Certificate
                                    </h4>

                                    <p className="mt-2 text-sm text-gray-500">
                                        Professional Certificate
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Benefits */}
                        <section className="rounded-lg border border-gray-200 bg-white p-6">
                            <h3 className="text-lg font-bold">
                                What you'll get
                            </h3>

                            <div className="mt-5 space-y-4">
                                {[
                                    'Access to the complete course',
                                    'Hands-on projects and assignments',
                                    'Shareable certificate',
                                    'Learn at your own pace',
                                    'Access to course materials',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-sm"
                                    >
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                                            <Check
                                                size={15}
                                                className="text-green-600"
                                            />
                                        </div>

                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Payment */}
                        <section className="rounded-lg border border-gray-200 bg-white p-6">
                            <div className="flex items-center gap-3">
                                <CreditCard
                                    size={22}
                                    className="text-blue-700"
                                />

                                <h3 className="text-lg font-bold">
                                    Payment method
                                </h3>
                            </div>

                            <div className="mt-5 rounded-lg border-2 border-blue-600 p-4">
                                <label className="flex cursor-pointer items-start gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        defaultChecked
                                        className="mt-1 h-4 w-4"
                                    />

                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">
                                                Credit or debit card
                                            </span>

                                            <div className="flex gap-2 text-xs font-bold text-gray-500">
                                                <span>VISA</span>
                                                <span>Mastercard</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                            <input
                                                type="text"
                                                placeholder="Card number"
                                                className="h-11 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-600"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Name on card"
                                                className="h-11 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-600"
                                            />

                                            <input
                                                type="text"
                                                placeholder="MM / YY"
                                                className="h-11 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-600"
                                            />

                                            <input
                                                type="text"
                                                placeholder="CVC"
                                                className="h-11 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-blue-600"
                                            />
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </section>

                        {/* Promo */}
                        <section className="rounded-lg border border-gray-200 bg-white p-6">
                            <div className="flex items-center gap-3">
                                <Tag
                                    size={20}
                                    className="text-blue-700"
                                />

                                <h3 className="font-bold">
                                    Have a promo code?
                                </h3>
                            </div>

                            <div className="mt-4 flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Enter promo code"
                                    className="h-11 flex-1 rounded-md border border-gray-300 px-4 text-sm outline-none focus:border-blue-600"
                                />

                                <button className="rounded-md border border-blue-700 px-6 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                                    Apply
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* Right - Order Summary */}
                    <aside>
                        <div className="sticky top-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="text-xl font-bold">
                                Order summary
                            </h3>

                            <div className="mt-6 border-b border-gray-200 pb-6">
                                <div className="flex justify-between gap-5">
                                    <span className="text-sm text-gray-600">
                                        Meta Front-End Developer
                                        Professional Certificate
                                    </span>

                                    <span className="font-semibold">
                                        $49
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3 py-5 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Original price
                                    </span>

                                    <span>$79</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Discount
                                    </span>

                                    <span className="text-green-600">
                                        -$30
                                    </span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold">
                                        Total
                                    </span>

                                    <span className="text-2xl font-bold">
                                        $49
                                    </span>
                                </div>
                            </div>

                            <button className="mt-6 h-12 w-full rounded-md bg-blue-700 font-bold text-white hover:bg-blue-800">
                                Complete enrollment
                            </button>

                            <div className="mt-5 flex items-start gap-3 rounded-md bg-gray-50 p-4">
                                <ShieldCheck
                                    size={20}
                                    className="shrink-0 text-green-600"
                                />

                                <p className="text-xs leading-5 text-gray-600">
                                    Your payment information is encrypted
                                    and securely processed.
                                </p>
                            </div>

                            <p className="mt-5 text-center text-xs leading-5 text-gray-500">
                                By completing your enrollment, you agree to
                                Coursera's Terms of Use and Privacy Policy.
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}

