import React from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { About } from "../components/About";

const DefaultPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contours</title>
      </Head>
      <Header />
      <About />
    </>
  );
};

export default DefaultPage;
