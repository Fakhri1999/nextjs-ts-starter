import { useToast } from '@chakra-ui/react';
import React from 'react';
import { matchPI } from 'ts-adt';

import { useGetUserQuery } from '@/module/user/userHook';

import { UserCard } from './UserCard';

type Props = {
  userID: number;
};
function UserCardContainer(props: Props) {
  const toast = useToast();

  const showErrorToast = (title: string, description: string) => {
    toast({
      title,
      description,
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  const getUserQuery = useGetUserQuery(props.userID, {
    refetchOnWindowFocus: false,
    onError: (err) => {
      matchPI(err)(
        {
          AXIOS_ERROR: ({ message }) => {
            showErrorToast('Network Error', message);
          },
          DECODE_ERROR: ({ message }) => {
            showErrorToast('Decode Error', message);
          },
        },
        (rest) => {
          showErrorToast('Unknown Error', JSON.stringify(rest));
        },
      );
    },
  });

  return (
    <UserCard
      isLoading={getUserQuery.isLoading}
      user={getUserQuery.data}
      isError={getUserQuery.isError}
    />
  );
}

export { UserCardContainer };
