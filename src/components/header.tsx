import { Avatar, Center, Flex, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export const Header = (): JSX.Element => (
  <Center as="header" w="100%" p={4} borderColor="shadowed" borderBottom="2px">
    <NextLink href="/">
      <a>
        <Flex align="center">
          <Avatar
            w={8}
            h={8}
            mr={2}
            borderRadius="37%"
            name="Approversロゴ"
            src="/android-chrome-192x192.png"
          />
          <Heading as="span">Approvers</Heading>
        </Flex>
      </a>
    </NextLink>
  </Center>
);
