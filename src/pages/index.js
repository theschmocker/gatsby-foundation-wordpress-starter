import React from 'react';
import { graphql } from 'gatsby';

import Base from '../components/Base';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const { wordpressPage: page } = data;
  return (
    <Base>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <article>
        <h1 dangerouslySetInnerHTML={{ __html: page.title }}/>
        <section dangerouslySetInnerHTML={{ __html: page.content }}/>
      </article>
    </Base>
  );
}

export default IndexPage

export const query = graphql`
{
  wordpressPage(path: { eq: "/" }) {
    title
    content
  }
}
`;
