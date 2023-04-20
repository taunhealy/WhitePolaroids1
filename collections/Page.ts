import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';
import formatSlug from '../utilities/formatSlug';
import { Image } from '../blocks/Image/Image_Config';
import { Type as ImageType } from '../blocks/Image/Image_Component';
import { CallToAction } from '../blocks/CallToAction/CallToAction_Config';
import { Type as CallToActionType } from '../blocks/CallToAction/CallToAction_Component';
import { Content } from '../blocks/Content/Content_Config';
import { Type as ContentType } from '../blocks/Content/Content_Component';
import { PortfolioHero } from '../blocks/PortfolioHero/PortfolioHero_Config';
import { PortfolioHeroType } from '../blocks/PortfolioHero/PortfolioHero_Component';


export type Layout = CallToActionType | ContentType | ImageType | PortfolioHeroType

export type Type = {
  title: string
  slug: string
  image?: MediaType
  layout: Layout[]
  meta: {
    title?: string
    description?: string
    keywords?: string
  }
}

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        CallToAction,
        Content,
        Image,
        PortfolioHero,
      ],
    },
    {
      name: 'meta',
      label: 'Page Meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text',
        },
      ],
    },
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          formatSlug('title'),
        ],
      },
    },
  ],
};

export default Page;
