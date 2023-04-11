// import '@/styles/index.css';
// import '../src/styles/global.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.scss';
import type { AppProps } from 'next/app'

export const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}
