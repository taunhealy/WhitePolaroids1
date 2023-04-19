import { CallToAction } from './CallToAction/Config';
import { Component as cta } from './CallToAction/Component';
import { Content } from './Content/Config';
import { Component as content } from './Content/Component';
import { Image } from './Image/Config';
import { Component as image } from './Image/Component';
import { PortfolioHero } from './PortfolioHero/Config';
import { Component as portfoliohero } from './PortfolioHero/Component';

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

