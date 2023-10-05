import { ConnectWallet, smartWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { NFTComponent } from "./components/nft";
import { ConnectCompoenent } from "./components/connect";
import { ConnectWalletComponent } from "./components/connectWallet";
import { UseConnect } from "./components/useConnect";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            <span className="gradient-text-0">
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Smart Wallets
              </a>{" "}
            </span>
            demo
          </h1>
          <p>
            Signless + gasless UX using{" "}
            <a href="https://portal.thirdweb.com/wallet/local-wallet">
              LocalWallet
            </a>{" "}
            and{" "}
            <a href="https://portal.thirdweb.com/wallet/smart-wallet">
              SmartWallet
            </a>
          </p>
          <hr className="divider" />
          <ConnectWalletComponent />
        </div>
        <UseConnect />
        <hr className="divider" />
      </div>
    </main>
  );
}
