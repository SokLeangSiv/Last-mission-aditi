import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans">
      <header className="border-b border-zinc-100 dark:border-zinc-800">
        <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/next.svg" alt="Logo" width={36} height={36} className="dark:invert" />
            <span className="text-lg font-semibold">Acme Solutions</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#work" className="hover:underline">Work</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-20">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We build professional digital products that drive results.
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
              Strategy, design, and engineering for teams that want reliable, elegant, and fast web experiences.
            </p>
            <div className="mt-8 flex gap-4">
              <a className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800" href="#contact">
                Get started
              </a>
              <a className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 hover:bg-zinc-50" href="#work">
                Our work
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-zinc-500">Trusted by</dt>
                <dd className="mt-1 font-medium">50+ companies</dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-500">Years</dt>
                <dd className="mt-1 font-medium">10+</dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-500">Projects</dt>
                <dd className="mt-1 font-medium">200+</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-zinc-900">
            <h3 className="text-xl font-semibold">Featured Project</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">A performance-focused web platform with accessible UX and enterprise-grade reliability.</p>
            <div className="mt-6 h-48 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center text-zinc-400">Project screenshot</div>
          </div>
        </section>

        <section id="services" className="mt-16">
          <h2 className="text-2xl font-semibold">What we do</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Product Strategy</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Roadmaps, discovery, and prioritization.</p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Design & UX</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">User research, interfaces, and prototypes.</p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Engineering</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Scalable web apps, integrations, and delivery.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm">&copy; {new Date().getFullYear()} Acme Solutions. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex gap-4 text-sm">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
