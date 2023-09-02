import {
  useAddress,
  useContract,
  useNFT,
  useOwnedNFTs,
  Web3Button,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import { editionDropAddress, editionDropTokenId } from "../main";

export const NFTComponent = () => {
  const address = useAddress();
  const { contract: editionDropContract } = useContract(editionDropAddress);
  const { data: nft, isLoading: isNftLoading } = useNFT(
    editionDropContract,
    editionDropTokenId
  );
  const { data: ownedNfts, refetch: refetchOwnedNfts } = useOwnedNFTs(
    editionDropContract,
    address
  );

  return (
    <div className="card" style={{ marginBottom: "20px" }}>
      {" "}
      {isNftLoading ? (
        "Loading..."
      ) : (
        <>
          {nft ? (
            <ThirdwebNftMedia
              metadata={nft.metadata}
              style={{ width: "100%", marginTop: "10px" }}
            />
          ) : null}
          {address ? (
            <>
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                You own {ownedNfts?.[0]?.quantityOwned || "0"} Kittens
              </p>
              <Web3Button
                contractAddress={editionDropAddress}
                action={(contract) =>
                  contract.erc1155.claim(editionDropTokenId, 1)
                }
                onSuccess={async () => {
                  alert("Claim successful!");
                }}
                style={{ width: "100%", marginTop: "10px" }}
              >
                Claim!
              </Web3Button>
            </>
          ) : (
            <p
              style={{
                textAlign: "center",
                width: "100%",
                marginTop: "10px",
              }}
            >
              Login to claim this Kitten!
            </p>
          )}
        </>
      )}
    </div>
  );
};
