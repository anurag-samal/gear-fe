import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { useNavigate } from "@solidjs/router";

import { Font, Theme } from "@/config/Brand";

import { ApiError } from "@/services/api.types";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { googleLogin } from "@/features/auth/auth.api";
import { authActions, authState } from "@/features/auth/auth.store";
import {GoogleIcon} from "./OauthButton";

export function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = createStore({
    email: "",
    password: "",
  });

  const [error, setError] = createSignal("");

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (authState.status === "loading") {
      return;
    }

    setError("");

    try {
      await authActions.login(form);

      navigate("/dashboard", {
        replace: true,
      });
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
        return;
      }

      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <div class="w-full">
      <header class="space-y-3">
        <h1
          class="text-4xl font-semibold tracking-tight"
          style={{
            color: Theme.vars.text,
            "font-family": Font.vars.heading,
          }}
        >
          Welcome Back
        </h1>

        <p
          class="text-base leading-7"
          style={{
            color: Theme.vars.textMuted,
            "font-family": Font.vars.body,
          }}
        >
          Sign in to continue building with Gear.
        </p>
      </header>

      <form class="mt-10 flex flex-col gap-5" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onInput={(event) => setForm("email", event.currentTarget.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onInput={(event) => setForm("password", event.currentTarget.value)}
        />

        {error() && (
          <div
            class="rounded-xl border px-4 py-3 text-sm"
            style={{
              color: Theme.vars.danger,
              "border-color": Theme.vars.danger,
              background: `${Theme.vars.danger}10`,
            }}
          >
            {error()}
          </div>
        )}

        <Button
          type="submit"
          variant="outline"
          fullWidth
          disabled={authState.status === "loading"}
        >
          {authState.status === "loading" ? "Signing In..." : "Sign In"}
        </Button>
      </form>

      <div class="my-8 flex items-center gap-4">
        <div
          class="h-px flex-1"
          style={{
            background: Theme.vars.border,
          }}
        />

        <span
          class="text-xs font-medium uppercase tracking-[0.2em]"
          style={{
            color: Theme.vars.textMuted,
            "font-family": Font.vars.body,
          }}
        >
          OR CONTINUE WITH
        </span>

        <div
          class="h-px flex-1"
          style={{
            background: Theme.vars.border,
          }}
        />
      </div>

      <Button variant="outline" leftIcon={GoogleIcon} fullWidth onClick={googleLogin}>
        Continue with Google
      </Button>

      <footer
        class="mt-10 text-center text-sm"
        style={{
          color: Theme.vars.textMuted,
          "font-family": Font.vars.body,
        }}
      >
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/signup")}
          class="font-semibold transition-opacity hover:opacity-80"
          style={{
            color: Theme.vars.primary,
          }}
        >
          Create one
        </button>
      </footer>
    </div>
  );
}
