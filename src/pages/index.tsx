import { Flex } from '@chakra-ui/react';

import { UserCardContainer } from '@/ui/user/UserCardContainer';

function Home() {
  return (
    <Flex w='100vw' h='100vh' justifyContent='center'>
      <UserCardContainer userID={1} />
    </Flex>
  );
}

export default Home;
