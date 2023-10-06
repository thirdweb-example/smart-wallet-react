import {
  SignerWithPermissions,
  SmartWallet,
  useAddress,
  useCreateSessionKey,
  useWallet,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { editionDropAddress } from "../main";

export const AddSigner = () => {
  const address = useAddress();
  const [walletToAdd, setWalletToAdd] = useState("");
  const [admins, setAdmins] = useState<SignerWithPermissions[]>([]);
  const { mutate: createSession, isLoading } = useCreateSessionKey();
  const smartWallet = useWallet<SmartWallet>();

  const fetchSigners = async () => {
    if (!smartWallet) return;
    const admins = await smartWallet.getAllActiveSigners();
    setAdmins(admins);
  };

  useEffect(() => {
    fetchSigners();
  }, [address]);

  const addSessionKey = () => {
    if (!walletToAdd) {
      alert("Please enter an address");
      return;
    }
    createSession(
      {
        keyAddress: walletToAdd,
        permissions: {
          approvedCallTargets: [editionDropAddress],
        },
      },
      {
        onSuccess: () => {
          fetchSigners();
        },
        onError: (e) => {
          alert((e as any).message);
        },
      }
    );
  };

  return address ? (
    <>
      <h3>Current signers</h3>
      <ul>
        {admins.map((a) => (
          <li key={a.signer}>
            {a.signer} {a.isAdmin ? "(admin)" : ""}
          </li>
        ))}
      </ul>
      <h3>Add a scoped session key to your wallet</h3>
      <p style={{ color: "#666" }}>
        The key is configured to access the smart wallet with certain
        restrictions
      </p>
      <div className="column">
        <input
          className="input"
          type="text"
          placeholder="Admin address / ENS"
          onChange={(e) => setWalletToAdd(e.target.value)}
        />
        <button className="button" disabled={isLoading} onClick={addSessionKey}>
          {isLoading ? "Adding..." : "Add session key"}
        </button>
      </div>
    </>
  ) : (
    <>
      <p>Login to add session keys</p>
    </>
  );
};
