import { ConnectWallet, smartWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { NFTComponent } from "./components/nft";
import { ConnectCompoenent } from "./components/connect";

const wallet = smartWallet({
  factoryAddress: "0x6B1F8bBF4Af9267C0a483Da53BaE1118eadC50C1",
  gasless: true,
});

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
        <ConnectCompoenent />
        <hr className="divider" />
        <p className="description">
          Then use the React SDK to execute transactions.
          <br />
          No gas cost or signature required!
        </p>
        <NFTComponent />
      </div>
    </main>
  );
}
