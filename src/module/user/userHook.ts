import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import type { APIError } from '@/lib/axios';

import type { User } from './userEntity';
import { getUser } from './userService';

export const useGetUserQuery = (
  id: number,
  config: UseQueryOptions<User, APIError, User, Array<string>>,
) => {
  return useQuery(['user', id.toString()], () => getUser(id), config);
};
