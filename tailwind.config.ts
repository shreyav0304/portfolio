import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-sans)"], mono: ["var(--font-mono)"] },
      colors: { ink: "#070b0a", acid: "#b9ff66", mint: "#84f7c5" },
      animation: { scan: "scan 8s linear infinite", float: "float 6s ease-in-out infinite" },
      keyframes: {
        scan: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100vh)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } }
      }
    }
  },
  plugins: []
} satisfies Config;
