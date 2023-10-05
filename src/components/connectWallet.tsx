import { ConnectWallet } from "@thirdweb-dev/react";

export const ConnectWalletComponent = () => {
  return (
    <>
      <p className="description">
        With <code className="code">{"<ConnectWallet />"}</code> UI component{" "}
      </p>
      <div className="connect">
        <ConnectWallet btnTitle="Connect" />
      </div>
    </>
  );
};
