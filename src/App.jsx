import { useState } from "react";
import { motion } from "framer-motion";

export default function FirstGigLandingPage() {
    const [form, setForm] = useState({ name: "", email: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.email) {
            setSubmitted(true);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black text-white font-sans">
            <header className="text-center py-20 px-6">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Your First Internship Starts Here
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-300 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    FirstGig helps high school students like you find unpaid internships with small companies. Learn real-world skills, explore career paths, and get ready for your future. All for free!
                </motion.p>
            </header>

            <section className="flex flex-col items-center py-14">
                <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-md w-11/12 md:w-1/2 lg:w-1/3 shadow-lg space-y-6 text-black">
                    <h2 className="text-2xl font-bold text-white">Join the Waitlist</h2>
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-1 text-white">First Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-white text-black border-gray-20000 border placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-1 text-white">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-white text-black placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition duration-300"
                    >
                        Join the Waitlist
                    </button>
                    {submitted && <p className="mt-4 text-green-300">Thanks for joining the waitlist!</p>}
                </form>
            </section>

            <motion.section className="px-6 py-20 max-w-6xl mx-auto space-y-14"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}>

                <motion.div className="bg-white p-6 rounded-xl hover:shadow-lg transition duration-300 shadow-md text-black"
                            whileHover={{ scale: 1.03 }}>
                    <h2 className="text-3xl font-bold mb-3">The Problem: Gaining Experience is Hard</h2>
                    <p>You want to explore careers and build skills, but getting your first internship without experience is tough. We make it easier.</p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-xl hover:shadow-lg transition duration-300 shadow-md text-black"
                            whileHover={{ scale: 1.03 }}>
                    <h2 className="text-3xl font-bold mb-3">How We Help</h2>
                    <p>We connect high school students with small companies offering unpaid internships. You’ll gain valuable experience, build your resume, and learn practical skills in a safe environment.</p>
                </motion.div>

                <motion.div className="bg-white p-6 rounded-xl hover:shadow-lg transition duration-300 shadow-md text-black"
                            whileHover={{ scale: 1.03 }}>
                    <h2 className="text-3xl font-bold mb-4">What You’ll Do</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Create a profile: Tell us your interests and skills.</li>
                        <li>Explore internships: Discover opportunities in social media, design, coding, and more.</li>
                        <li>Apply: Reach out to startups that interest you.</li>
                        <li>Intern and learn: Get hands-on experience and build real-world skills.</li>
                        <li>Grow: Continue building your portfolio and confidence.</li>
                    </ul>
                </motion.div>

                <motion.div className="space-y-4">
                    <h2 className="text-3xl font-bold mb-4">Questions You Might Have</h2>
                    {[
                        ["Are these internships paid?", "No. These are unpaid internships designed to help you gain experience and learn."],
                        ["What kind of work can I do?", "Tasks might include social media, research, design, coding, writing, and more."],
                        ["Do I need any experience?", "No experience needed. These roles are built for beginners ready to learn."],
                        ["How will companies know I'm serious?", "You'll build a profile that shows your interests and commitment."],
                        ["Is this safe?", "Yes. We screen startups and provide safety guidance throughout the process."]
                    ].map(([q, a], idx) => (
                        <details key={idx} className="bg-white p-4 rounded-lg hover:shadow-md transition duration-300 text-black">
                            <summary className="cursor-pointer font-semibold">{q}</summary>
                            <p className="mt-2">{a}</p>
                        </details>
                    ))}
                </motion.div>

                <motion.div className="bg-white p-6 rounded-xl hover:shadow-lg transition duration-300 shadow-md text-black"
                            whileHover={{ scale: 1.03 }}>
                    <h2 className="text-3xl font-bold mb-4">Why FirstGig Is Different</h2>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Designed for high schoolers: Big platforms ignore beginners. We’re made just for you.</li>
                        <li>Real experience, no pressure: Learn in a safe space while helping real businesses.</li>
                        <li>Simple and safe: We pre-check companies and guide you every step of the way.</li>
                        <li>Trusted community: Share feedback and learn from others like you.</li>
                    </ul>
                </motion.div>
            </motion.section>

            <footer className="text-center py-10 text-gray-400 text-sm">
                © {new Date().getFullYear()} FirstGig. All rights reserved.
            </footer>
        </div>
    );
}