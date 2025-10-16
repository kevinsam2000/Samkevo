export default function AboutPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About Mahanium Charity Organization</h1>
      <p className="mt-6 text-foreground/80 max-w-3xl">
        Mahanium Charity Organization is dedicated to uplifting vulnerable communities
        by providing access to quality education, essential healthcare services, and
        timely disaster relief. We partner with local leaders to ensure sustainable,
        community-driven impact.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-black/20">
          <h3 className="font-semibold">Education</h3>
          <p className="text-sm text-foreground/70 mt-2">Scholarships, school supplies, and community learning centers.</p>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-black/20">
          <h3 className="font-semibold">Healthcare</h3>
          <p className="text-sm text-foreground/70 mt-2">Mobile clinics, maternal care, and preventative health programs.</p>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-black/20">
          <h3 className="font-semibold">Relief</h3>
          <p className="text-sm text-foreground/70 mt-2">Rapid response to natural disasters with food and shelter.</p>
        </div>
      </div>
    </section>
  );
}
