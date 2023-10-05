import { NFTComponent } from "./nft";

export const ExecuteTxComponent = () => {
  return (
    <>
      <p className="description">
        Then use the React SDK to execute transactions.
        <br />
        No gas cost or signature required!
      </p>
      <NFTComponent />
    </>
  );
};
