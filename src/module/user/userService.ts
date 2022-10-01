import { axios } from '@/lib/axios';

import type { User } from './userEntity';
import { UserSchema } from './userEntity';

type GetUser = (id: number) => Promise<User>;

export const getUser: GetUser = async (id: number) => {
  return axios(
    {
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    },
    UserSchema,
  );
};
