import { Box, Container, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import * as React from "react";

import SignInButton from "../SignInButton";

import { AuthContextProps, useAuthContext } from "@/context/useUserContext";

const Navbar = () => {
  const { state } = useAuthContext() as AuthContextProps;

  return (
    <Box bg="white" position={"sticky"} top="0" zIndex={99}>
      <Container maxW={"7xl"}>
        <Stack
          as="nav"
          align="center"
          wrap="wrap"
          py={3}
          direction={{ base: "column", sm: "row" }}
          justify={{ base: "center", sm: "space-between" }}
        >
          <Flex align="center">
            <Image
              w={60}
              mr="2"
              src="/assets/logo.svg"
              alt="logo"
              mt="4"
            />
            
          </Flex>

          <Box display="flex" width="auto" alignItems="center">
            {state?.user && <SignInButton />}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;

