import { FixedObject } from 'gatsby-image';

export type SEOImage = { filename: string; content: FixedObject };

export type SEOImages = {
  og_image: SEOImage;
  twitter_image: SEOImage;
};
