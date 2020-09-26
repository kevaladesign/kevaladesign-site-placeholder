import { SEO_IMAGE_TYPES } from '../shared/constants/seo';
import { SEOImage, SEOImages } from '../shared/types/seo';

export const buildSEOImagesObject = (images: SEOImage[]): SEOImages => {
  const { OG, TWITTER } = SEO_IMAGE_TYPES;
  const builtSEOImagesObject: SEOImages | Record<string, unknown> = {};

  images.forEach((image) => {
    const imageType = image.filename.replace(`seo_`, ``).replace(`.png`, ``);
    if (imageType === OG) builtSEOImagesObject.og_image = image;
    else if (imageType === TWITTER) builtSEOImagesObject.twitter_image = image;
    else throw new Error(`Invalid SEO image name: ${image.filename}`);
  });

  return builtSEOImagesObject as SEOImages;
};
