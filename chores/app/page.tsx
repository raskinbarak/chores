import { Container } from "@/components/ui/container";

interface person {
  id: number;
  first_name: string;
  last_name: string;
  birthdate: string;
}

export default async function Home() {
  const base =
    process.env.NEXT_PUBLIC_BASE_URL ??
    `http://localhost:${process.env.PORT ?? 3000}`;
  const apiUrl = new URL("/api", base);
  const res = await fetch(apiUrl.toString(), { cache: "no-store" });
  let persons = [];
  let error = null;
  if (res.ok) {
    persons = await res.json();
  } else {
    error = "Failed to load persons.";
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-foreground">
      <Container className="flex-1 flex flex-col gap-12 py-10">
        {/* Hero / Intro */}
        <section className="w-full flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            I love you. (If being honest)
          </h1>
          <p className="text-sm text-foreground/80 max-w-2xl">
            A lightweight place to track tasks and routines. Fast to use, easy
            to maintain — built around small daily wins.
          </p>
        </section>

        {/* Main content placeholder */}
        <section className="w-full grid gap-6">
          <div className="rounded-lg border p-6 bg-card/70">
            <h2 className="font-semibold mb-4">People</h2>
            {error ? (
              <p className="text-sm text-destructive">
                Failed to load persons.
              </p>
            ) : persons.length === 0 ? (
              <p className="text-sm text-foreground/80">No persons found.</p>
            ) : (
              <ul className="flex flex-col gap-3">
                {persons.map((p: person) => (
                  <h1 key={p.id}>
                    {p.first_name} {p.last_name} was born on {p.birthdate}
                  </h1>
                ))}
              </ul>
            )}
          </div>
        </section>
      </Container>
    </main>
  );
}
