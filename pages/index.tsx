import React from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { About } from "../components/About";
import { Features } from "../components/Features";
import { Tours } from "../components/Tours";

const DefaultPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contours</title>
      </Head>
      <Header />
      <About />
      <Features />
      <Tours />
    </>
  );
};

export default DefaultPage;
