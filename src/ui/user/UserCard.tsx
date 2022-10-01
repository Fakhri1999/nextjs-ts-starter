import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Skeleton,
  SkeletonCircle,
  Text,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { IoMdCloseCircle as ErrorIcon } from 'react-icons/io';

import type { User } from '@/module/user/userEntity';

type Props = {
  isLoading: boolean;
  isError: boolean;
  user?: User;
};

function UserCard(props: Props) {
  const userFullAddress = `${props.user?.address.street}, ${props.user?.address.suite}, ${props.user?.address.city}, ${props.user?.address.zipcode}`;

  if (props.isError) {
    return (
      <Card>
        <Icon as={ErrorIcon} fontSize='6xl' color='red.600' />
        <Heading as='h4'>Ooppss..</Heading>
        <Text mt='2'>Something went wrong</Text>
      </Card>
    );
  }

  return (
    <Card>
      {props.isLoading ? (
        <SkeletonCircle size='24' mx='auto' mb={4} />
      ) : (
        <Avatar
          size='xl'
          src='https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          mb={4}
          pos='relative'
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
      )}

      <Skeleton isLoaded={!props.isLoading}>
        <Heading fontSize='2xl' fontFamily='body'>
          {props?.user?.name || 'loading...'}
        </Heading>
      </Skeleton>
      <Skeleton isLoaded={!props.isLoading}>
        <Text fontWeight={600} color='gray.500' mb={4}>
          @{props?.user?.username || 'loading...'}
        </Text>
      </Skeleton>
      <Skeleton isLoaded={!props.isLoading}>
        <Text textAlign='center' color='gray.700' px={3}>
          {userFullAddress}
        </Text>
      </Skeleton>

      <Flex mt={8} justifyContent='center'>
        <a href='https://google.com' target='_blank' rel='noreferrer'>
          <Button
            isLoading={props.isLoading}
            fontSize='sm'
            rounded='full'
            bg='blue.400'
            color='white'
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            boxShadow='0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'>
            Go to my website
          </Button>
        </a>
      </Flex>
    </Card>
  );
}

function Card(props: { children: ReactNode }) {
  return (
    <Center py={6}>
      <Box
        maxW='320px'
        w='full'
        bg='white'
        boxShadow='lg'
        rounded='lg'
        p={6}
        textAlign='center'>
        {props.children}
      </Box>
    </Center>
  );
}

export { UserCard };
