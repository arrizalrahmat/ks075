import { Login } from '@/types/login.type';

export type MembersStateType = {
  members: Member[];
  isLoading: boolean;
};

export type Gender = 'male' | 'female';

export type MemberName = {
  first: string;
  last: string;
  title: string;
};

export type MemberPicture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type Member = {
  gender: Gender;
  name: MemberName;
  login: Login;
  email: string;
  picture: MemberPicture;
};
