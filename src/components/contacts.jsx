import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-16 px-4 text-[#009dc4]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* left content */}
        <div className="md:w-1/2 space-y-6">
          <img
            src="/logo2.png"
            alt="Bahari Mezani Logo"
            className="w-40 h-40 rounded-lg mx-auto md:mx-0"
          />
          <h2 className="text-2xl font-bold">We’d Love to Hear From You</h2>
          <p className="text-black">
            Whether you’re looking to place an order, collaborate, or learn more
            about our work—we’re just a message away.
          </p>
          <address className="not-italic space-y-4 text-black">
            <div>
              <span className="block text-xs text-[#009dc4] tracking-widest">
                LOCATION
              </span>
              <span className="font-medium">Kilifi, Coastal Kenya</span>
            </div>
            <div>
              <span className="block text-xs text-[#009dc4] tracking-widest">
                PHONE
              </span>
              <span className="font-medium">+254 768 066569</span>
            </div>
            <div>
              <span className="block text-xs text-[#009dc4] tracking-widest">
                EMAIL
              </span>
              <span>baharimezani@outlook.com</span>
            </div>
          </address>
        </div>

        {/* right form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <label className="block md:col-span-1">
            <span className="text-[#009dc4] font-medium">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#009dc4] focus:border-[#009dc4]"
            />
          </label>

          <label className="block md:col-span-1">
            <span className="text-[#009dc4] font-medium">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#009dc4] focus:border-[#009dc4]"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="text-[#009dc4] font-medium">Message</span>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#009dc4] focus:border-[#009dc4]"
            ></textarea>
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="  bg-[#009dc4] h-10 text-white font-semibold py-2 rounded-md hover:bg-[#007a92] transition"
          >
            {status === "sending"
              ? "Sending…"
              : status === "sent"
              ? "Sent!"
              : "Send Message"}
          </button>

          {status === "error" && (
            <p className="text-red-500 md:col-span-2">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
