//import Head from "next/head";
//import styles from "../styles/Home.module.css";
import { useAuth } from "@/utils/auth";

export default function Index() {
  const auth = useAuth();
  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
  );
}
