import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  ThirdwebProvider,
  localWallet,
  metamaskWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import "./styles/globals.css";
import { TWApiKey, TWFactoryAddress, activeChain } from "../const/yourDetails";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={activeChain}
      supportedWallets={[
        smartWallet({
          factoryAddress: TWFactoryAddress,
          thirdwebApiKey: TWApiKey,
          gasless: true,
          personalWallets: [metamaskWallet(), localWallet({ persist: true })],
        }),
      ]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
