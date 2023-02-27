import Head from "next/head";
import { BackgroundCarousel } from "./components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Interior Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundCarousel />
    </>
  );
}
