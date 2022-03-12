import React from "react";
import Head from "next/head";
import Header from "../components/Header";

const DefaultPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contours</title>
      </Head>
      <Header />
    </>
  );
};

export default DefaultPage;
