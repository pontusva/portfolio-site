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
      <main
        style={{ width: '100vwm', height: '100dvh', margin: 0, padding: 0 }}>
        {/* <h1 className="text-2xl">Welcome to my Gatsby site!</h1> */}
        {image && (
          <GatsbyImage
            image={image}
            alt="Your image description"
            style={{ height: '100%' }}
          />
        )}
        {/* <Link to="/aboutme">About</Link>
        <p>I'm making this by following the Gatsby Tutorial.</p> */}
      </main>
    </Layout>
  );
};

export default IndexPage;
