import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/SEO.js";
import Layout from "../components/layout.js";

import Home from "../components/home.js";

export default ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => (
    <Layout isHomePage={true}>
        <SEO />
        <Home servicesEdges={edges} />
    </Layout>
);

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___orderId], order: ASC }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        cover
                        date
                        openOnStart
                    }
                }
            }
        }
    }
`;
