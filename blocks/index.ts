import { CallToAction } from './CallToAction/CallToAction_Config';
import { Component as cta } from './CallToAction/CallToAction_Component';
import { Content } from './Content/Content_Config';
import { Component as content } from './Content/Content_Component';
import { Image } from './Image/Image_Config';
import { Component as image } from './Image/Image_Component';
import { PortfolioHero } from './PortfolioHero/PortfolioHero_Config';
import { Component as portfoliohero } from './PortfolioHero/PortfolioHero_Component';

// import the collections Configs to export as 'collections'.

export const collections = {
  CallToAction,
  Content,
  Image,
  PortfolioHero,

};

export const components = {
  cta,
  content,
  image,
  portfoliohero
};

