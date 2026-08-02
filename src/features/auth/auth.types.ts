export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface Profile {
  id: string;
  organizationId?: string;

  email: string;
  fullName: string;

  avatarUrl?: string;

  isEmailVerified: boolean;
}
