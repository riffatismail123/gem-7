// components/StatCard.tsx
export default function StatCard({ title, value }: { title: string; value: string }) {
return (
<div className="rounded-xl bg-white/5 border border-white/10 p-6">
<p className="text-sm text-white/60">{title}</p>
<h3 className="text-3xl font-bold mt-1">{value}</h3>
</div>
)
}