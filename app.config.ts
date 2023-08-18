import type { RouteLocationRaw } from 'vue-router'
import {
  AwesomeLayoutPageNavbarMenu,
  AwesomeLayoutPageNavbarMenuDropdownItem,
} from './types'
import { NuxtApp } from '#app'

export interface NuxtAwesomeAppConfig {
  /** title name */
  name?: string
  /** description */
  description?: string

  /** project config */
  project?: {
    /** links */
    links?: {
      /** project github link */
      github?: string
    }
  }

  /** layout config */
  layout?: {
    /** page layout */
    page?: {
      /** navbar */
      navbar?: {
        /** menus in navbar */
        menus?: AwesomeLayoutPageNavbarMenu[]
      }
    }
    /** footer */
    footer?: {
      /** footer year */
      year?: number
    }
    /** welcome component page */
    welcome?: {
      title?: string
      disableInfoReplaceIndexInWelcomePage?: boolean
      primaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
      secondaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
    }
  }

  /** author config */
  author?: {
    /** author name */
    name?: string
    /** author links */
    links?: {
      /** author github link */
      github?: string
      /** author medium link */
      medium?: string
      /** author website link */
      website?: string
    }
  }

  /** author config */
  disableInfoReplaceIndexInWelcomePage?: boolean
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    awesome?: NuxtAwesomeAppConfig
  }
}

export default defineAppConfig({
  awesome: {
    name: 'DrowKid Web',
    description:
      'Aquí encontrarás un breve resumen de cada uno de mis proyectos de código abierto. ',
    project: {
      links: {
        github: 'https://github.com/drowkid-1/ ',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Tools Apps&nbsp:Templates',
        disableInfoReplaceIndexInWelcomePage: true,
        primaryActionButton: {
          title: 'Ver apps',
          to: 'https://drowkid.bswc.net',
        },
        secondaryActionButton: {
          title: 'Ir a GitHub',
          to: 'https://github.com/drowkid-1',
        },
      },
    },
    author: {
      name: 'DrowKid',
      links: {
        github: 'https://github.com/drowkid-1',
        medium: 'https://t.me/drowkid01',
        website: 'https://lalo.my.to',
      },
    },
    disableInfoReplaceIndexInWelcomePage: false,
  } as NuxtAwesomeAppConfig,
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em',
  },
})
