"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-[#070b14]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <h1 className="logo-font text-2xl text-sky-400">
            Mentora AI
          </h1>

          <div className="hidden items-center gap-8 text-slate-300 md:flex">
            <button>Features</button>
            <button>Roadmaps</button>
            <button>Dashboard</button>
          </div>

          <div className="hidden md:block">
            <Button text="Get Started" />
          </div>

          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="border-t border-slate-800 bg-[#070b14] md:hidden">
          <Container>
            <div className="flex flex-col gap-4 py-6">
              <button>Features</button>
              <button>Roadmaps</button>
              <button>Dashboard</button>
              <Button text="Get Started" />
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}