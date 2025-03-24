const { STRAPI_HOST } = process.env;
export const ROUTES = {
  STRAPRI: {
    IMAGE_URL: function (url: string) {
      return `${STRAPI_HOST}${url}`;
    },
    BASE_PAHT: '/api',
    POPULATE: {
      ALL: 'populate=*',
    },
    GLOBAL: function () {
      return `${this.BASE_PAHT}/global?${this.POPULATE.ALL}`;
    },
  },
};
