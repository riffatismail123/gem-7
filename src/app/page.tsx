"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import StatCard from "@/components/StatCard";

// Mock Data
const fees = [
  { id: 1, name: "Ali Khan", grade: "10th", amount: 12000, status: "Paid" },
  { id: 2, name: "Sara Ahmed", grade: "9th", amount: 10000, status: "Pending" },
  { id: 3, name: "Usman Raza", grade: "8th", amount: 9000, status: "Paid" },
];

export default function FeeDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent blank screen by showing a matching background shell during hydration
  if (!mounted) return <div className="min-h-screen bg-[#0f172a]" />;

  return (
    <section className="min-h-screen px-6 py-14 bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">School Fee Dashboard</h1>
            <p className="mt-2 text-sm text-white/60 max-w-md">
              Monitor student fee collection and financial status.
            </p>
          </div>
          <Link href="/auto-generate" className="px-7 py-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 text-sm font-semibold shadow-xl shadow-indigo-500/30 hover:scale-105 transition">
            Auto Generate Fees
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <StatCard title="Total Students" value="320" />
          <StatCard title="Fees Collected" value="PKR 2.4M" />
          <StatCard title="Pending Fees" value="PKR 380K" />
        </div>

        {/* Table */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-white/10 text-white/70">
              <tr>
                <th className="p-4 text-left">Student</th>
                <th className="p-4 text-left">Class</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {fees.map(fee => (
                <tr key={fee.id} className="border-t border-white/10 hover:bg-white/5 transition">
                  <td className="p-4 font-medium">{fee.name}</td>
                  <td className="p-4 text-white/70">{fee.grade}</td>
                  <td className="p-4 font-semibold">PKR {fee.amount.toLocaleString()}</td>
                  <td className={`p-4 font-semibold ${fee.status === "Paid" ? "text-emerald-400" : "text-amber-400"}`}>
                    {fee.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}