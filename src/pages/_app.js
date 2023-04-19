import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />

  // App.getInitialProps = async (appContext) => {
  //   const appProps = await App.getInitialProps(appContext);
  //   return {...appProps, header: headerData};
  // }
}
