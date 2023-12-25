import * as React from 'react';
import { Link, PageProps, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulPortfolio {
        edges {
          node {
            id
            title
            subtitle
            description {
              raw
            }
          }
        }
      }
      file(relativePath: { eq: "flower.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const image = getImage(data.file);
  const projects = data.allContentfulPortfolio.edges;
  console.log(projects);
  return (
    <Layout>
      <main
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
        }}>
        {image && (
          <GatsbyImage
            image={image}
            alt="Your image description"
            style={{ height: '100%' }}
          />
        )}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '0%',
            paddingLeft: '20%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
          }}>
          <h1>Projects</h1>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
