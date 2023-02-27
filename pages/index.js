import Head from "next/head";
import { BackgroundCarousel, LandingComponents } from "./components";
import { getCategories } from "../services/";

export default function Home({ categories }) {
  return (
    <>
      <Head>
        <title>Interior Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <div className="absolute h-full bg-gradient-to-b from-gray-900 via-gray-900 to-transparent left-0 z-10 opacity-20 w-full"></div>
        <BackgroundCarousel />
        <LandingComponents category={categories} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const categories = (await getCategories()) || [];
  return { props: { categories } };
}
