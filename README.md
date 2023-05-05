# Smart Wallet Example

## Introducion
This project demonstrates how to use thirdweb with Vite. In this example, we'll set up a simple app that uses thirdweb to interact with blockchain-based services.


To run the project, first clone this repository, and then run one of the following commands to install the dependencies:

```bash
npm install
# or
yarn install
```

## Tools

- [thirdweb Wallet SDK](https://thirdweb.com/wallet-sdk) - Connect any wallet to your apps, from custodial wallets to non-custodial wallets.
- [thirdweb Smart Wallet](https://portal.thirdweb.com/wallet/smart-wallet) - Let your users connect to their Smart Wallet.


## Using This Repo
First, you need to update [const/yourDetails.ts](const/yourDetails.ts) and add your TWFactoryAddress, activeChain, editionDropAddress & editionDropTokenId.
```
export const TWFactoryAddress = "0xe29A4aAfD52b96A635A9A03A4A754190a3bd9d16"; 
export const activeChain = Goerli;

export const editionDropAddress = "0x8D9919db3CD6aF84e8A12CedC3c5A694Bf026aB8";
export const editionDropTokenId = "0";
```

Next, you need to create a `.env.local` file and add the following environment variables to it:
```
TW_API_KEY=your_tw_api_key
```
You should replace `your_tw_api_key` with your actual API key found in the [thirdweb dashboard](https://thirdweb.com/dashboard/api-keys)


Finally, you can run the project with one of the following commands:

```bash
npm run dev
# or
yarn dev
```

Now, you can navigate to [http://localhost:3000](http://localhost:3000) to visit the client side page where you can login with your wallet, or with Google.


## Learn More

To learn more about thirdweb, Vite and React, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb JavaScript Documentation](https://docs.thirdweb.com/react) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com/react) - check our guides and development resources.
- [Vite Documentation](https://vitejs.dev/guide/) - learn about Vite features.
- [React documentation](https://reactjs.org/) - learn React.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
