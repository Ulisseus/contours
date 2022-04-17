import React from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { About } from "../components/About";
import { Features } from "../components/Features";
import { Tours } from "../components/Tours";
import { Stories } from "../components/Stories";
import { Booking } from "../components/Booking";
import { Footer } from "../components/Footer";

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
      <Stories />
      <Booking />
      <Footer />
    </>
  );
};

export default DefaultPage;
