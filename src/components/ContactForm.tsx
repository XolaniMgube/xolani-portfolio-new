"use client";

import { useState, useRef } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-bg-card border border-bg-line rounded-[4px] px-4 py-3 text-[0.95rem] text-bright placeholder:text-dim focus:outline-none focus:border-blue/60 focus:ring-1 focus:ring-blue/20 transition-colors duration-200";

  const labelClass = "block font-mono text-[0.7rem] tracking-widest uppercase text-muted mb-2";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            disabled={status === "sending"}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            disabled={status === "sending"}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="What's on your mind?"
          disabled={status === "sending"}
          className={`${inputClass} resize-none leading-relaxed`}
        />
      </div>

      <div className="flex items-center gap-5 flex-wrap">
        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="font-mono text-[0.78rem] tracking-[0.08em] text-bg bg-blue px-8 py-3 rounded-[3px] font-medium hover:opacity-85 hover:-translate-y-px transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {status === "sending" ? "Sending…" : "Send message →"}
        </button>

        {status === "success" && (
          <p className="font-mono text-[0.78rem] text-teal">
            Message sent — I&apos;ll be in touch soon.
          </p>
        )}

        {status === "error" && (
          <p className="font-mono text-[0.78rem] text-amber">
            {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}
