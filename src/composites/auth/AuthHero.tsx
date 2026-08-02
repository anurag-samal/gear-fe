export function AuthHero() {
  return (
    <div class="relative flex h-full w-full flex-col justify-between overflow-hidden p-12 text-white">
      {/* Background Image */}
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          "background-image": 'url("/assets/gear-hero-illustration.webp")', // TODO: Add image URL
        }}
      />

      {/* Dark Overlay */}
      <div
        class="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.88), rgba(30,41,59,0.82), rgba(15,23,42,0.92))",
        }}
      />

      {/* Background Grid */}
      <div
        class="absolute inset-0 opacity-10"
        style={{
          "background-image":
            "linear-gradient(rgba(255, 255, 255, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.16) 1px, transparent 1px)",
          "background-size": "32px 32px",
        }}
      />

      {/* Primary Glow */}
      <div
        class="absolute -right-32 top-20 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: "var(--theme-primary)",
          opacity: 0.2,
        }}
      />

      {/* Header */}
      <div class="relative z-10">
        <h1
          class="text-4xl tracking-tight"
          style={{
            "font-family": "var(--font-logo)",
          }}
        >
          Gear
        </h1>

        <p
          class="mt-3 max-w-md text-base leading-7 text-white/80"
          style={{
            "font-family": "var(--font-body)",
          }}
        >
          Engineering smarter workflows for modern teams.
        </p>
      </div>

      {/* Footer */}
      <div
        class="relative z-10 text-sm text-white/60"
        style={{
          "font-family": "var(--font-body)",
        }}
      >
        Built for teams that move fast.
      </div>
    </div>
  );
}
