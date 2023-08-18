import { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'DrowKid Web',
    description:
      'Apps, templates, blog, etc..',
    project: {
      links: {
        github: 'https://github.com/drowkid-1/',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: 'Apps', to: { name: 'blank' } },
            { type: 'link', title: 'Posts', to: { name: 'post' } },
            { type: 'link', title: 'Scripts', to: { name: 'test' } },
            {
              type: 'dropdown',
              title: 'Extras',
              children: [
                {
                  type: 'link',
                  title: 'Componentes Web',
                  to: { name: 'docs-components' },
                },
              ],
            },
            { type: 'button', title: 'Setting', to: { name: 'setting' } },
            // dynamic title
            // {
            //   type: 'button',
            //   title: (nuxt) =>
            //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            // },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'DrowKid Website ',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'DrowKid', 
      links: {
        github: 'https://github.com/drowkid-1',
        medium: '#',
        website: 'https://lalo.b-cdn.net',
      },
    },
  },
})
