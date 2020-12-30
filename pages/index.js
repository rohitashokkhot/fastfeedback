import Head from "next/head";
//import styles from "../styles/Home.module.css";
import { useAuth } from "@/utils/auth";
import { Heading, Button, Text, Code } from "@chakra-ui/core";

export default function Index() {
  const auth = useAuth();
  return auth.user ? (
    <div className="container">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Heading>Fast Feedback</Heading>
      <Text>
        Current user : <Code> {auth.user.email} </Code>
      </Text>
      <Button onClick={(e) => auth.signout()}>Sign Out</Button>
    </div>
  ) : (
    <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
  );
}
