import type { AppProps } from 'next/app';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import 'styles/main.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
