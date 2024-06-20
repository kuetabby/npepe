import TestnetLogo from "@/assets/logo-testnet.png";
import StakingLogo from "@/assets/logo-staking.png";
import SwapLogo from "@/assets/logo-swap.png";
import BridgeLogo from "@/assets/logo-bridge.png";
import WalletLogo from "@/assets/logo-wallet.png";
import MainnetLogo from "@/assets/logo-mainnet.png";

export const ecosystemList = [
  {
    title: "Testnet",
    description:
      "Proof of Authority (PoA) consensus mechanism stands as the backbone, ensuring the network's reliability and performance. This PoA-based Testnet offers a trusted and efficient environment for testing and validating blockchain functionalities.",
    titleUrl: "Explore",
    imageUrl: TestnetLogo,
    imageAlt: "testnet",
    path: "https://explorer.injection-protocol.com",
    isAvailable: true,
  },
  {
    title: "Privacy Bridge",
    description:
      "Key feature designed to enhance user privacy and security in blockchain transactions. This innovative tool aims to safeguard the anonymity of users while facilitating the transfer of assets between different blockchain networks.",
    titleUrl: "Explore",
    imageUrl: BridgeLogo,
    imageAlt: "bridge",
    path: "https://bridge.injection-protocol.com",
    isAvailable: true,
  },
  {
    title: "Staking",
    description:
      "Designed to enhance network security and incentivize participant engagement. By staking their tokens, users essentially lock up a portion of their assets to support the operational integrity and security of the network.",
    titleUrl: "Explore",
    imageUrl: StakingLogo,
    imageAlt: "staking",
    path: "/",
    isAvailable: false,
  },
  {
    title: "Swap",
    description:
      "This feature allows for seamless, instant swapping of different cryptocurrencies without the need for traditional intermediaries, thereby reducing transaction times and costs.",
    titleUrl: "Explore",
    imageUrl: SwapLogo,
    imageAlt: "swap",
    path: "/",
    isAvailable: false,
  },
  {
    title: "Wallet",
    description:
      "Designed with both novice and experienced users in mind, this wallet integrates seamlessly into the Inject Protocol platform, offering a user-friendly interface that simplifies the complexities of blockchain transactions.",
    titleUrl: "Explore",
    imageUrl: WalletLogo,
    imageAlt: "wallet",
    path: "/",
    isAvailable: false,
  },
  {
    title: "Mainnet",
    description:
      "Crafted on a foundation of Proof-of-Stake (POS) consensus, our Mainnet empowers users to partake in secure, decentralized transactions, seamless trading, and a spectrum of financial activities with unparalleled efficiency, speed, and reliability.",
    titleUrl: "Explore",
    imageUrl: MainnetLogo,
    imageAlt: "mainnet",
    path: "/",
    isAvailable: false,
  },
];
