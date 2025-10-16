export default function ProgramsPage() {
  const programs = [
    {
      title: "Back-to-School Scholarship",
      description:
        "Funding tuition and supplies for students from low-income families.",
    },
    {
      title: "Community Health Outreach",
      description:
        "Mobile clinics delivering checkups, vaccines, and health education.",
    },
    {
      title: "Emergency Relief Kits",
      description:
        "Rapid distribution of food, water, and shelter for disaster-affected families.",
    },
  ];

  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Programs</h1>
      <p className="mt-6 text-foreground/80 max-w-3xl">
        We run targeted initiatives that focus on long-term impact and immediate
        relief, ensuring no community is left behind.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {programs.map((p) => (
          <div key={p.title} className="rounded-lg border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-black/20">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-foreground/70 mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
