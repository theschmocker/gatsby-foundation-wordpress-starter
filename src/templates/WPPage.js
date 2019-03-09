import React from 'react';
import { graphql } from 'gatsby';

import Base from '../components/Base';

function WPPage({ data: { wordpressPage } }) {
    return (
        <Base>
            <h1 dangerouslySetInnerHTML={{ __html: wordpressPage.title }}/>
            <section dangerouslySetInnerHTML={{ __html: wordpressPage.content }}/>
        </Base>
    );
}

export default WPPage;

export const query = graphql`
query ($id: String!) {
    wordpressPage(id: { eq: $id }) {
        title
        content
    }
}
`;