"use client";
import React, { PropsWithChildren } from "react";
// import Image from "next/image";
import clsx from "clsx";

// import Navbar from "./Navbar";
import Footer from "./Footer";

import Provider from "@/library/Provider";

import { gliker } from "@/utils/font";
// import AppBackground from "@/assets/app-bg.png";

import "./style.css";

interface Props extends PropsWithChildren {}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <Provider>
      {/* <Navbar /> */}
      <main className={clsx("base-main-container", gliker.className)}>
        {/* <Image
          src={AppBackground}
          alt="roadmap"
          className="w-full h-full absolute top-0 left-0 bg-cover bg-center lg:bg-top bg-no-repeat"
        /> */}
        {children}
      </main>
      <Footer />
    </Provider>
  );
};

export default BaseLayout;
