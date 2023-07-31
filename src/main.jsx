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
import { TWFactoryAddress, activeChain } from "../const/yourDetails";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.VITE_TEMPLATE_CLIENT_ID}
      supportedWallets={[
        smartWallet({
          factoryAddress: TWFactoryAddress,
          gasless: true,
          personalWallets: [metamaskWallet(), localWallet({ persist: true })],
        }),
      ]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
