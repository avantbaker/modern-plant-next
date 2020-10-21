import React from 'react';
import { useRouter } from 'next/router';
import Page from '@components/page';
import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background';
import { CUSTOMER_QUERY, CUSTOMER_TOKEN_DELETE_MUTATION } from '../../graphql';
import graphql from '../../lib/graphql';
import cookies from '../../lib/cookies';

export default function Remedy({ customer, token }) {
  // const router = useRouter();

  // if (!customer) {
  //   router.push('/');
  // }

  if (!customer) {
    return null;
  }

  return (
    <Page title="Contact">
      <SplitHero 
          contentLeft={<HeroBackground src='/images/global/spillage.png' />}
          contentRight={
            <div>
              <h1 className="heading-1 mb-xxl">Hello {customer && customer.firstName} {customer.lastName}!</h1>

              <button type="button" onClick={async () => {
                const res = await graphql(CUSTOMER_TOKEN_DELETE_MUTATION, { customerAccessToken: token });

                cookies.eraseCookie('accessToken');

                // router.push('/');

              }}>Log Out</button>
            </div>
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
