import { DropdownOption } from '../src/lib/directusdatafetcher'
import { landing_page, label } from './lib/directusdatafetcher'

export type HomePageData = {
  navbar: NavbarData
  heroBanner: Article[]
  featuredLinks: FeaturedLinksData
  footer: FooterData
  news: Article[]
  events: Article[]
}

export type LandingPageData = {
  banner: BannerData
  breadcrumbs: any
  sideMenu: SideBarMenuData
  featuredLinks: FeaturedLinksData
  documents: DocumentGroup[]
  bookmarks: BookmarksGroup[]
  announcements: ArticlesSectionData
  events: ArticlesSectionData
  footer: FooterData
  navbar: NavbarData
}

export type GalleryPageData = {
  navbar: NavbarData
  breadcrumbs?: BreadCrumbData
  footer: FooterData
  gallaryData: GalleryItem[]
}

export type SideBarMenuData = {
  links: SideBarMenuItems[]
}

export type SideBarMenuItems = {
  id: number
  name: string
  url: string
  imageUrl: string
}

export type ProfilePageData = {
  navbar: NavbarData
  personnel: PersonnelData
  personnelOptions: PersonnelOptionsData
  footer: FooterData
}

export type PersonnelData = {
  id: number
  last_name: string
  first_name: string
  middle_name: string
  display_name: string
  email: string
  duty_title: string
  field_command: string
  phone: string
  base: string
  unit: string
  rank: string
  occupation: string
  state: string
  city: string
  theme: string
  launches: boolean
  space_force_news: boolean
  photos: boolean
  articles: boolean
  comments: boolean
}

export type PersonnelOptionsData = {
  bases: DropdownOption[]
}

export type LandingPageQuery = {
  slug: string
}

export type ArticlePageQuery = {
  slug: string
}

export type ArticlePageData = {
  landingPage?: landing_page
  navbar: NavbarData
  breadcrumbs?: any
  banner?: BannerData
  article: Article
  footer: FooterData
  tags?: label[]
}

export type LandingPageShort = {
  slug: string
  title: string
}

export type Announcement = {
  id: number
  title: string
  body: string
  image: string
  dateCreated: string
}

export type Schedule = {
  label: string
  startTime: string
}

export type Article = {
  id: number
  status: string
  sort: number | null
  userCreated: string
  dateCreated: string
  userUpdated: string
  category: string
  title: string
  body: string
  publishedDate: string
  slug: string
  image: string | null
  imageCaption: string | null
  attachments: any[]
  document: string | null
  landingPage: number
  author: string
  location: string | null
  displayOnHome: boolean
  tags: number[]
  comments: any[]
  announcement: boolean
}

export type ArticlesSectionData = {
  heading: string
  articles: Article[]
}

export type FeaturedLink = {
  name: string
  url: string
  imageUrl: string
}

export type FeaturedLinksData = {
  heading: string
  links: FeaturedLink[]
}

export type FooterLink = {
  name: string
  url: string
  openInNew: boolean
  hidden: boolean
}

export type DocumentGroup = {
  id: number
  documents: DocumentItem[]
  name: string
  user_created: string
  date_created: string
  user_updated: string | null
  date_updated: string | null
}

export type DocumentItem = {
  id: number
  title: string
  description: string
  file_filename: string
  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
  published_date: string
}

export type BookmarksGroup = {
  id: string
  links: BookmarkItem[]
  title: string
}

export type BookmarkItem = {
  id: number
  name: string
  description: string
  url: string
  image: string
  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
}

export type FooterData = {
  hasLocation: boolean
  streetAddress: string
  city: string
  state: string
  zip: string
  phone: string
  email: string
  informationTitle: string
  informationText: string
  linkFB: string
  linkX: string
  linkIG: string
  linkYT: string
  image: string
  imageDescription: string
  quickLinks: FooterLink[]
  guardianPortal: FooterLink[]
  feedback: string
  default: boolean
}

export interface HeroBanner {
  id: string
  source: string
  title: string
  heading: string
  subheading: string
  imgCaption: string
}

export interface HeroBannerData {
  articles: Article[]
}

export interface BreadCrumbData {
  links: BreadCrumb[]
}

export interface BreadCrumb {
  text: string
  link: string
}

export type BannerData = {
  logoSrc: string
  logoAlt: string
  title: string
  tagline: string
  missionText: string
  visionText: string
}

export type NavbarLink = {
  name: string
  url: string
}

export type User = {
  name: string
  avatarUrl: string
}

export type NavbarData = {
  leftLinks: NavbarLink[]
  rightLinks: NavbarLink[]
  logo: string
  logoAlt: string
  notificationsCount: number
  user: User
}

export type SearchResultData = {
  title: string
  type: string
  category: string
  date: string
  linkId: string
}

export type SearchPageData = {
  footer: FooterData
  results: SearchResultData[]
  navbar: NavbarData
}

export type GalleryItem = {
  id: number
  title: string
  body: string
  slug: string
  image?: string | null
  category: string | null
  publishedDate: string | null
  type: string
}

export enum CardType {
  LongCard = 'long',
  SmallCard = 'small',
  HorizontalCard = 'horizontal',
  VerticalCard = 'vertical',
}
