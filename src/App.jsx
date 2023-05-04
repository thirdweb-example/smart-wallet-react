import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useNFT,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import "./styles/Home.css";
import { editionDropAddress, editionDropTokenId } from "../const/yourDetails";

export default function Home() {
  const address = useAddress();

  const { contract: editionDropContract } = useContract(
    editionDropAddress,
    "edition-drop"
  );
  const { data: nft, isLoading: isNftLoading } = useNFT(
    editionDropContract,
    editionDropTokenId
  );
  const { data: ownedNfts, refetch: refetchOwnedNfts } = useOwnedNFTs(
    editionDropContract,
    address
  );

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>

        <p className="description">
          Claim your test access pass by creating an account!
        </p>

        <div className="connect">
          <ConnectWallet
            dropdownPosition={{
              align: "center",
              side: "bottom",
            }}
            btnTitle="Login"
          />
        </div>

        {isNftLoading ? (
          "Loading..."
        ) : (
          <div className="card">
            <img
              className="nftImage"
              src={nft.metadata.image}
              alt={nft.metadata.description}
            />
            {address ? (
              <>
                <p>You own {ownedNfts?.[0]?.quantityOwned || "0"}</p>
                <Web3Button
                  contractAddress={editionDropAddress}
                  action={(contract) =>
                    contract.erc1155.claim(editionDropTokenId, 1)
                  }
                  onSuccess={async () => {
                    await refetchOwnedNfts();
                    alert("Claim successful!");
                  }}
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  Claim!
                </Web3Button>
              </>
            ) : (
              <p>Login to claim!</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
