import { DirectusDataFetcher, landing_page, getFileUrl } from '@/lib/directusdatafetcher'
import { BannerData } from '@/types'

export default class BannerDataFetcher extends DirectusDataFetcher {
  async fetch(landingPage: landing_page): Promise<BannerData> {
    const { title, tagline, logo, mission, vision } = landingPage
    const logoSrc = logo ? getFileUrl(logo) : ''

    return {
      logoSrc: logoSrc,
      logoAlt: title,
      title: title.toUpperCase(),
      tagline: tagline ? tagline : '',
      missionText: mission ? mission : '',
      visionText: vision ? vision : '',
    }
  }
}
