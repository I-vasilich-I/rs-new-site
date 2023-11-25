import Head from 'next/head';
import { Home } from 'modules/Home/pages';

export default function Page() {
  return (
    <>
      <Head>
        <title>RS site</title>
      </Head>
      <Home />
    </>
  );
}
