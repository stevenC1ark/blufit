"use client";
import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

// TODO: Check if a user is signed in or not.

export default function Home() {
  const router = useRouter();

  return (
    <Flex
      background="blue.400"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Heading mb={6}>Welcome to Blufit</Heading>
      <Stack direction="row" spacing={4} align="center">
        <Button
          onClick={() => router.push("/signup")}
          colorScheme="blue"
          variant="solid"
        >
          Sign Up
        </Button>
        <Button colorScheme="blue" variant="outline">
          Login
        </Button>
      </Stack>
    </Flex>
  );
}
