// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType]
}
/** Content for Book documents */
interface BookDocumentData {
  /**
   * BookTitle field in *Book*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: book.booktitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  booktitle: prismic.KeyTextField
  /**
   * Book Cover field in *Book*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: book.bookcover
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  bookcover: prismic.ImageField<never>
  /**
   * Amazon URL field in *Book*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: book.amazonurl
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  amazonurl: prismic.LinkField
  /**
   * Book Series field in *Book*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: book.bookseries
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  bookseries: prismic.ContentRelationshipField
  /**
   * Book Publish Date field in *Book*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: book.bookpublishdate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  bookpublishdate: prismic.DateField
}
/**
 * Book document from Prismic
 *
 * - **API ID**: `book`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BookDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BookDocumentData>, 'book', Lang>
/** Content for Homepage documents */
interface HomepageDocumentData {
  /**
   * Homepage Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.homepagemetadescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  homepagemetadescription: prismic.KeyTextField
  /**
   * Homepage Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.homepagemetaimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  homepagemetaimage: prismic.ImageField<never>
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice =
  | HeroWithFigureSlice
  | CarouselSlice
  | ProseSlice
  | SeriesHeroSlice
  | MailerLiteSignUpSlice
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    'homepage',
    Lang
  >
/** Content for Main Navigation documents */
interface MainNavigationDocumentData {
  /**
   * Logo field in *Main Navigation*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>
  /**
   * Navigation Links field in *Main Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.navigationlinks[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  navigationlinks: prismic.GroupField<
    Simplify<MainNavigationDocumentDataNavigationlinksItem>
  >
  /**
   * SocialLinks field in *Main Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.sociallinks[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  sociallinks: prismic.GroupField<
    Simplify<MainNavigationDocumentDataSociallinksItem>
  >
}
/**
 * Item in Main Navigation → Navigation Links
 *
 */
export interface MainNavigationDocumentDataNavigationlinksItem {
  /**
   * Menu Item Text field in *Main Navigation → Navigation Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.navigationlinks[].menuitemtext
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  menuitemtext: prismic.KeyTextField
  /**
   * Menu Item field in *Main Navigation → Navigation Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.navigationlinks[].menuitem
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menuitem: prismic.LinkField
}
/**
 * Item in Main Navigation → SocialLinks
 *
 */
export interface MainNavigationDocumentDataSociallinksItem {
  /**
   * SocialLink field in *Main Navigation → SocialLinks*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.sociallinks[].sociallink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  sociallink: prismic.LinkField
  /**
   * SocialPlatform field in *Main Navigation → SocialLinks*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.sociallinks[].socialplatform
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  socialplatform: prismic.SelectField<
    'Facebook' | 'Instagram' | 'TikTok' | 'Twitter'
  >
}
/**
 * Main Navigation document from Prismic
 *
 * - **API ID**: `main_navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainNavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MainNavigationDocumentData>,
    'main_navigation',
    Lang
  >
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Page Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.pagetitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  pagetitle: prismic.KeyTextField
  /**
   * Page Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.pagemetaimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  pagemetaimage: prismic.ImageField<never>
  /**
   * Page Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.pagemetadescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  pagemetadescription: prismic.KeyTextField
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | CarouselSlice
  | HeroWithFigureSlice
  | ProseSlice
  | MailerLiteSignUpSlice
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, 'page', Lang>
/** Content for Post documents */
interface PostDocumentData {
  /**
   * Title field in *Post*
   *
   * - **Field Type**: Title
   * - **Placeholder**: The title of your post
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField
  /**
   * Slice Zone field in *Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PostDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: post.metadescription
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  metadescription: prismic.RichTextField
  /**
   * Meta Image field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.metaimage
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  metaimage: prismic.ImageField<never>
  /**
   * Meta Title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: post.metatitle
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  metatitle: prismic.KeyTextField
}
/**
 * Slice for *Post → Slice Zone*
 *
 */
type PostDocumentDataSlicesSlice =
  | CarouselSlice
  | MailerLiteSignUpSlice
  | SeriesHeroSlice
  | HeroWithFigureSlice
  | ProseSlice
/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, 'post', Lang>
/** Content for Series documents */
interface SeriesDocumentData {
  /**
   * Series Name field in *Series*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: series.seriesname
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  seriesname: prismic.KeyTextField
  /**
   * Series Box Set Image field in *Series*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: series.seriesimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  seriesimage: prismic.ImageField<never>
  /**
   * Series Books field in *Series*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: series.seriesbooks[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  seriesbooks: prismic.GroupField<Simplify<SeriesDocumentDataSeriesbooksItem>>
  /**
   * Box Set Link field in *Series*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Enter link to box set (amazon)
   * - **API ID Path**: series.boxsetlink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  boxsetlink: prismic.LinkField
}
/**
 * Item in Series → Series Books
 *
 */
export interface SeriesDocumentDataSeriesbooksItem {
  /**
   * Series Book field in *Series → Series Books*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: series.seriesbooks[].seriesbook
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  seriesbook: prismic.ContentRelationshipField<'book'>
}
/**
 * Series document from Prismic
 *
 * - **API ID**: `series`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SeriesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<SeriesDocumentData>, 'series', Lang>
export type AllDocumentTypes =
  | BookDocument
  | HomepageDocument
  | MainNavigationDocument
  | PageDocument
  | PostDocument
  | SeriesDocument
/**
 * Primary content in Carousel → Primary
 *
 */
interface CarouselSliceDefaultPrimary {
  /**
   * Carousel Title field in *Carousel → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.primary.carouseltitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  carouseltitle: prismic.KeyTextField
  /**
   * Carousel Description field in *Carousel → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.primary.carouseldescription
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  carouseldescription: prismic.RichTextField
}
/**
 * Item in Carousel → Items
 *
 */
export interface CarouselSliceDefaultItem {
  /**
   * CarouselImage field in *Carousel → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.items[].carouselimage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  carouselimage: prismic.ImageField<never>
  /**
   * CarouselImageLink field in *Carousel → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.items[].carouselimagelink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  carouselimagelink: prismic.LinkField
}
/**
 * Default variation for Carousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Carousel`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CarouselSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<CarouselSliceDefaultPrimary>,
  Simplify<CarouselSliceDefaultItem>
>
/**
 * Slice variation for *Carousel*
 *
 */
type CarouselSliceVariation = CarouselSliceDefault
/**
 * Carousel Shared Slice
 *
 * - **API ID**: `carousel`
 * - **Description**: `Carousel`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CarouselSlice = prismic.SharedSlice<
  'carousel',
  CarouselSliceVariation
>
/**
 * Primary content in HeroWithFigure → Primary
 *
 */
interface HeroWithFigureSliceDefaultPrimary {
  /**
   * Hero Figure field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herofigure
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  herofigure: prismic.ImageField<never>
  /**
   * Figure Location field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: hero_with_figure.primary.herofigurelocation
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  herofigurelocation: prismic.BooleanField
  /**
   * Hero Heading field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.heroheading
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  heroheading: prismic.KeyTextField
  /**
   * Hero Text field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herotext
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  herotext: prismic.RichTextField
  /**
   * Button Text field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herobuttontext
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  herobuttontext: prismic.KeyTextField
  /**
   * Button Link field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herobuttonlink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  herobuttonlink: prismic.LinkField
  /**
   * Hero Background Color field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herobackgroundcolor
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  herobackgroundcolor: prismic.ColorField
}
/**
 * Default variation for HeroWithFigure Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroWithFigure`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroWithFigureSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<HeroWithFigureSliceDefaultPrimary>,
  never
>
/**
 * Primary content in HeroWithFigure → Primary
 *
 */
interface HeroWithFigureSliceHeroWithFigureGradientPrimary {
  /**
   * Hero Figure field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herofigure
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  herofigure: prismic.ImageField<never>
  /**
   * Figure Location field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: hero_with_figure.primary.herofigurelocation
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  herofigurelocation: prismic.BooleanField
  /**
   * Hero Heading field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.heroheading
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  heroheading: prismic.KeyTextField
  /**
   * Hero Text field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herotext
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  herotext: prismic.RichTextField
  /**
   * Button Text field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herobuttontext
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  herobuttontext: prismic.KeyTextField
  /**
   * Button Link field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herobuttonlink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  herobuttonlink: prismic.LinkField
  /**
   * Hero Background Color Start field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herobackgroundcolorstart
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  herobackgroundcolorstart: prismic.ColorField
  /**
   * Hero Background Color End field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herobackgroundcolorend
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  herobackgroundcolorend: prismic.ColorField
}
/**
 * Hero With Figure - Gradient variation for HeroWithFigure Slice
 *
 * - **API ID**: `heroWithFigureGradient`
 * - **Description**: `HeroWithFigure`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroWithFigureSliceHeroWithFigureGradient =
  prismic.SharedSliceVariation<
    'heroWithFigureGradient',
    Simplify<HeroWithFigureSliceHeroWithFigureGradientPrimary>,
    never
  >
/**
 * Primary content in HeroWithFigure → Primary
 *
 */
interface HeroWithFigureSliceHeroWithBackgroundImagePrimary {
  /**
   * Hero Figure field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herofigure
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  herofigure: prismic.ImageField<never>
  /**
   * Figure Location field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: hero_with_figure.primary.herofigurelocation
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  herofigurelocation: prismic.BooleanField
  /**
   * Hero Heading field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.heroheading
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  heroheading: prismic.KeyTextField
  /**
   * Hero Text field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herotext
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  herotext: prismic.RichTextField
  /**
   * Button Text field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herobuttontext
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  herobuttontext: prismic.KeyTextField
  /**
   * Button Link field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herobuttonlink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  herobuttonlink: prismic.LinkField
  /**
   * Hero Background Image field in *HeroWithFigure → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_with_figure.primary.herobackgroundimage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  herobackgroundimage: prismic.ImageField<never>
}
/**
 * HeroWithBackgroundImage variation for HeroWithFigure Slice
 *
 * - **API ID**: `heroWithBackgroundImage`
 * - **Description**: `HeroWithFigure`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroWithFigureSliceHeroWithBackgroundImage =
  prismic.SharedSliceVariation<
    'heroWithBackgroundImage',
    Simplify<HeroWithFigureSliceHeroWithBackgroundImagePrimary>,
    never
  >
/**
 * Slice variation for *HeroWithFigure*
 *
 */
type HeroWithFigureSliceVariation =
  | HeroWithFigureSliceDefault
  | HeroWithFigureSliceHeroWithFigureGradient
  | HeroWithFigureSliceHeroWithBackgroundImage
/**
 * HeroWithFigure Shared Slice
 *
 * - **API ID**: `hero_with_figure`
 * - **Description**: `HeroWithFigure`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroWithFigureSlice = prismic.SharedSlice<
  'hero_with_figure',
  HeroWithFigureSliceVariation
>
/**
 * Primary content in NewsletterSignUp → Primary
 *
 */
interface MailerLiteSignUpSliceDefaultPrimary {
  /**
   * Title field in *NewsletterSignUp → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Sign-up Call to Action
   * - **API ID Path**: mailer_lite_sign_up.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField
  /**
   * Description field in *NewsletterSignUp → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: The reason to subscribe...
   * - **API ID Path**: mailer_lite_sign_up.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField
  /**
   * Placeholder Text field in *NewsletterSignUp → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: What the empty field says
   * - **API ID Path**: mailer_lite_sign_up.primary.placeholdertext
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  placeholdertext: prismic.KeyTextField
  /**
   * Button Text field in *NewsletterSignUp → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: What the button says
   * - **API ID Path**: mailer_lite_sign_up.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttontext: prismic.KeyTextField
  /**
   * Form Location field in *NewsletterSignUp → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: mailer_lite_sign_up.primary.formlocation
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  formlocation: prismic.BooleanField
  /**
   * Button Color field in *NewsletterSignUp → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Select button color
   * - **API ID Path**: mailer_lite_sign_up.primary.buttoncolor
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  buttoncolor: prismic.SelectField<
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'neutral'
    | 'success'
    | 'warning'
    | 'error'
  >
}
/**
 * Item in NewsletterSignUp → Items
 *
 */
export interface MailerLiteSignUpSliceDefaultItem {
  /**
   * MailerLiteGroupName field in *NewsletterSignUp → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: mailer_lite_sign_up.items[].mailerlitegroupname
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  mailerlitegroupname: prismic.KeyTextField
  /**
   * MailerLite Group ID field in *NewsletterSignUp → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: enter the group ID #
   * - **API ID Path**: mailer_lite_sign_up.items[].mailerlitegroupid
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  mailerlitegroupid: prismic.KeyTextField
}
/**
 * Default variation for NewsletterSignUp Slice
 *
 * - **API ID**: `default`
 * - **Description**: `MailerLiteSignUp`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MailerLiteSignUpSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<MailerLiteSignUpSliceDefaultPrimary>,
  Simplify<MailerLiteSignUpSliceDefaultItem>
>
/**
 * Slice variation for *NewsletterSignUp*
 *
 */
type MailerLiteSignUpSliceVariation = MailerLiteSignUpSliceDefault
/**
 * NewsletterSignUp Shared Slice
 *
 * - **API ID**: `mailer_lite_sign_up`
 * - **Description**: `MailerLiteSignUp`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MailerLiteSignUpSlice = prismic.SharedSlice<
  'mailer_lite_sign_up',
  MailerLiteSignUpSliceVariation
>
/**
 * Primary content in Prose → Primary
 *
 */
interface ProseSliceDefaultPrimary {
  /**
   * Prose Content field in *Prose → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Add your content here
   * - **API ID Path**: prose.primary.prosecontent
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  prosecontent: prismic.RichTextField
}
/**
 * Default variation for Prose Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Prose`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProseSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ProseSliceDefaultPrimary>,
  never
>
/**
 * Slice variation for *Prose*
 *
 */
type ProseSliceVariation = ProseSliceDefault
/**
 * Prose Shared Slice
 *
 * - **API ID**: `prose`
 * - **Description**: `Prose`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProseSlice = prismic.SharedSlice<'prose', ProseSliceVariation>
/**
 * Primary content in SeriesHero → Primary
 *
 */
interface SeriesHeroSliceDefaultPrimary {
  /**
   * Title field in *SeriesHero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Series Hero Title (Jamie Whitmann)
   * - **API ID Path**: series_hero.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField
  /**
   * Subtitle field in *SeriesHero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Subtitle (Clean Romance with HEA)
   * - **API ID Path**: series_hero.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  subtitle: prismic.TitleField
  /**
   * Description field in *SeriesHero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Describe author or featured series
   * - **API ID Path**: series_hero.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField
  /**
   * Background Color field in *SeriesHero → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: series_hero.primary.backgroundcolor
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  backgroundcolor: prismic.ColorField
}
/**
 * Item in SeriesHero → Items
 *
 */
export interface SeriesHeroSliceDefaultItem {
  /**
   * Series field in *SeriesHero → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: series_hero.items[].series
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  series: prismic.ContentRelationshipField<'series'>
}
/**
 * Default variation for SeriesHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SeriesHero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SeriesHeroSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<SeriesHeroSliceDefaultPrimary>,
  Simplify<SeriesHeroSliceDefaultItem>
>
/**
 * Slice variation for *SeriesHero*
 *
 */
type SeriesHeroSliceVariation = SeriesHeroSliceDefault
/**
 * SeriesHero Shared Slice
 *
 * - **API ID**: `series_hero`
 * - **Description**: `SeriesHero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SeriesHeroSlice = prismic.SharedSlice<
  'series_hero',
  SeriesHeroSliceVariation
>
declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }
  namespace Content {
    export type {
      BookDocumentData,
      BookDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocument,
      MainNavigationDocumentData,
      MainNavigationDocumentDataNavigationlinksItem,
      MainNavigationDocumentDataSociallinksItem,
      MainNavigationDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      PostDocumentData,
      PostDocumentDataSlicesSlice,
      PostDocument,
      SeriesDocumentData,
      SeriesDocumentDataSeriesbooksItem,
      SeriesDocument,
      AllDocumentTypes,
      CarouselSliceDefaultPrimary,
      CarouselSliceDefaultItem,
      CarouselSliceDefault,
      CarouselSliceVariation,
      CarouselSlice,
      HeroWithFigureSliceDefaultPrimary,
      HeroWithFigureSliceDefault,
      HeroWithFigureSliceHeroWithFigureGradientPrimary,
      HeroWithFigureSliceHeroWithFigureGradient,
      HeroWithFigureSliceHeroWithBackgroundImagePrimary,
      HeroWithFigureSliceHeroWithBackgroundImage,
      HeroWithFigureSliceVariation,
      HeroWithFigureSlice,
      MailerLiteSignUpSliceDefaultPrimary,
      MailerLiteSignUpSliceDefaultItem,
      MailerLiteSignUpSliceDefault,
      MailerLiteSignUpSliceVariation,
      MailerLiteSignUpSlice,
      ProseSliceDefaultPrimary,
      ProseSliceDefault,
      ProseSliceVariation,
      ProseSlice,
      SeriesHeroSliceDefaultPrimary,
      SeriesHeroSliceDefaultItem,
      SeriesHeroSliceDefault,
      SeriesHeroSliceVariation,
      SeriesHeroSlice,
    }
  }
}
