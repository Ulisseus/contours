import React from "react";
import Head from "next/head";
import { Header } from "../sections/index/Header";
import { About } from "../sections/index/About";
import { Features } from "../sections/index/Features";
import { Tours } from "../sections/index/Tours";
import { Stories } from "../sections/index/Stories";
import { Booking } from "../sections/index/Booking";
import { Footer } from "../sections/index/Footer";
import { Navigation } from "../sections/index/Navigation";
import { Popup } from "../sections/index/Popup";

const DefaultPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contours</title>
      </Head>
      <Popup closeHref="tours" />
      <Navigation />
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
