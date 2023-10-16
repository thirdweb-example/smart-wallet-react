import { useAddAdmin} from "@thirdweb-dev/react";
import { MetaMaskWallet } from "@thirdweb-dev/wallets";
import { useState } from "react";

export const AddMetamask = () => {

    const [walletToAdd, setWalletToAdd] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { mutate: addAdmin } = useAddAdmin();

    const addMetamask = async () => {
        setIsLoading(true);
        setWalletToAdd("");

        const wallet = new MetaMaskWallet({});

        // connect metamask
        await wallet.connect();

        const address = await wallet.getAddress();
        console.log("metamask: " + address);

        // add metamask as an admin
        await addAdmin(address,
            {
              onSuccess: () => {
                alert("Metamask added as an admin to smart account");
                setWalletToAdd(address);
              },
              onError: (e) => {
                alert((e as any).message);
              },
            });
    };

    return walletToAdd ? (
        <>
            <p>{walletToAdd} added to smart account</p>

        </>
    ) : (
        <>
            <p>Not connected</p>
            <button className="button" onClick={addMetamask} disabled={isLoading}>
            {isLoading ? "Adding as Admin..." : "Connect Metamask"}</button>
        </>
    );
}; 