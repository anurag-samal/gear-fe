import { createStore } from "solid-js/store";

import * as authApi from "./auth.api";
import type { LoginRequest, Profile, RegisterRequest } from "./auth.types";

type AuthStatus = "idle" | "loading";

interface AuthState {
  user: Profile | null;
  status: AuthStatus;
  initialized: boolean;
}

const [state, setState] = createStore<AuthState>({
  user: null,
  status: "idle",
  initialized: false,
});

async function login(data: LoginRequest): Promise<void> {
  setState("status", "loading");

  try {
    const user = await authApi.login(data);

    setState({
      user,
      status: "idle",
      initialized: true,
    });
  } catch (error) {
    setState("status", "idle");
    throw error;
  }
}

async function register(data: RegisterRequest): Promise<void> {
  setState("status", "loading");

  try {
    const user = await authApi.register(data);

    setState({
      user,
      status: "idle",
      initialized: true,
    });
  } catch (error) {
    setState("status", "idle");
    throw error;
  }
}

async function loadProfile(): Promise<void> {
  setState("status", "loading");

  try {
    const user = await authApi.profile();

    setState({
      user,
      status: "idle",
      initialized: true,
    });
  } catch {
    setState({
      user: null,
      status: "idle",
      initialized: true,
    });
  }
}

async function logout(): Promise<void> {
  try {
    await authApi.logout();
  } finally {
    setState({
      user: null,
      status: "idle",
      initialized: false,
    });
  }
}

// eslint-disable-next-line solid/reactivity
export const authState = state;

export const authActions = {
  login,
  register,
  loadProfile,
  logout,
};
