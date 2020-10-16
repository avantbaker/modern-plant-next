import React from 'react';
import Page from '@components/page';
import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background';
import { CUSTOMER_QUERY } from '../../graphql';
import graphql from '../../lib/graphql';

export default function Remedy({ customer }) {

  return (
    <Page title="Contact">
      <SplitHero 
          contentLeft={<HeroBackground src='/images/global/spillage.png' />}
          contentRight={
            <div>
              <h1 className="heading-1 mb-xxl">Hello {customer && customer.firstName} {customer.lastName}!</h1>
            </div>
          }
      />
    </Page>
  );
}

export const getServerSideProps = async (ctx) => {
  const customer = await graphql(CUSTOMER_QUERY, { customerAccessToken: ctx.query.token });
  
  return {
    props: {
      customer: customer && customer.data && customer.data && customer.data.customer,
    }
  };
};
