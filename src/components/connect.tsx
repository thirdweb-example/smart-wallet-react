import { Goerli } from "@thirdweb-dev/chains";
import { useAddress, useConnect } from "@thirdweb-dev/react";
import { LocalWallet } from "@thirdweb-dev/wallets";
import { activeChain, smartWalletConfig } from "../main";

export const ConnectCompoenent = () => {
  const connect = useConnect();
  const address = useAddress();

  const loadLocalWalletAndConnect = async () => {
    const personalWallet = new LocalWallet({
      chain: Goerli,
    });
    // hardcoding a password for demo purposes
    // should be a input field in the UI instead
    await personalWallet.loadOrCreate({
      strategy: "encryptedJson",
      password: "123",
    });
    await connect(smartWalletConfig, {
      personalWallet: personalWallet,
    });
  };

  return address ? (
    <h3>
      Connected as:
      <br />{" "}
      <a
        href={`https://thirdweb.com/${activeChain.chainId}/${address}/account`}
        target="_blank"
      >
        {address}
      </a>
    </h3>
  ) : (
    <button className="button" onClick={loadLocalWalletAndConnect}>
      Or Click Me to Connect
    </button>
  );
};
