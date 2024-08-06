export type AuthDto = {
  id: number;
  name?: string;
  email: string;
  password: string;
  profileImage?: string;
  expiresIn: number;
};
