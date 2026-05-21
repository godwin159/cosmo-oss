import { ParticlePlayground } from "@/components/particles/playground";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="luminous-spinners bg-background">
        <section className="w-full max-w-6xl border-x border-[var(--ls-border)] mx-auto px-4 lg:px-8">
          <header className="py-8 lg:py-10 text-left">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--ls-muted-foreground)]">
              Motion Library
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--ls-foreground)] sm:text-5xl">
              Cosmo Playground
            </h1>
            <p className="mt-4 max-w-xl text-sm text-[var(--ls-muted-foreground)] sm:text-base">
              Tune count, size, and speed. Live preview on the canvas.
            </p>
          </header>

          <div className="pb-10">
            <ParticlePlayground />
          </div>
        </section>
      </div>
    </div>
  );
}
