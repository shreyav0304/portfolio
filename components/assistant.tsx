"use client";

import { useState } from "react";
import { Bot, Send, X } from "lucide-react";

const answer = (q: string) => {
  const s = q.toLowerCase();

  if (s.includes("project") || s.includes("work")) {
    return "The site highlights four projects: Smart Checkers Move Detection, GPR Object Classification, VOC Monitoring & Analysis, and ClassMitra.";
  }

  if (s.includes("skill") || s.includes("stack")) {
    return "Shreya's skills include Python, Java, C, SQL, machine learning, deep learning, computer vision, NumPy, Pandas, Scikit-learn, Git, GitHub, MySQL, SQLite, Raspberry Pi, ESP32, and Arduino.";
  }

  if (s.includes("certificate") || s.includes("certification")) {
    return "The certifications section links directly to the Google Drive certificate folder for verification.";
  }

  if (s.includes("contact") || s.includes("email") || s.includes("phone")) {
    return "Direct contact details on the site are shreyav0304@gmail.com and +91 6360516101.";
  }

  return "Ask about projects, skills, certifications, or contact details.";
};

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi, I'm the guide. Ask about projects, skills, certifications, or contact details." }]);

  const send = () => {
    if (!input.trim()) return;

    const q = input;
    setMessages((current) => [...current, { from: "you", text: q }, { from: "bot", text: answer(q) }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-3 right-3 z-50 sm:bottom-5 sm:right-5">
      <button onClick={() => setOpen(!open)} className="flex h-12 items-center gap-2 rounded-full border border-acid/40 bg-[#101610]/90 px-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(185,255,102,.12)] backdrop-blur">
        <Bot size={18} className="text-acid" />
        {open ? <X size={17} /> : "Ask about the profile"}
      </button>

      {open && (
        <div className="absolute bottom-16 right-0 flex h-[420px] w-[min(360px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0a0e0c]/95 shadow-2xl backdrop-blur-xl">
          <div className="border-b border-white/10 p-4">
            <p className="font-semibold">
              Portfolio Guide <span className="ml-2 font-mono text-[10px] text-acid">● ONLINE</span>
            </p>
            <p className="text-xs text-white/40">Quick answers about the site</p>
          </div>

          <div className="flex-1 space-y-3 overflow-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${message.from === "bot" ? "bg-white/7 text-white/70" : "ml-auto bg-acid text-ink"}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && send()}
              placeholder="Ask a question..."
              className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none"
            />
            <button onClick={send} aria-label="Send">
              <Send size={17} className="text-acid" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
