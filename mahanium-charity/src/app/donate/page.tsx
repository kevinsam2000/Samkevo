"use client";

import { useState } from "react";

export default function DonatePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, amount: Number(amount) || 0 }),
    });
    const data = await res.json();
    setStatus(data?.message || (res.ok ? "Thank you for your donation!" : "Something went wrong."));
  }

  return (
    <section className="container py-16 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Donate</h1>
      <p className="mt-6 text-foreground/80">
        Your contribution helps us expand education, healthcare, and disaster relief.
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
          <label className="block text-sm font-medium">Amount (USD)</label>
          <input
            required
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-black/15 dark:border-white/10 bg-white/70 dark:bg-black/30 px-3 py-2"
            placeholder="50"
          />
        </div>
        <button type="submit" className="btn-primary">Donate securely</button>
        {status && <p className="text-sm text-foreground/80">{status}</p>}
        <p className="text-xs text-foreground/60">Payments not connected in this demo. Integrate Stripe/Razorpay to accept live payments.</p>
      </form>
    </section>
  );
}
