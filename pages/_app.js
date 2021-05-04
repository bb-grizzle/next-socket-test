// polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

// -
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
