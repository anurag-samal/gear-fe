import type { ParentComponent } from "solid-js";

import { Font, Theme } from "@/config/Brand";

import { AuthHero } from "./AuthHero";

export const AuthLayout: ParentComponent = (props) => {
  return (
    <main
      class="grid min-h-screen lg:grid-cols-[58%_42%]"
      style={{
        background: Theme.vars.background,
        "font-family": Font.vars.body,
      }}
    >
      <aside
        class="hidden lg:flex"
        style={{
          background: `linear-gradient(
            135deg,
            ${Theme.vars.primary},
            ${Theme.vars.primaryHover}
          )`,
        }}
      >
        <AuthHero />
      </aside>

      <section
        class="flex items-center"
        style={{
          background: Theme.vars.surface,
        }}
      >
        <div class="w-full max-w-md px-10 py-12 lg:mx-auto">
          {props.children}
        </div>
      </section>
    </main>
  );
};
