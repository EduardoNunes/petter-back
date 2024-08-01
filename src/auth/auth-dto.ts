export type AuthDto = {
  name?: string;
  email: string;
  password: string;
  profileImage?: string;
  expiresIn: number;
};
