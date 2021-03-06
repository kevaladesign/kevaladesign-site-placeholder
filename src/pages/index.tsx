import React, { ReactElement } from 'react';
import { PageProps, graphql } from 'gatsby';

import { SEO } from '../components/Global/SEO';

import { Page, TextWrapper } from '../shared/styles/containers';
import { BoldTypeHeader, BoldTypeLink, NormalType } from '../shared/styles/text';

import { SEO_HOME_PAGE_KEYWORDS } from '../shared/constants/seo';
import { ANNOUNCEMENT } from '../shared/constants/announcement';
import { PROJECT_FIGMA_LINK } from '../shared/constants/links';

import { buildSEOImagesObject } from '../services/seo';

import { PageQueryData } from '../shared/types/pages/home';

const IndexPage = ({ data, location: { pathname } }: PageProps): ReactElement => {
  const SEOImagesFromQuery = (data as PageQueryData).allFile.edges.map((image) => {
    return {
      filename: image.node.base,
      content: image.node.childImageSharp.fixed,
    };
  });

  const SEOImages = buildSEOImagesObject(SEOImagesFromQuery);

  return (
    <>
      <SEO title="Home" pathname={pathname} keywords={SEO_HOME_PAGE_KEYWORDS} images={SEOImages} />
      <Page>
        <TextWrapper>
          <BoldTypeHeader>Under Construction</BoldTypeHeader>
          {ANNOUNCEMENT.map((text) => (
            <NormalType key={text}>{`${text}`}</NormalType>
          ))}
          <BoldTypeLink href={PROJECT_FIGMA_LINK} target="_blank" rel="noopener noreferrer">
            View Progress
          </BoldTypeLink>
        </TextWrapper>
      </Page>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;

export const pageQuery = graphql`
  query HomePageQuery {
    allFile(filter: { extension: { regex: "/png/" }, relativeDirectory: { eq: "seo/home-page" } }) {
      edges {
        node {
          base
          childImageSharp {
            fixed(width: 1200, quality: 100, pngQuality: 100, pngCompressionSpeed: 1) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
