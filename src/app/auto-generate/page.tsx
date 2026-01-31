"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AutoGeneratePage() {
  const [mounted, setMounted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Fix Hydration issues for Vercel
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    // Simulate API call or logic
    setTimeout(() => {
      setIsGenerating(false);
      alert("Fee records generated successfully for the selected class!");
    }, 1500);
  };

  if (!mounted) return <div className="min-h-screen bg-[#0f172a]" />;

  return (
    <section
      className="
        min-h-screen
        px-6 py-14
        bg-linear-to-br
        from-[#0f172a] via-[#1e1b4b] to-[#312e81]
        text-white
      "
    >
      {/* Container */}
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Navigation / Back Button */}
        <Link 
          href="/" 
          className="text-sm text-indigo-400 hover:text-indigo-300 transition flex items-center gap-2"
        >
          ← Back to Dashboard
        </Link>

        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Auto Fee Generator
          </h1>
          <p className="mt-3 text-sm text-white/60 max-w-xl leading-relaxed">
            Automatically generate monthly fee records based on selected class and predefined rules. 
            This agentic tool ensures no student is missed during the billing cycle.
          </p>
        </header>

        {/* Form Card */}
        <form
          onSubmit={handleGenerate}
          className="
            rounded-2xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            p-8 space-y-8
            shadow-2xl
          "
        >
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Class Selection - ACCESSIBILITY FIXED */}
            <div className="space-y-3">
              <label htmlFor="class-select" className="text-sm font-medium text-white/80">
                Select Class
              </label>
              <select
                id="class-select"
                name="class"
                required
                title="Select Student Class for Fee Generation"
                className="
                  w-full rounded-xl
                  bg-white/10
                  border border-white/10
                  px-4 py-3
                  text-white
                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                  transition
                "
              >
                <option value="" className="text-black">Choose class</option>
                <option value="8" className="text-black">8th Grade</option>
                <option value="9" className="text-black">9th Grade</option>
                <option value="10" className="text-black">10th Grade</option>
              </select>
            </div>

            {/* Month Input - ACCESSIBILITY FIXED */}
            <div className="space-y-3">
              <label htmlFor="month-input" className="text-sm font-medium text-white/80">
                Fee Month
              </label>
              <input
                id="month-input"
                name="month"
                type="text"
                required
                placeholder="e.g. 2026-01"
                title="Enter the month in YYYY-MM format"
                className="
                  w-full rounded-xl
                  bg-white/10
                  border border-white/10
                  px-4 py-3
                  text-white placeholder:text-white/30
                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                  transition
                "
              />
            </div>
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            disabled={isGenerating}
            className={`
              w-full py-4 rounded-xl
              bg-linear-to-r from-indigo-500 to-purple-600
              font-bold uppercase tracking-widest text-sm
              shadow-xl shadow-purple-500/20
              hover:scale-[1.01] active:scale-[0.98] transition
              ${isGenerating ? "opacity-70 cursor-not-allowed" : ""}
            `}
          >
            {isGenerating ? "Generating Intelligence..." : "Generate Fee Records"}
          </button>
        </form>

        {/* AI Insight Box */}
        <footer
          className="
            rounded-2xl
            bg-indigo-500/10
            border border-indigo-500/20
            p-6 flex gap-4 items-start
          "
        >
          <span className="text-2xl">⚡</span>
          <div>
            <h4 className="font-semibold text-white text-sm">Agentic Insight</h4>
            <p className="text-xs text-white/60 mt-1 leading-relaxed">
              The system will automatically apply recurring discounts for scholarship students 
              and calculate previous month balances for the selected period.
            </p>
          </div>
        </footer>

      </div>
    </section>
  );
}