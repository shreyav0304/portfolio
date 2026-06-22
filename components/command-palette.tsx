"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Build style", "#signature"],
  ["Journey", "#journey"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"],
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === "Escape") setOpen(false);
    };

    addEventListener("keydown", key);
    return () => removeEventListener("keydown", key);
  }, []);

  const results = links.filter(([name]) => name.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-[16vh] backdrop-blur-sm" onMouseDown={() => setOpen(false)}>
          <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#0b100e] shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
            <div className="flex items-center gap-3 border-b border-white/10 px-5">
              <Search size={18} className="text-acid" />
              <input autoFocus value={q} onChange={(event) => setQ(event.target.value)} placeholder="Jump to a section..." className="h-16 flex-1 bg-transparent text-white outline-none placeholder:text-white/30" />
            </div>

            <div className="p-2">
              {results.map(([name, href]) => (
                <a key={name} href={href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white">
                  <span>{name}</span>
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>

            <div className="border-t border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-white/30">Esc to close · Enter to navigate</div>
          </div>
        </div>
      )}
    </>
  );
}

