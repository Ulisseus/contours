import React from "react";
import Head from "next/head";
import { Header } from "../layout/index/Header";
import { About } from "../layout/index/About";
import { Features } from "../layout/index/Features";
import { Tours } from "../layout/index/Tours";
import { Stories } from "../layout/index/Stories";
import { Booking } from "../layout/index/Booking";
import { Footer } from "../layout/index/Footer";
import { Navigation } from "../layout/index/Navigation";
import { Popup } from "../layout/index/Popup";

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
