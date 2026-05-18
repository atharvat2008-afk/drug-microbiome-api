const sampleRows = [
  {
    drug: "5-Fluorouracil",
    microbe: "Example strain A",
    interaction: "Metabolism",
    system: "In vitro",
    source: "Curated paper",
  },
  {
    drug: "Digoxin",
    microbe: "Example strain B",
    interaction: "Inactivation",
    system: "In vitro",
    source: "Curated paper",
  },
  {
    drug: "Levodopa",
    microbe: "Example strain C",
    interaction: "Transformation",
    system: "In vitro",
    source: "Curated paper",
  },
]

export default function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="font-semibold">DrugMicrobiome API</div>

          <a
            href="#waitlist"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white"
          >
            Join waitlist
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Developer-first microbiome data
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
          Machine-learning-ready drug–microbiome interaction data.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Programmatic access to curated drug metabolism and microbiome interaction
          data, built for ML researchers, microbiome scientists, and drug discovery
          teams.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#waitlist"
            className="rounded-xl bg-slate-900 px-5 py-3 text-center font-medium text-white"
          >
            Join the waitlist
          </a>

          <a
            href="#demo"
            className="rounded-xl border border-slate-300 px-5 py-3 text-center font-medium"
          >
            View demo API
          </a>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">The problem</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Existing drug–microbiome databases are useful for browsing, but are
              not designed for automated model training or developer workflows.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">The product</h2>

            <p className="mt-3 leading-7 text-slate-600">
              A structured API that normalizes drugs, microbes, interaction types,
              experimental systems, papers, and metadata into one usable format.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Initial focus</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Starting with in-vitro drug metabolism studies before expanding into
              broader microbiome perturbation and antibiotic response datasets.
            </p>
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold">Example API response</h2>

        <p className="mt-3 max-w-2xl text-slate-600">
          A preview of what programmatic access could look like for ML teams.
        </p>

        <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-6 text-sm leading-7 text-slate-100">
{`GET /api/v1/interactions?drug=5-fluorouracil

{
  "drug": "5-Fluorouracil",
  "microbe": "Example bacterium",
  "strain": "Example strain A",
  "interaction_type": "drug metabolism",
  "experimental_system": "in vitro",
  "substrate": "5-Fluorouracil",
  "metabolite": "example metabolite",
  "source_paper": "DOI pending",
  "metadata_status": "curated",
  "ml_ready": true
}`}
        </pre>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold">Sample structured dataset</h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            The real product would convert scattered literature and metadata into
            clean rows usable for modeling.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="px-5 py-4">Drug</th>
                  <th className="px-5 py-4">Microbe</th>
                  <th className="px-5 py-4">Interaction</th>
                  <th className="px-5 py-4">System</th>
                  <th className="px-5 py-4">Source</th>
                </tr>
              </thead>

              <tbody>
                {sampleRows.map((row, index) => (
                  <tr key={index} className="border-t border-slate-200">
                    <td className="px-5 py-4 font-medium">{row.drug}</td>
                    <td className="px-5 py-4">{row.microbe}</td>
                    <td className="px-5 py-4">{row.interaction}</td>
                    <td className="px-5 py-4">{row.system}</td>
                    <td className="px-5 py-4">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="mx-auto max-w-3xl px-6 py-24 text-center"
      >
        <h2 className="text-4xl font-semibold">Get early access</h2>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Join the waitlist for a developer-facing drug–microbiome interaction API.
        </p>

        <a
          href="https://forms.gle/TNKp9FuGHhCbT3Vo8"
          className="mt-8 inline-block rounded-xl bg-slate-900 px-6 py-3 font-medium text-white"
        >
          Join waitlist
        </a>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        Built for ML-ready microbiome data access.
      </footer>
    </main>
  )
}