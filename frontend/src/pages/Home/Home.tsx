import { useEffect, useState } from "react";
import { isUserLoggedIn } from "../../shared/utils";
import { Header } from "../../widgets/Header";
import { getWalletList } from "./api";
import { Wallet, WalletList } from "./ts";

const Home = async () => {
  const [walletList, setWalletList] = useState<Wallet[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const wallets = await getWalletList();
        setWalletList(wallets);
      } catch (err) {
        console.log("error");
      }
    };

    fetchData();
  }, []);

  const content = walletList?.map();

  return (
    <>
      <Header />
      <main>
        <h1>{isUserLoggedIn() ? "Home" : "Landing"}</h1>
        {/* <div>{walletList ? walletList : ""}</div> */}
      </main>
    </>
  );
};

export default Home;
