import { api } from "@/services/api";

import type { LoginRequest, Profile, RegisterRequest } from "./auth.types";

export async function login(data: LoginRequest): Promise<Profile> {
  const response = await api.post<Profile>("/login", data);

  return response.data;
}

export async function register(data: RegisterRequest): Promise<Profile> {
  const response = await api.post<Profile>("/register", data);

  return response.data;
}

export async function profile(): Promise<Profile> {
  const response = await api.get<Profile>("/profile");

  return response.data;
}

export async function logout(): Promise<void> {
  await api.post("/logout");
}

export async function refresh(): Promise<void> {
  await api.post("/refresh");
}

export function googleLogin(): void {
  window.location.href = `${import.meta.env.VITE_API_URL}/google/login`;
}
