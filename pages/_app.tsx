import { AppProps } from "next/app";
import Page from "../components/Page";

import "../globals.css";


function App({Component,pageProps}:AppProps ){

    return (
        <Page>
            <head>
                <title>App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <Component {...pageProps}/>
        </Page>
    );
}

export default App;