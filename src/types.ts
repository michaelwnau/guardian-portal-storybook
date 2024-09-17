export type HomePageData = {
  navbar: NavbarData
  heroBanner: HeroBannerData
  featuredLinks: FeaturedLinksData
  footer: FooterData
  news: Article[]
  events: Article[]
}

export type LandingPageData = {
  banner: BannerData
  breadcrumbs: any
  featuredLinks: FeaturedLinksData
  announcements: Article[]
  events: Article[]
  footer: FooterData
  navbar: NavbarData
}

export type ProfilePageData = {
  navbar: NavbarData
  footer: FooterData
}

export type LandingPageQuery = {
  slug: string
}

export type LandingPageShort = {
  slug: string
  title: string
}

export type Announcement = {
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
  document: string | null
  landingPage: number
  author: string
  location: string | null
  displayOnHome: boolean
  tags: number[]
  comments: any[]
}

export type FeaturedLink = {
  name: string
  url: string
  imageUrl: string
}

export type FeaturedLinksData = {
  links: FeaturedLink[]
}

export type FooterLink = {
  name: string
  url: string
  openInNew: boolean
}

export type FooterData = {
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
  image?: string
  imageDescription?: string
  baseMapImage: string
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
  images: HeroBanner[]
}

export type NewsData = {
  news: Article[]
}

export type AnnouncementsData = {
  announcements: Article[]
}

export type EventsData = {
  events: Article[]
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
