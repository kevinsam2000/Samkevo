"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();
    setStatus(data?.message || (res.ok ? "Thanks for reaching out!" : "Something went wrong."));
  }

  return (
    <section className="container py-16 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
      <p className="mt-6 text-foreground/80">
        We would love to hear from you. Send a message and our team will respond soon.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border border-black/15 dark:border-white/10 bg-white/70 dark:bg-black/30 px-3 py-2"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border border-black/15 dark:border-white/10 bg-white/70 dark:bg-black/30 px-3 py-2"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="mt-1 w-full rounded-md border border-black/15 dark:border-white/10 bg-white/70 dark:bg-black/30 px-3 py-2"
            placeholder="How can we help?"
          />
        </div>
        <button type="submit" className="btn-primary">Send message</button>
        {status && <p className="text-sm text-foreground/80">{status}</p>}
      </form>
    </section>
  );
}
