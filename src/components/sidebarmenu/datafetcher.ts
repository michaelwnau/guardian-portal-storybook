import { sidebarmenu_link } from './../../lib/directusdatafetcher'
import { DirectusDataFetcher, getFileUrl } from '@/lib/directusdatafetcher'
import { SideBarMenuData, SideBarMenuItems } from '@/types'
import { readItems } from '@directus/sdk'

export default class SideBarMenuDataFetcher extends DirectusDataFetcher {
  async fetch(): Promise<SideBarMenuData> {
    const rawlinkIds = await this.findSidebarMenuLinks()
    const rawLinks = await this.findLinksByIds(rawlinkIds)

    const links = rawLinks.map((rawLink) => {
      return {
        id: rawLink.id,
        name: rawLink.name,
        url: rawLink.url,
        imageUrl: !!rawLink.image ? getFileUrl(rawLink.image) : '',
      } as SideBarMenuItems
    })

    return {
      links: links,
    }
  }

  private async findSidebarMenuLinks(): Promise<number[]> {
    const linkResults = await this.client.request(
      readItems('sidebarmenu_links_links', {
        fields: ['id', 'links_id'],
      })
    )
    return linkResults.map((joinRow) => joinRow.links_id)
  }

  private async findLinksByIds(ids: number[]): Promise<sidebarmenu_link[]> {
    const result = await this.client.request(
      readItems('links', {
        filter: {
          id: {
            _in: ids,
          },
        },
      })
    )
    return result
  }
}
