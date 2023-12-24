import * as React from 'react';
import { Link, PageProps, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "flower.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const image = getImage(data.file);

  return (
    <Layout>
      <main style={{ width: '100vw', height: '100dvh', margin: 0, padding: 0 }}>
        {image && (
          <GatsbyImage
            image={image}
            alt="Your image description"
            style={{ height: '100%' }}
          />
        )}
      </main>
    </Layout>
  );
};

export default IndexPage;
