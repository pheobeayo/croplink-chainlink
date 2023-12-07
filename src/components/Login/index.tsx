import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  Grid,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

import Navbar from "../Navbar";
import SignInButton from "../SignInButton";

import { AuthContextProps, useAuthContext } from "@/context/useUserContext";

export default function Login() {
  const { state } = useAuthContext() as AuthContextProps;
  const router = useRouter();

  const handleRedirect = useCallback(() => {
    router.push("/");
  }, [router]);

  useEffect(() => {
    if (state.user && !state.isLoading) handleRedirect();
  }, [state, handleRedirect]);

  return (
    <Box>
      <Box position={"relative"} bgGradient="white">
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 20 }}
            py={{ base: 20, md: 32 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack>
                <Heading
                  lineHeight={1.5}
                  fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                  bgGradient="linear(to-r, #000000,#30A43B)"
                  bgClip="text"
                >
                  Smart Farms and Harvest,
                  <br></br>Smarter Trades and Choices.
                </Heading>
                <Heading
                  fontSize={{ base: "xl", sm: "2xl", md: "lg", lg: "xl" }}
                >
                  Transforming the sale of agricultural products, providing
                  <br></br>both farmers and buyers with secure and efficient
                  <br></br> transactions with our weather-savvy smart contracts
                </Heading>
              </Stack>
              <Stack>
                <Text color={"gray.500"}>Connect your wallet and sign in:</Text>
                <SignInButton />
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={"/assets/heroimage.svg"}
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 40 }}
          direction={{ base: "column" }}
        >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}
            textAlign="center"
            maxW={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
            m="auto"
            pb="20"
          >
            A seamless and transparent ecosystem for
            <br></br>farmers and sellers alike
          </Heading>

          <Box
            position={"relative"}
            rounded={"2xl"}
            width={"full"}
            overflow={"hidden"}
            maxW="100%"
          >
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <Image
                alt="farmer"
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"/assets/farmer.svg"}
              />
              <Image
                alt="buyer"
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"/assets/buyer.svg"}
              />
            </Grid>
            <Stack
              spacing={"30rem"}
              direction="row"
              align="center"
              marginTop={4}
              marginLeft={40}
            >
              <Stack>
                <Text color={"#30A43B"}>Sign Up as a Farmer</Text>
                <SignInButton />
              </Stack>
              <Stack>
                <Text color={"#30A43B"}>Sign Up as a Buyer</Text>
                <SignInButton />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
