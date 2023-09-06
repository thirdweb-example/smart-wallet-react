import { Goerli } from "@thirdweb-dev/chains";
import { useAddress, useConnect } from "@thirdweb-dev/react";
import { LocalWallet } from "@thirdweb-dev/wallets";
import { activeChain, smartWalletConfig } from "../main";
import { useState } from "react";

export const ConnectCompoenent = () => {
  const connect = useConnect();
  const address = useAddress();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loadLocalWalletAndConnect = async () => {
    if (!password) {
      setError("Please enter a password");
      return;
    }
    setError("");
    try {
      const personalWallet = new LocalWallet({
        chain: Goerli,
      });
      await personalWallet.loadOrCreate({
        strategy: "encryptedJson",
        password: password,
      });
      await connect(smartWalletConfig, {
        personalWallet: personalWallet,
      });
    } catch (e) {
      setError((e as any).message);
    }
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
    <>
      <input
        className="input"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button className="button" onClick={loadLocalWalletAndConnect}>
        Log in
      </button>
      <p style={{ color: "red" }}>{error}</p>
    </>
  );
};
