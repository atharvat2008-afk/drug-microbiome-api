const sampleRows = [
  {
    substance: "5-Fluorouracil",
    sampleType: "Human stool-derived community",
    experimentType: "In-vitro incubation",
    metabolite: "DHFU",
    source: "PMC9530025 / PRJNA720145",
  },
  {
    substance: "5-Fluorouracil",
    sampleType: "Patient stool sample",
    experimentType: "Ex vivo metabolism assay",
    metabolite: "DHFU",
    source: "PRJNA1169175",
  },
  {
    substance: "5-Fluorouracil",
    sampleType: "Single strain incubation",
    experimentType: "In-vitro incubation",
    metabolite: "DHFU",
    source: "PreTA / NAD enzyme reported",
  },
]

export default function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="font-semibold">SubstanceMicrobiome API</div>

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
          Machine-learning-ready active substance–microbiome interaction data.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Programmatic access to curated active substance metabolism and microbiome
          interaction data, built for ML researchers, microbiome scientists, and
          drug discovery teams.
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
              Existing microbiome interaction datasets are useful for browsing, but
              their metadata is scattered, inconsistent, and not designed for
              automated model training or developer workflows.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">The product</h2>

            <p className="mt-3 leading-7 text-slate-600">
              An experiment-level API that structures active substances, sample
              types, experimental systems, metabolites, source papers, sequencing
              accessions, and metadata into one usable format.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Initial focus</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Starting with in-vitro metabolism experiments across single strains,
              synthetic communities, and stool-derived microbial samples.
            </p>
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold">Example API response</h2>

        <p className="mt-3 max-w-2xl text-slate-600">
          A preview of what experiment-level programmatic access could look like
          for ML teams.
        </p>

        <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-6 text-sm leading-7 text-slate-100">
{`GET /api/v1/experiments?substance=5-fluorouracil

{
  "active_substance": "5-Fluorouracil",
  "primary_metabolite": "DHFU",
  "interaction_type": "microbial drug metabolism",
  "experiment_entry_type": "in-vitro incubation",
  "sample_context": "human stool-derived microbial community",
  "enzyme_or_operon": "PreTA operon; NAD-dependent enzyme",
  "source_paper": "PMC9530025",
  "ena_accession": "PRJNA720145",
  "ml_ready": true
}`}
        </pre>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold">Sample structured dataset</h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            The real product would convert scattered literature, sequencing links,
            and experimental metadata into clean experiment-level rows usable for
            modeling.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="px-5 py-4">Substance</th>
                  <th className="px-5 py-4">Sample type</th>
                  <th className="px-5 py-4">Experiment type</th>
                  <th className="px-5 py-4">Metabolite</th>
                  <th className="px-5 py-4">Source</th>
                </tr>
              </thead>

              <tbody>
                {sampleRows.map((row, index) => (
                  <tr key={index} className="border-t border-slate-200">
                    <td className="px-5 py-4 font-medium">{row.substance}</td>
                    <td className="px-5 py-4">{row.sampleType}</td>
                    <td className="px-5 py-4">{row.experimentType}</td>
                    <td className="px-5 py-4">{row.metabolite}</td>
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
          Join the waitlist for a developer-facing active substance–microbiome
          interaction API.
        </p>

        <a
          href="https://forms.gle/TNKp9FuGHhCbT3Vo8"
          className="mt-8 inline-block rounded-xl bg-slate-900 px-6 py-3 font-medium text-white"
        >
          Join waitlist
        </a>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        Built for ML-ready active substance–microbiome data access.
      </footer>
    </main>
  )
}