export default function AutoGeneratePage() {
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
      <div className="max-w-3xl mx-auto space-y-14">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Auto Fee Generator
          </h1>
          <p className="mt-3 text-sm text-white/60 max-w-xl">
            Automatically generate monthly fee records based on selected class and predefined rules.
          </p>
        </div>

        {/* Form Card */}
        <form
          className="
            rounded-2xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            p-8 space-y-8
          "
        >
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Class */}
            <div className="space-y-2">
              <label htmlFor="class" className="text-sm font-medium text-white/80">
                Select Class
              </label>
              <select
                id="class"
                name="class"
                className="
                  w-full rounded-xl
                  bg-white/10
                  border border-white/10
                  px-4 py-3
                  text-white
                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                "
              >
                <option value="">Choose class</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
              </select>
            </div>

            {/* Month */}
            <div className="space-y-2">
              <label htmlFor="month" className="text-sm font-medium text-white/80">
                Fee Month
              </label>
              <input
                id="month"
                name="month"
                type="text"
                placeholder="YYYY-MM (e.g. 2026-01)"
                className="
                  w-full rounded-xl
                  bg-white/10
                  border border-white/10
                  px-4 py-3
                  text-white placeholder:text-white/40
                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                "
              />
            </div>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="
              w-full py-3.5 rounded-xl
              bg-linear-to-r from-indigo-500 to-purple-600
              font-semibold
              shadow-xl shadow-purple-500/30
              hover:scale-[1.02] transition
            "
          >
            Generate Fee Records
          </button>
        </form>

        {/* Info Card */}
        <div
          className="
            rounded-2xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            p-6
          "
        >
          <p className="text-sm text-white/70">
            ⚡ <span className="font-semibold text-white">AI-ready:</span> Integrate logic to auto-calculate fees, fines, discounts, and late charges.
          </p>
        </div>

      </div>
    </section>
  )
}
