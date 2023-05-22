import type { NextPage } from 'next';
import Head from 'next/head';
import { memo } from 'react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>lobe-flow</title>
      </Head>
      lobeflow
    </>
  );
};

export default memo(Home);
