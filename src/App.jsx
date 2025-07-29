import React, { useState } from "react";

export default function FirstGigLanding() {
    const [faqOpen, setFaqOpen] = useState(null);
    const [formData, setFormData] = useState({ firstName: "", email: "" });
    const [formStatus, setFormStatus] = useState(null); // null | "success" | "error"

    const faqs = [
        {
            q: "Do I have to work for free?",
            a: "Yes. You help startups for free to learn new skills and get experience.",
        },
        {
            q: "What kind of work will I do?",
            a: "You might help with social media, design, coding, or other tasks.",
        },
        {
            q: "Do I need experience?",
            a: "No! This is for beginners who want to try something new.",
        },
        {
            q: "How do startups know I’m serious?",
            a: "You make a profile with your skills. Startups look at it and pick who to work with.",
        },
        {
            q: "Is this safe?",
            a: "Yes. We check the startups and give you safety tips.",
        },
    ];

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData((f) => ({ ...f, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Simple validation
        if (!formData.firstName.trim() || !formData.email.trim()) {
            setFormStatus("error");
            return;
        }

        // Send to API Gateway (placeholder URL)
        fetch("https://fmlcx5shx6.execute-api.us-east-1.amazonaws.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: formData.firstName.trim(),
                email: formData.email.trim()
            })
        })
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error("API error");
                }
                return res.json();
            })
            .then(() => {
                setFormStatus("success");
                setFormData({ firstName: "", email: "" });
            })
            .catch((err) => {
                console.error("Submission error:", err);
                setFormStatus("error");
            });
    }

    return (
        <div className="font-sans text-gray-900 bg-white min-h-screen">
            {/* Above the fold */}
            <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-3xl">
                        Get Your First Job and Learn New Skills!
                    </h1>
                    <p className="mt-6 text-lg max-w-xl">
                        FirstGig helps kids like you find fun jobs with small companies. You can help, learn, and get ready for the future. All for free!
                    </p>

                    {/* Waitlist form */}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 w-full max-w-md bg-white rounded-lg p-6 shadow-lg"
                    >
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Your first name"
                            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <button
                            type="submit"
                            className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 rounded transition"
                        >
                            Join the Waitlist
                        </button>

                        {formStatus === "error" && (
                            <p className="mt-4 text-red-600 font-semibold">
                                Please fill out both your first name and email.
                            </p>
                        )}
                        {formStatus === "success" && (
                            <p className="mt-4 text-green-600 font-semibold">
                                Thanks for joining the waitlist!
                            </p>
                        )}
                    </form>
                </div>
            </header>

            {/* Below the fold */}
            <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
                {/* Problem */}
                <section id="problem" className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">The Problem: Hard to Find Your First Job</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        You want to work and learn new things, but it’s hard to find a job when you don’t have any experience yet.
                    </p>
                </section>

                {/* How we solve it */}
                <section
                    id="how-we-solve-it"
                    className="bg-indigo-50 rounded-xl p-12 max-w-5xl mx-auto text-center shadow"
                >
                    <h2 className="text-3xl font-bold mb-8 text-indigo-700">
                        How We Help
                    </h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                        We help you find small companies who want your help for free. You get to learn and help them with fun tasks.
                    </p>
                    <p className="text-lg font-semibold text-indigo-900">
                        No tricks, just a way to get your first job and learn new skills.
                    </p>
                </section>

                {/* What we do */}
                <section id="what-we-do" className="max-w-5xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold text-center">What We Do</h2>
                    <div className="space-y-6 text-gray-800 text-lg">
                        <p>
                            1. <strong>Make a Profile:</strong> Tell us your name, what you like, and what you can do.
                        </p>
                        <p>
                            2. <strong>Look at Companies:</strong> See who needs help with things like social media, art, or coding.
                        </p>
                        <p>
                            3. <strong>Apply:</strong> Ask to work with a company you like.
                        </p>
                        <p>
                            4. <strong>Work and Learn:</strong> Help with projects and learn new things.
                        </p>
                        <p>
                            5. <strong>Keep Going:</strong> Do more jobs to get better and stronger.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Questions You Might Have</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-300 rounded-lg">
                                <button
                                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                    className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                                    aria-expanded={faqOpen === i}
                                >
                                    <span className="font-semibold">{faq.q}</span>
                                    <span className="text-indigo-700 font-bold text-xl">
                    {faqOpen === i ? "-" : "+"}
                  </span>
                                </button>
                                {faqOpen === i && (
                                    <div className="px-6 pb-4 pt-4 text-gray-700 border-t border-gray-300">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why we aren't a scam */}
                <section
                    id="trust"
                    className="bg-indigo-100 rounded-xl p-12 max-w-5xl mx-auto text-center shadow"
                >
                    <h2 className="text-3xl font-bold mb-6 text-indigo-900">Why FirstGig Is Different</h2>
                    <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-800">
                        You might wonder why you can find these cool chances here and not on big sites like LinkedIn.
                    </p>
                    <ul className="mt-6 max-w-3xl mx-auto text-left list-disc list-inside space-y-3 text-gray-700">
                        <li>
                            <strong>We focus on students like you:</strong> Big sites want people with lots of experience. We help beginners get started.
                        </li>
                        <li>
                            <strong>We work with small companies:</strong> Startups need help but don’t have money to pay. We connect you with them.
                        </li>
                        <li>
                            <strong>We keep it safe and simple:</strong> We check startups before they join and help you stay safe.
                        </li>
                        <li>
                            <strong>We build trust:</strong> You can rate and talk about your experience so others know who to trust.
                        </li>
                    </ul>
                    <p className="mt-8 italic text-gray-600 max-w-2xl mx-auto">
                        FirstGig is a place made just for you to learn, help, and grow in a way big sites just don’t do.
                    </p>
                </section>
            </main>
        </div>
    );
}
