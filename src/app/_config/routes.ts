const { STRAPI_HOST } = process.env
export const ROUTES = {
  STRAPRI: {
    HOST: STRAPI_HOST,
    IMAGE_URL: function (url: string) {
      return `${STRAPI_HOST}${url}`
    },
    BASE_PAHT: '/api',
    POPULATE: {
      ALL: 'populate=*',
    },
    GLOBAL: function () {
      return `${this.BASE_PAHT}/global?${this.POPULATE.ALL}`
    },
    NOT_FOUND: function () {
      return `${this.BASE_PAHT}/not-found?${this.POPULATE.ALL}`
    },
  },
  PAGES: {
    HOME: { PATH: '/', NAME: 'Home' },
    ABOUT: { PATH: '/about', NAME: 'About' },
  },
}
