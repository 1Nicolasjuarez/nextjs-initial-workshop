import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Page from "../components/Page";

import { NextRouter, useRouter, withRouter } from "next/router";
import Link from "next/link";
import api from "../api";
import { Store } from "../types";
import StoreCard from "../components/StoreCard";

interface Props {
    store : Store;
}


const Store: NextPage<Props>= ({store}) => {
  return ( 
  <div>  
      <StoreCard store={store}/>
        <Link  href="/">volver al inico</Link>
  </div>
  );
     
  
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const store = await api.fetch(params?.id as string);

  return {
    props: { store },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = await api.list();

  return {
    paths: stores.map((store) => ({ params: { id: store.id } })),
    fallback: "blocking",
  };
};

export default Store;
