
import RemediesHeroContainer from '../../components/remedies/hero-container';
import { ALL_PRODUCTS_QUERY } from '../../graphql';
import graphql from '../../lib/graphql';
import Page from '@components/page';

export default function Remedies(props) {
    return (
      <Page title="Remedies">
          <RemediesHeroContainer data={props} />
      </Page>
    );
}

export const getServerSideProps = async (ctx) => {
  const res = await graphql(ALL_PRODUCTS_QUERY, { first: 10 });
  
  return {
    props: res && res.data && res.data.products,
  };
};
