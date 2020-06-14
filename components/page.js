/** @jsx jsx */
import Head from 'next/head';
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { motion } from 'framer-motion';

const Page = ({ title = '', children }) => {
  const className = title.toLowerCase().split(" ").join("-");
  return (
    <Fragment>
      <Head>
        <title>Modern Plant - {title}</title>
      </Head>
      <motion.div
        className={`page-container page-${className}`}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </Fragment>
  );
};

export default Page;
