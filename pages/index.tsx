import Head from "next/head";
import AppLayout from "../components/templates/AppLayout";
import Hero from "../components/organisms/Hero/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { description, title } from "../constants";
import Hero2 from "../components/Hero2";
import Reviews from "../components/organisms/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" key="desc" content={description} />
      </Head>
      <AppLayout>
        <Hero />
        {/* <Reviews /> */}
        <Services />
        <Contact />
      </AppLayout>
    </>
  );
}
