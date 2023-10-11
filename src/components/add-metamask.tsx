import { useAddAdmin} from "@thirdweb-dev/react";
import { MetaMaskWallet } from "@thirdweb-dev/wallets";
import { useState } from "react";

export const AddMetamask = () => {

    const [walletToAdd, setWalletToAdd] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { mutate: addAdmin } = useAddAdmin();

    const addMetamask = async () => {
        setIsLoading(true);

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
              },
              onError: (e) => {
                alert((e as any).message);
              },
            });

        setWalletToAdd(address);
    };

    return walletToAdd ? (
        <>
            <h3>Metamask address</h3>
            <p>{walletToAdd} added to smart account</p>

        </>
    ) : (
        <>
            <h3>Metamask address</h3>
            <p>Not connected</p>
            <button className="button" onClick={addMetamask} disabled={isLoading}>
            {isLoading ? "Connecting..." : "Connect Metamask"}</button>
        </>
    );
}; 