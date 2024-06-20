"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
// import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
// import { ArrowRightOutlined } from "@ant-design/icons";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

// import { contractAddress, findUsLink, socialsLink } from "@/constants/links";
// import { rubik, satoshi } from "@/utils/font";
// import { ecosystemList } from "./constants/ecosystem";
// import { roadmapList } from "./constants/roadmap";

// import { FeatureArrow } from "@/utils/Icon/arrow";

import BannerApp from "@/assets/npepe-banner.png";
import HeroApp from "@/assets/npepe-hero.png";

// import HeroApp from "@/assets/hero-app.png";
// import MapApp from "@/assets/map-app.png";
// import DextoolsLogo from "@/assets/logo-dextools.png";
// import EtherscanLogo from "@/assets/logo-etherscan.png";
import TwitterLogo from "@/assets/logo-twitter.png";
import TelegramLogo from "@/assets/logo-telegram.png";
import DexscreenerLogo from "@/assets/logo-dexscreener.png";
// import Uniswap from "@/assets/uniswap.png";
// import Solidproof from "@/assets/solidproof.png";
// import Coingecko from "@/assets/coingecko.png";

import "./style.css";
import { contractAddress, findUsLink, socialsLink } from "@/constants/links";

interface Props {}

// const introVidUrl =
//   "https://res.cloudinary.com/dwppcshmi/video/upload/f_auto:video,q_auto/v1/rabbit_images/cqf6n5ikkmjsod1jpfxl";

// const contentStyle: React.CSSProperties = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "transparent",
// };

const Home: React.FC<Props> = () => {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isTokensVisible, setIsTokensVisible] = useState(false);

  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const tokensRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();
  // const [copyContent] = useCopyText();

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsWelcomeVisible(entry.isIntersecting);
      });

      observer.observe(welcomeRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsAboutVisible(entry.isIntersecting);
      });

      observer.observe(aboutRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsTokensVisible(entry.isIntersecting);
      });

      observer.observe(tokensRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="homepage-container">
        <YinLoader />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <div id="welcome" />
      <div ref={welcomeRef} className="w-full h-full relative">
        {/* <Link
          href={findUsLink.uniswap}
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto mr-2 md:mr-4 absolute right-0 top-4"
        >
          <Button
            className="w-full text-white bg-black hover:bg-pelu-green active:bg-pelu-green focus:bg-pelu-green lg:p-6"
            // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
          >
            BUY NOW
          </Button>
        </Link> */}
        <Image
          src={BannerApp}
          alt="npepe-banner"
          className="w-full h-[100vw] sm:h-[75vw] lg:h-[50vw] xl:h-full"
        />
      </div>

      <div id="about" className="h-20 sm:h-24 relative z-30" />
      <div ref={aboutRef} className="homepage-body">
        {/* <div className="text-4xl text-center mt-20 mb-10">
          <span className="text-black font-bold">$PELU</span> where the cheeky
          charisma of Pepe meets the legendary flair of Lu Bu, creating a fusion
          of fun and folklore.
        </div> */}

        <div className="text-5xl text-center mt-10 mb-20">
          CA: <span className="text-black">{contractAddress}</span>
        </div>

        <div className="w-full flex flex-wrap justify-between px-2 lg:px-0">
          <div className="w-full lg:w-[47.5%]">
            <Image src={HeroApp} alt="npepe-hero" className="rounded-xl" />
          </div>

          <div className="w-full lg:w-[47.5%]">
            <div className="text-6xl font-bold text-black mt-4 lg:mt-0">
              Neura Pepe
            </div>

            <div className="w-full text-3xl mt-4">
              <span className="text-black font-bold">$NPEPE</span> is an
              exciting memecoin project created on{" "}
              <span className="text-black font-bold">SOLANA</span>, blending the
              fun of memes with the power of Neuralink technology. Neura Pepe
              brings the beloved Pepe the Frog into the future with advanced
              neural interfaces, making it the first AI-enhanced meme character.
            </div>
            <br />
            <br />
            <div className="w-full text-3xl">
              <div className="text-4xl text-center sm:text-left font-bold mb-4">
                Dive into the <span className="text-black">Neura Pepe</span>{" "}
                journey!
              </div>
              <span className="text-black font-bold">$NPEPE</span> is more than
              just a meme—it’s an exploration of how artificial intelligence can
              revolutionize our beloved internet culture.
              {/* <span className="text-black font-bold">$PELU</span> is more than
              just a concept. it’s a journey that invites you to partake in a
              blend of history, humor, and heroism. */}
            </div>
            <br />
            <div className="w-full flex flex-wrap justify-center lg:justify-start items-center text-white m-auto gap-4">
              <Link
                href={findUsLink.dexscreener}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 hover:!text-primary"
              >
                <Image
                  src={DexscreenerLogo}
                  alt="dexscreener"
                  className="w-full h-full"
                />
              </Link>
              {/* <Link
                href={findUsLink.etherscan}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 hover:text-secondary"
              >
                <Image
                  src={EtherscanLogo}
                  alt="etherscan"
                  className="w-full h-full"
                />
              </Link> */}
              <Link
                href={socialsLink.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 hover:!text-primary"
              >
                <Image
                  src={TelegramLogo}
                  alt="telegram"
                  className="w-full h-full"
                />
              </Link>
              <Link
                href={socialsLink.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 hover:text-secondary"
              >
                <Image
                  src={TwitterLogo}
                  alt="twitter"
                  className="w-full h-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="tokenomics" className="h-24 sm:h-36 relative z-30" />
      <div ref={tokensRef} className="homepage-body">
        <div className="text-6xl font-bold text-center text-black">
          TOKENOMICS
        </div>

        <div className="w-full md:w-11/12 xl:w-4/5 text-center flex flex-wrap justify-center items-center gap-y-8 mx-auto mt-12">
          {/* <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className={`app-title text-5xl mb-2`}>Total Supply</div>
            <div className={`text-3xl font-bold text-black`}>-</div>
          </div> */}
          <div className="w-full sm:w-1/2">
            <div className={`app-title text-5xl mb-2`}>Contract</div>
            <div className={`text-3xl font-bold text-black`}>Renounced</div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className={`app-title text-5xl mb-2`}>LP</div>
            <div className={`text-3xl font-bold text-black`}>Burned</div>
          </div>
        </div>
      </div>
      <div className="h-24 sm:h-36" />
    </div>
  );
};

export default Home;
