import { ConnectWallet, smartWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { NFTComponent } from "./components/nft";
import { ConnectUI } from "./components/connect";
import { AddSigner } from "./components/add-signer";

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
          <p className="description">
            With <code className="code">{"<ConnectWallet />"}</code> UI
            component{" "}
          </p>
          <div className="connect">
            <ConnectWallet btnTitle="Connect" />
          </div>
        </div>
        <div className="connect">
          <hr className="divider" />
          <p className="description">
            With <code className="code">{"useConnect()"}</code> hook and custom
            UI
          </p>
        </div>
        <ConnectUI />
        <hr className="divider" />
        <p className="description">
          Then use the React SDK to execute transactions.
          <br />
          No gas cost or signature required!
        </p>
        <NFTComponent />
        <hr className="divider" />
        <p className="description">
          You can also add temporary session keys to your smart wallet
        </p>
        <AddSigner />
        <hr className="divider" />
      </div>
    </main>
  );
}
