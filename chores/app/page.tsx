import { Container } from "@/components/container";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-foreground">
      <Container className="flex-1 flex flex-col gap-12 py-10">
        {/* Hero / Intro */}
        <section className="w-full flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Simple chores. Less friction.
          </h1>
          <p className="text-sm text-foreground/80 max-w-2xl">
            A lightweight place to track tasks and routines. Fast to use, easy
            to maintain — built around small daily wins.
          </p>
        </section>

        {/* Main content placeholder */}
        <section className="w-full grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6 bg-card/70">
            <h2 className="font-semibold mb-2">Today</h2>
            <p className="text-sm text-foreground/80">
              No chores yet — add one to get started.
            </p>
          </div>
          <div className="rounded-lg border p-6 bg-card/70">
            <h2 className="font-semibold mb-2">Upcoming</h2>
            <p className="text-sm text-foreground/80">
              Plan and organize your routine.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
