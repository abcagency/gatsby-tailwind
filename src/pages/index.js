/* eslint-disable react/prop-types */
import React from "react";
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <ul>
          {data.allDatoCmsBlogPost.edges.map(({ node: blogPost }) => (
            <li key={blogPost.id}>
              <h2>{blogPost.title}</h2>
              <p>{blogPost.excerpt}</p>
              <p>
                <Link to={`/blog/${blogPost.slug}`}>
                  <GatsbyImage image={blogPost.image.gatsbyImageData} />
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDatoCmsBlogPost {
      edges {
        node {
          id
          slug
          title
          image {
            gatsbyImageData(
              width: 1280,
              placeholder: BLURRED,
              forceBlurhash: false
            )
          }
          excerpt
          categories {
            name
          }
        }
      }
    }
  }
`;
