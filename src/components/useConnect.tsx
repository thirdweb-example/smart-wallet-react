import { ConnectCompoenent } from "./connect";

export const UseConnect = () => {
  return (
    <>
      <div className="connect">
        <hr className="divider" />
        <p className="description">
          With <code className="code">{"useConnect()"}</code> hook and custom UI
        </p>
      </div>
      <ConnectCompoenent />
    </>
  );
};
