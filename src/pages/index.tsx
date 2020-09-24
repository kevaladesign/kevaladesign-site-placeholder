import React, { ReactElement } from 'react';
import { PageProps } from 'gatsby';

import { SEO } from '../components/Global/SEO';

import { Page, TextWrapper } from '../shared/styles/containers';
import { BoldTypeHeader, BoldTypeLink, NormalType } from '../shared/styles/text';

import { ANNOUNCEMENT } from '../shared/constants/announcement';
import { PROJECT_FIGMA_LINK } from '../shared/constants/links';

const IndexPage = ({ location: { pathname } }: PageProps): ReactElement => (
  <>
    <SEO title="Home" pathname={pathname} />
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

// eslint-disable-next-line import/no-default-export
export default IndexPage;
