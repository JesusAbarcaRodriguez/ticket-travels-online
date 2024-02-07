import "@/styles/globals.css";
import "@/styles/404.css";
import "@/styles/animation.css";
import "@/styles/animation-navItemBlack.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ApplicationStore } from "@/root/redux";
import { Toaster } from "react-hot-toast";
const myApp = ({ Component, pageProps }: AppProps) => {
    return (
        <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_CLIENT_ID || "" }}>
            <Provider store={ApplicationStore}>
                <Component {...pageProps} />
            </Provider>
            <Toaster
                toastOptions={{
                    duration: 2000,
                }}
            />
        </PayPalScriptProvider>
    );
};
export default myApp;
