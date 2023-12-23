"use client";
import { useState } from "react";
import signUpChecker, { signUpNewUser } from "./functionality";
import {
  Flex,
  Input,
  Heading,
  Button,
  Text,
  Link,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

// TODO: Make an empty signup input checker
// TODO: Make so you can show/hide password

export default function Signup() {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [passMismatch, setPassMissmatch] = useState(false);
  const [passState, setPassState] = useState(true);
  const [emailState, setEmailState] = useState(true);
  const [showP, setShowP] = useState(false);
  const [showE, setShowE] = useState(false);
  const handleClickP = () => setShowP(!showP);
  const handleClickE = () => setShowE(!showE);

  const router = useRouter();

  function signUpHandler() {
    setPassMissmatch(false);
    setPassState(true);

    if (email) {
      setEmailState(true);
      if (signUpChecker(passwordOne, passwordTwo) === "passwordMismatch") {
        setPassMissmatch(true);
      }

      if (signUpChecker(passwordOne, passwordTwo) !== "passwordMismatch") {
        setPassMissmatch(false);
        if (signUpChecker(passwordOne, passwordTwo) === true) {
          setPassState(true);
          signUpNewUser(email, passwordOne);
          router.push("/");
        } else setPassState(false);
      }
    } else setEmailState(false);
  }

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordOneChange = (e) => {
    setPasswordOne(e.target.value);
  };

  const passwordTwoChange = (e) => {
    setPasswordTwo(e.target.value);
  };

  const emailText = "Email field must be filled.";

  const mismatchText = "Password does not match.";

  const passwordText =
    "Password must be 8 characters long\n contains at least a capital letter\n a symbol and a number";

  return (
    <div className="App">
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        background="blue.400"
      >
        <Flex direction="column" background="gray.700" p={12} rounded={6}>
          <Heading textAlign="center" mb={6} textColor="gray.100">
            Sign Up
          </Heading>
          <Input
            placeholder="Enter your email"
            variant="filled"
            mb={3}
            type="email"
            value={email}
            onChange={emailChange}
          />
          <InputGroup size="md" mb={3}>
            <Input
              pr="4.5rem"
              type={showP ? "text" : "password"}
              placeholder="Enter a password"
              variant="filled"
              value={passwordOne}
              onChange={passwordOneChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClickP}>
                {showP ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup size="md" mb={3}>
            <Input
              pr="4.5rem"
              type={showE ? "text" : "password"}
              placeholder="Confirm your password"
              variant="filled"
              value={passwordTwo}
              onChange={passwordTwoChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClickE}>
                {showE ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {passMismatch === true && (
            <Flex fontSize="medium" textColor="red.500" mb={3}>
              <Text textAlign="center" whiteSpace="pre-line">
                {mismatchText}
              </Text>
            </Flex>
          )}
          {passState === false && (
            <Flex fontSize="medium" textColor="red.500" mb={3}>
              <Text textAlign="center" whiteSpace="pre-line">
                {passwordText}
              </Text>
            </Flex>
          )}
          {emailState === false && (
            <Flex fontSize="medium" textColor="red.500" mb={3}>
              <Text textAlign="center" whiteSpace="pre-line">
                {emailText}
              </Text>
            </Flex>
          )}
          <Button onClick={signUpHandler} mb={3} colorscheme="teal">
            Sign up
          </Button>
          <Link color="purple.400" textAlign="center">
            Login instead
          </Link>
        </Flex>
      </Flex>
    </div>
  );
}
