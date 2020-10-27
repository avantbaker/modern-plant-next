import React from 'react';
import { useRouter } from 'next/router';
import Page from '@components/page';
import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background';
import { CUSTOMER_QUERY } from '../../graphql';
import graphql from '../../lib/graphql';
import CustomerDetail from '@components/CustomerDetail';

export default function Remedy({ customer, token }) {
  const router = useRouter();

  if (!customer) {
    router.push('/');
  }

  if (!customer) {
    return null;
  }

  return (
    <Page title="Contact">
      <SplitHero 
          contentLeft={<HeroBackground src='/images/global/spillage.png' />}
          contentRight={
            <CustomerDetail customer={customer} token={token} />
          }
      />
    </Page>
  );
}

export const getServerSideProps = async (ctx) => {
  if (!ctx.query.token) {
    return {
      props: {
        customer: null,
      }
    }
  }

  const customer = await graphql(CUSTOMER_QUERY, { customerAccessToken: ctx.query.token });

  return {
    props: {
      customer: customer && customer.data && customer.data && customer.data.customer,
      token: ctx.query.token,
    }
  };
};
