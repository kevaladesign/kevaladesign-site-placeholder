import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { SEOProps, GraphQLStaticQuery } from './types';

export const SEO = ({
  description = ``,
  lang = `en`,
  meta = [],
  title,
  pathname,
  keywords = [],
  images,
}: SEOProps): ReactElement => {
  const { site }: GraphQLStaticQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            title
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = `${site.siteMetadata.siteUrl}${pathname}`;

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // {
        //   name: `google-site-verification`,
        //   content: ``,
        // },
      ]
        .concat(
          images
            ? [
                {
                  property: `og:image`,
                  content: `${site.siteMetadata.siteUrl.replace(`https:`, `http:`)}${
                    images.og_image.content.src
                  }`,
                },
                {
                  property: `og:image:secure_url`,
                  content: `${site.siteMetadata.siteUrl}${images.og_image.content.src}`,
                },
                {
                  property: `og:image:type`,
                  content: `image/png`,
                },
                {
                  property: `og:image:alt`,
                  content: title,
                },
                {
                  property: `og:image:width`,
                  content: `${images.og_image.content.width}`,
                },
                {
                  property: `og:image:height`,
                  content: `${images.og_image.content.height}`,
                },
                {
                  name: `twitter:image`,
                  content: `${site.siteMetadata.siteUrl}${images.twitter_image.content.src}`,
                },
                {
                  name: `twitter:card`,
                  content: `summary_large_image`,
                },
              ]
            : []
        )
        .concat(
          keywords && keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
};
