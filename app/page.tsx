"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import {
  ArrowDown,
  ArrowUpRight,
  Atom,
  Award,
  Bot,
  BrainCircuit,
  Braces,
  Briefcase,
  CircuitBoard,
  Download,
  FlaskConical,
  Github,
  GraduationCap,
  Menu,
  MailOpen,
  Phone,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Assistant } from "@/components/assistant";
import { CommandPalette } from "@/components/command-palette";
import { NeuralField } from "@/components/neural-field";
import { Terminal } from "@/components/terminal";

const roles = ["AIML STUDENT", "COMPUTER VISION BUILDER", "ML PRACTITIONER", "IOT PROJECT CONTRIBUTOR", "TEAM COLLABORATOR"];
const navItems = [
  { label: "About me", href: "#about" },
  { label: "Now", href: "#now" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "How I work", href: "#signature" },
  { label: "Journey", href: "#journey" },
  { label: "Learning", href: "#certifications" },
  { label: "Say hello", href: "#contact" },
];

const profile = {
  name: "Shreya V",
  title: "B.E. Artificial Intelligence & Machine Learning Student",
  institute: "Cambridge Institute of Technology",
  location: "Bengaluru, Karnataka",
  cgpa: "6.59",
  graduation: "2023-2027",
  email: "shreyav0304@gmail.com",
  github: "https://github.com/shreyav0304",
  linkedin: "https://linkedin.com/in/shreyavinod",
  resume: "/shreyaresume.pdf",
  certificates: "https://drive.google.com/drive/folders/12zV18VyWC5lBapC0ua0SFd1NYBlNv0m6?usp=drive_link",
};

const skills = [
  { title: "Languages", icon: Braces, items: "Python · Java · C · SQL", note: "Primary programming tools and project work" },
  { title: "ML & AI", icon: BrainCircuit, items: "Machine Learning · Deep Learning · CNN · RNN · Computer Vision", note: "Applied through classification and vision-focused projects" },
  { title: "Libraries", icon: Atom, items: "NumPy · Pandas · Scikit-learn · TensorFlow · OpenCV", note: "Used for data work, model building, and visual pipelines" },
  { title: "Embedded & IoT", icon: CircuitBoard, items: "Raspberry Pi · ESP32 · Arduino", note: "Supports sensing, acquisition, and hardware-linked systems" },
  { title: "Tools & Databases", icon: Zap, items: "Git · GitHub · Jupyter Notebook · VS Code · MySQL · SQLite", note: "Version control, notebooks, IDE workflows, and storage" },
];

const projects = [
  {
    n: "01",
    tag: "COMPUTER VISION",
    title: "Smart Checkers Move Detection System",
    subtitle: "Python, TensorFlow, OpenCV",
    desc: "Built a real-time computer vision pipeline for checker piece detection and tracking using a custom annotated dataset and board-state recognition.",
    tech: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
    features: ["Custom dataset and annotation workflow", "Board-state recognition and move validation", "Visual detections translated into legal gameplay actions"],
    icon: Radar,
    color: "#b9ff66",
  },
  {
    n: "02",
    tag: "MACHINE LEARNING",
    title: "Ground Penetrating Radar Object Classification System",
    subtitle: "Python, ML (Ongoing)",
    desc: "Processing and annotating 11,000+ GPR scan images for underground object classification while comparing multiple model families.",
    tech: ["Python", "CNN", "RNN", "Random Forest", "Decision Tree"],
    features: ["11,000+ scan images in the data pipeline", "Preprocessing and annotation work", "Model evaluation across four approaches"],
    icon: BrainCircuit,
    color: "#7ee8ff",
  },
  {
    n: "03",
    tag: "IOT + ANALYTICS",
    title: "VOC Monitoring & Analysis System",
    subtitle: "Python, IoT (Ongoing)",
    desc: "Developing software modules for VOC sensor data acquisition, analysis, and visualization in a four-member team.",
    tech: ["Python", "IoT", "Data Visualization", "Team Collaboration"],
    features: ["Sensor data acquisition modules", "Processing and visualization workflows", "Winner - Cyber Security Grand Challenge 2.0"],
    icon: CircuitBoard,
    color: "#e1b9ff",
  },
  {
    n: "04",
    tag: "ACADEMIC PLANNING",
    title: "ClassMitra - Smart Timetable Generator",
    subtitle: "TypeScript (Ongoing)",
    desc: "Built a timetable generation platform to automate class scheduling, reduce manual effort, and improve planning efficiency.",
    tech: ["TypeScript", "Scheduling Logic", "Conflict Detection"],
    features: ["Automated schedule generation", "Conflict detection and resolution", "Teacher-focused academic planning workflow"],
    icon: Sparkles,
    color: "#ffd36e",
  },
];

const signatureLenses = [
  {
    key: "vision",
    label: "Vision first",
    title: "I like problems you can see.",
    body: "My strongest work sits where image data, object detection, and structured decision-making meet. The aim is not just to detect, but to translate signals into something useful.",
    bullets: ["Custom datasets", "Real-time tracking", "Board-state and object classification"],
  },
  {
    key: "systems",
    label: "Systems second",
    title: "I build beyond the model.",
    body: "A model is only half the job. I care about the surrounding pipeline: annotation, preprocessing, interfaces, deployment thinking, and how the result would actually be used.",
    bullets: ["Data pipelines", "Software modules", "UI + logic glue"],
  },
  {
    key: "team",
    label: "Team-aware",
    title: "I keep collaboration practical.",
    body: "A good portfolio should show that you can work with others, ship with constraints, and own a meaningful part of the outcome. That shows up in the team projects and leadership roles here.",
    bullets: ["Team delivery", "Coordination", "Ownership under deadlines"],
  },
];

const journey = [
  ["2023", "Started B.E. AIML", "Began Artificial Intelligence & Machine Learning at Cambridge Institute of Technology."],
  ["2023-2026", "TEDxCIT Technical Team", "Supported event operations, ticketing, documentation, and technical coordination."],
  ["2025", "Cambrian Open House Finance Lead", "Managed budgeting, vendor payments, financial records, and reporting."],
  ["Ongoing", "Project Track", "Working across checkers vision, GPR classification, VOC analysis, and ClassMitra."],
  ["Recognition", "Challenge Winner", "VOC Monitoring & Analysis System contributed to a Cyber Security Grand Challenge 2.0 win."],
];

const certifications = [
  { title: "Machine Learning Specialization", kind: "Specialization", icon: Award },
  { title: "Advanced Learning Algorithms", kind: "Course", icon: ShieldCheck },
  { title: "Python for Data Science", kind: "Course", icon: GraduationCap },
  { title: "Probability & Statistics using Python", kind: "Course", icon: Award },
  { title: "Data Structures in C", kind: "Course", icon: ShieldCheck },
  { title: "Cryptography & Network Security", kind: "Course", icon: GraduationCap },
  { title: "Gen AI Mastermind Program", kind: "Program", icon: Award },
  { title: "AI Literacy Badge (2026)", kind: "Badge", icon: ShieldCheck },
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[.28em] text-acid">// {children}</p>;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [role, setRole] = useState(0);
  const [menu, setMenu] = useState(false);
  const [mode, setMode] = useState<"lab" | "innovation">("lab");
  const [lens, setLens] = useState(0);
  const hero = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const id = setInterval(() => setRole((current) => (current + 1) % roles.length), 2200);

    if (hero.current) {
      gsap.fromTo(
        hero.current.querySelectorAll("[data-intro]"),
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out" },
      );
    }

    return () => clearInterval(id);
  }, []);

  return (
    <main className={mode === "innovation" ? "innovation" : ""}>
      <NeuralField />
      <CommandPalette />
      <Assistant />
      <motion.div style={{ width: bar }} className="fixed left-0 top-0 z-[110] h-px bg-acid" />

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/[.07] bg-ink/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="font-mono text-xs font-bold tracking-[.18em]">
            SHREYA<span className="text-acid">.V</span>
          </a>

          <nav className="hidden items-center gap-7 text-xs text-white/55 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}

            <button
              onClick={() => setMode((current) => (current === "lab" ? "innovation" : "lab"))}
              className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase text-acid"
            >
              {mode === "lab" ? "Lab mode" : "Innovation"}
            </button>

            <button
              aria-label="Open search"
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }))}
              className="flex items-center gap-1 rounded-md border border-white/10 px-2 py-1"
            >
              <Search size={12} />
              Ctrl+K
            </button>
          </nav>

          <button onClick={() => setMenu(!menu)} className="md:hidden" aria-label="Menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>

        {menu && (
          <nav className="grid border-t border-white/10 bg-ink p-5 md:hidden">
            {navItems.map((item) => (
              <a key={item.label} onClick={() => setMenu(false)} href={item.href} className="py-3 text-white/70">
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="top" ref={hero} className="relative z-10 flex min-h-screen items-center overflow-hidden px-5 pb-28 pt-20 sm:pb-20 lg:px-8">
        <div className="pointer-events-none absolute left-[54%] top-1/2 h-[44vw] w-[44vw] -translate-y-1/2 rounded-full border border-acid/10 bg-acid/[.02] shadow-[inset_0_0_90px_rgba(185,255,102,.025)]">
          <div className="absolute inset-[17%] animate-[spin_36s_linear_infinite] rounded-full border border-dashed border-white/10" />
          <div className="absolute inset-[35%] rounded-full border border-acid/15 bg-acid/[.025] shadow-[0_0_64px_rgba(185,255,102,.06)]" />
          <div className="absolute inset-0 animate-[spin_28s_linear_infinite]">
            <span className="absolute left-1/2 top-[8%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-acid shadow-[0_0_18px_rgba(185,255,102,.65)]" />
          </div>
          <div className="absolute inset-[10%] animate-[spin_58s_linear_infinite] [animation-direction:reverse]">
            <span className="absolute right-[10%] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/60 shadow-[0_0_12px_rgba(255,255,255,.3)]" />
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-5xl">
            <div data-intro className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-white/40">
              <span className="h-2 w-2 animate-pulse rounded-full bg-acid shadow-[0_0_12px_#b9ff66]" />
              Hi, I'm Shreya.
            </div>

            <p data-intro className="mb-3 text-sm text-white/50">
              Hello, I&apos;m
            </p>

            <h1 data-intro className="hero-title text-[clamp(3.1rem,13vw,11rem)] font-semibold leading-[.78] tracking-[-.085em]">
              SHREYA<span className="text-acid">.</span>
            </h1>

            <div data-intro className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:gap-x-6 sm:gap-y-3">
              <h2 className="text-lg font-medium sm:text-2xl">
                B.E. ARTIFICIAL INTELLIGENCE
                <br />
                & MACHINE LEARNING STUDENT
              </h2>
              <div className="mb-1 h-9 overflow-hidden border-l border-acid pl-4 font-mono text-[10px] leading-9 tracking-[.2em] text-acid">
                <motion.span key={role} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="block">
                  {roles[role]}
                </motion.span>
              </div>
            </div>

            <p data-intro className="mt-8 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              I like turning class projects into things that actually work - especially when computer vision, machine learning, and IoT overlap.
            </p>

            <div data-intro className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#projects">
                Explore projects <ArrowDown size={15} />
              </Button>
              <Button href={profile.resume} target="_blank" rel="noreferrer" variant="outline">
                <Download size={15} /> Download CV
              </Button>
              <Button href="#contact" variant="ghost">
                Say hello <ArrowUpRight size={15} />
              </Button>
            </div>

          </div>

          <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2 text-left sm:flex-row sm:items-end sm:justify-between lg:left-8 lg:right-8">
            <p className="font-mono text-[8px] uppercase leading-5 tracking-[.18em] text-white/25 sm:text-[9px]">
              {profile.institute}
              <br />
              {profile.location}
            </p>
            <p className="hidden text-right font-mono text-[8px] uppercase leading-5 tracking-[.18em] text-white/25 sm:block sm:text-[9px]">
              2023-2027
              <br />
              {profile.graduation}
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="section relative z-10">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <Reveal>
            <Label>About me</Label>
            <h2 className="section-title">
              Student,
              <br />
              learning by building.
            </h2>
          </Reveal>

          <Reveal className="lg:pt-8">
            <p className="text-xl leading-relaxed text-white/75 sm:text-2xl">
              I like building practical things, fixing what breaks, and seeing ideas become something usable.
            </p>
            <p className="mt-7 max-w-2xl leading-7 text-white/45">
              Most of my work comes from class, team projects, and the slightly messy process of making ideas less abstract.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Metric n="04" text="Projects" />
              <Metric n="02" text="Ongoing projects" />
              <Metric n="02" text="Campus roles" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="now" className="section relative z-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Label>Currently</Label>
            <h2 className="section-title">What I'm focused on right now.</h2>
          </Reveal>

          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {[
              ["Learning", "Getting more comfortable with model evaluation, better UI decisions, and shipping cleaner projects."],
              ["Enjoying", "Projects where the data, hardware, and interface all need to make sense together."],
              ["Want more of", "Small tools that solve one real problem well, even if they start simple."],
            ].map(([title, text]) => (
              <Reveal key={title}>
                <div className="rounded-3xl border border-white/10 bg-white/[.025] p-6">
                  <p className="font-mono text-[9px] uppercase tracking-[.2em] text-acid">{title}</p>
                  <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section relative z-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <Label>Skills</Label>
                <h2 className="section-title">What I use most.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-white/40">The tools I reach for most often when I'm building something.</p>
            </div>
          </Reveal>

          <div className="relative mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {skills.map((skill, index) => (
              <Reveal key={skill.title}>
                <motion.div whileHover={{ y: -8 }} className="group relative min-h-64 overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] p-6 transition hover:border-acid/40">
                  <span className="absolute right-5 top-5 font-mono text-[9px] text-white/20">0{index + 1}</span>
                  <skill.icon className="text-acid" size={24} />
                  <h3 className="mt-16 text-lg font-semibold">{skill.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/45">{skill.items}</p>
                  <p className="mt-5 translate-y-3 border-t border-white/10 pt-4 text-[11px] leading-5 text-acid/70 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    {skill.note}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section relative z-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Label>Projects</Label>
            <h2 className="section-title">Things I've built.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">A mix of finished work and things I'm still refining — the kind of projects I actually spend time on.</p>
          </Reveal>

          <div className="mt-14 space-y-5">
            {projects.map((project, index) => (
              <Reveal key={project.n}>
                <Project p={project} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="signature" className="section relative z-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Label>How I work</Label>
            <h2 className="section-title">A few things I care about.</h2>
          </Reveal>

          <div className="mt-16 grid gap-3 lg:grid-cols-[1.2fr_.8fr]">
            <Reveal>
              <div className="lab-card min-h-[430px] p-7 sm:p-10">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-acid" />
                  <p className="font-mono text-[10px] uppercase tracking-[.2em] text-white/30">Interactive lens</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {signatureLenses.map((item, index) => (
                    <button
                      key={item.key}
                      onClick={() => setLens(index)}
                      className={`rounded-full border px-4 py-2 text-xs transition ${lens === index ? "border-acid bg-acid text-ink" : "border-white/10 bg-black/20 text-white/55 hover:border-acid/50 hover:text-white"}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="mt-10 rounded-3xl border border-white/10 bg-black/20 p-6 sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[.2em] text-acid">{signatureLenses[lens].label}</p>
                  <h3 className="mt-4 text-2xl font-semibold sm:text-2xl">{signatureLenses[lens].title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">{signatureLenses[lens].body}</p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {signatureLenses[lens].bullets.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 text-xs leading-5 text-white/70">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="lab-card h-full overflow-hidden p-7 sm:p-10">
                <div className="flex items-center gap-3">
                  <Radar className="text-acid" />
                  <p className="font-mono text-[10px] uppercase tracking-[.2em] text-white/30">A few notes</p>
                </div>
                <h3 className="mt-8 text-2xl font-semibold">A few things I care about.</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">Instead of a generic skills grid, this section is just a quick look at how I like to work: observe, build, and collaborate.</p>
                <div className="relative mt-8 h-44 overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
                  <div className="absolute inset-4 rounded-full border border-white/10" />
                  <div className="absolute inset-10 rounded-full border border-acid/20" />
                  <div className="absolute inset-16 rounded-full border border-white/10" />
                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid shadow-[0_0_30px_rgba(185,255,102,.7)]" />
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-acid/10 animate-[spin_14s_linear_infinite] [mask-image:conic-gradient(from_0deg,transparent_0_70%,black_70%_100%)]">
                    <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid" />
                  </div>
                  <div className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-white/80 shadow-[0_0_14px_rgba(255,255,255,.5)]" />
                  <div className="absolute right-[18%] top-[35%] h-2 w-2 rounded-full bg-acid shadow-[0_0_14px_rgba(185,255,102,.5)]" />
                  <div className="absolute bottom-[22%] left-[44%] h-2 w-2 rounded-full bg-white/60 shadow-[0_0_14px_rgba(255,255,255,.45)]" />
                </div>
                <div className="mt-8 grid gap-4">
                  {[
                    ["See", "I like seeing the problem clearly first"],
                    ["Build", "A mix of logic, UI, and data flow"],
                    ["Collaborate", "Working with other people and owning the job"],
                  ].map(([title, desc]) => (
                    <div key={title} className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4 transition hover:border-acid/40 hover:bg-acid/[.04]">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[.2em] text-acid">{title}</p>
                        <p className="mt-2 text-sm text-white/65">{desc}</p>
                      </div>
                      <span className="text-xs text-white/20 transition group-hover:text-acid">0{title.length}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="journey" className="section relative z-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Label>Journey</Label>
            <h2 className="section-title">A few milestones.</h2>
          </Reveal>

          <div className="mt-16 grid border-t border-white/10 md:grid-cols-5">
            {journey.map((step) => (
              <Reveal key={step[0] + step[1]}>
                <div className="group relative border-b border-white/10 py-7 md:min-h-52 md:border-b-0 md:border-r md:px-5">
                  <span className="absolute -top-1.5 left-0 h-3 w-3 rounded-full border border-acid bg-ink md:left-5" />
                  <p className="font-mono text-xs text-acid">{step[0]}</p>
                  <h3 className="mt-10 text-lg font-semibold">{step[1]}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/35">{step[2]}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <Mini title="Leadership" value="Cambrian Open House - Finance Lead" />
            <Mini title="Team Role" value="TEDxCIT - Technical Team Member" />
            <Mini title="Achievement" value="Winner - Cyber Security Grand Challenge 2.0" />
          </div>
        </div>
      </section>

      <section id="certifications" className="section relative z-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <Label>Learning</Label>
                <h2 className="section-title">Certificates & badges.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-white/40">A small collection of courses and badges I've completed along the way.</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {certifications.map((cert, index) => (
              <Reveal key={cert.title}>
                <div className="group min-h-60 rounded-3xl border border-white/10 bg-white/[.025] p-7 transition hover:-translate-y-1 hover:border-acid/40">
                  <div className="flex items-center justify-between">
                    <cert.icon className="text-acid" size={22} />
                    <span className="font-mono text-[9px] uppercase tracking-[.2em] text-white/20">0{index + 1}</span>
                  </div>
                  <p className="mt-10 font-mono text-[10px] uppercase tracking-[.2em] text-acid/80">{cert.kind}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{cert.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <Button href={profile.certificates} target="_blank" rel="noreferrer">
              Open archive <ArrowUpRight size={15} />
            </Button>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section relative z-10 pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <Label>Say hello</Label>
                <h2 className="section-title">Let's talk.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-white/40">The easiest ways to reach me are below. No extra noise.</p>
            </div>

            <div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <ContactCard icon={UserRound} label="Location" value={profile.location} href={undefined} />
              <ContactCard icon={MailOpen} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactCard icon={Github} label="GitHub" value="shreyav0304" href={profile.github} />
              <ContactCard icon={Briefcase} label="LinkedIn" value="shreyavinod" href={profile.linkedin} />
            </div>

            <Terminal />
          </Reveal>

          <footer className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 text-xs text-white/30 sm:flex-row">
            <p>Made by Shreya V · 2026</p>
            <div className="flex gap-5">
              <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                <Github size={16} />
              </a>
              <a href="#top">Back to top</a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

function Metric({ n, text }: { n: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5">
      <p className="text-2xl font-semibold text-white sm:text-4xl">{n}</p>
      <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-white/30">{text}</p>
    </div>
  );
}

function Mini({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.02] p-5">
      <p className="font-mono text-[9px] uppercase tracking-[.2em] text-acid">{title}</p>
      <p className="mt-3 text-sm text-white/65">{value}</p>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Bot;
  label: string;
  value: string;
  href?: string;
}) {
  const body = (
    <div className="rounded-2xl border border-white/10 bg-white/[.02] p-5 transition hover:border-acid/40">
      <Icon className="text-acid" size={18} />
      <p className="mt-4 font-mono text-[9px] uppercase tracking-[.2em] text-white/30">{label}</p>
      <p className="mt-2 text-sm text-white/70">{value}</p>
    </div>
  );

  if (!href) return body;

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {body}
    </a>
  );
}

function Project({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const Icon = p.icon;

  return (
    <motion.article
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
        event.currentTarget.style.setProperty("--my", `${event.clientY - bounds.top}px`);
      }}
      className="project-card group overflow-hidden rounded-3xl border border-white/10 bg-[#0b100e]/85"
    >
      <button onClick={() => setOpen(!open)} className="grid w-full gap-8 p-6 text-left sm:p-9 lg:grid-cols-[.15fr_.55fr_1fr_.15fr] lg:items-center">
        <p className="font-mono text-xs text-white/25">/{p.n}</p>
        <div>
          <p className="font-mono text-[9px] font-bold tracking-[.2em]" style={{ color: p.color }}>
            {p.tag}
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{p.title}</h3>
          <p className="mt-1 text-sm text-white/40">{p.subtitle}</p>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/50">{p.desc}</p>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition group-hover:rotate-45 group-hover:border-acid/50">
          <ArrowUpRight size={18} />
        </div>
      </button>

      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="grid border-t border-white/10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative flex min-h-64 items-center justify-center overflow-hidden border-b border-white/10 bg-black/20 lg:border-b-0 lg:border-r">
            <div className="absolute h-64 w-64 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-white/10" />
            <div className="absolute h-40 w-40 rounded-full border" style={{ borderColor: `${p.color}44`, boxShadow: `0 0 60px ${p.color}14` }} />
            <Icon size={54} style={{ color: p.color }} />
            <span className="absolute bottom-5 left-5 font-mono text-[9px] tracking-[.2em] text-white/25">PROJECT SUMMARY</span>
          </div>

          <div className="grid gap-8 p-7 sm:grid-cols-2 sm:p-10">
            <div>
              <p className="meta">Highlights</p>
              {p.features.map((feature) => (
                <p key={feature} className="border-b border-white/10 py-3 text-sm text-white/55">
                  ↳ {feature}
                </p>
              ))}
            </div>

            <div>
              <p className="meta">Technology stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] text-white/50">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="meta mt-8">Project note</p>
              <p className="mt-3 text-xs leading-5 text-white/40">Short version: what's actually built, or what I'm still working on.</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.article>
  );
}
