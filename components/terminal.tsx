"use client";

import { useState } from "react";

const data: Record<string, string> = {
  help: "Available: about · projects · skills · github · linkedin · email · resume · certificates",
  about: "Shreya V - B.E. Artificial Intelligence & Machine Learning student at Cambridge Institute of Technology, Bengaluru.",
  projects: "Smart Checkers Move Detection System / GPR Object Classification System / VOC Monitoring & Analysis System / ClassMitra",
  skills: "Python · Java · C · SQL · ML · Deep Learning · Computer Vision · NumPy · Pandas · Scikit-learn · Git · MySQL · SQLite",
  github: "GitHub: https://github.com/shreyav0304",
  linkedin: "LinkedIn: https://linkedin.com/in/shreyavinod",
  email: "Email: shreyav0304@gmail.com",
  phone: "Phone: +91 6360516101",
  cv: "Resume: /shreyaresume.pdf",
  resume: "Resume: /shreyaresume.pdf",
  certificates: "Verified certificate archive: https://drive.google.com/drive/folders/12zV18VyWC5lBapC0ua0SFd1NYBlNv0m6?usp=drive_link",
};

export function Terminal() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState(["> System ready. Type 'help' to begin."]);

  const run = () => {
    const value = input.trim().toLowerCase();
    if (!value) return;

    setLines((current) => [...current, `shreya@portfolio:~$ ${value}`, data[value] || `Command not found: ${value}`]);
    setInput("");
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <i className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#ffd93d]" />
        <i className="h-2.5 w-2.5 rounded-full bg-acid" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[.2em] text-white/30">contact terminal</span>
      </div>

      <div className="min-h-64 p-6 font-mono text-xs leading-7 text-white/60" aria-live="polite">
        {lines.map((line, index) => (
          <div key={index} className={line.startsWith("shreya") ? "text-acid" : ""}>
            {line}
          </div>
        ))}

        <div className="flex">
          <span className="mr-2 text-acid">&gt;</span>
          <input
            aria-label="Terminal command"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && run()}
            autoComplete="off"
            className="flex-1 bg-transparent text-white outline-none"
            placeholder="enter command"
          />
        </div>
      </div>
    </div>
  );
}
