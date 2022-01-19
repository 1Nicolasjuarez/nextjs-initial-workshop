import type {GetServerSideProps, GetStaticProps, NextPage} from "next";
import Link from "next/link";
import { useState, useEffect } from "react";
import api from "../api";

import Page from "../components/Page";
import StoreCard from "../components/StoreCard";
import { Store } from "../types";


interface Props {
  stores: Store[];
}

const Home: NextPage <Props>= ({stores}) => {
  

  return (
    
    <main style={{display: "flex" , flexDirection:"column"}}>
      {stores.map((store)=>(

        

        <Link key={store.id} href={`/${store.id}`}>
        <a >
        <StoreCard  store={store}/>
        </a>
        </Link>

      ))}
    </main>
  );
};


export const getStaticProps: GetStaticProps = async () => {
  const stores = await api.list();

  return {
    props: { stores },
  };
};


export default Home;
