// This file contains global types statements

// Types for data got from api Sanity.io

type Sanity_Image = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

type Base_Pages_Props = {
  imageDesktop: Sanity_Image;
  imageMobile: Sanity_Image;
  pageTitle: string;
  slug: string;
};
