import reasons from './data/reasons'
import posts from './data/posts'
import values from './data/values'
import products from './data/products'
import socialImpacts from './data/socialImpacts'

export const landing = {
  namespaced: true,
  state: {
    links: [
      {name: 'Home', url: {name: 'Home'}},
      {name: 'Local Market', url: {name: 'Local Market'}},
      {name: 'Global Market', url: {name: 'Global Market'}},
      {name: 'Product Estimator', url: {name: 'Product Estimator'}},
      // {name: 'Products', url: {name: 'Products'}},
      // {name: 'Blog', url: {name: 'Blog'}},
      // {name: 'Shop', url: {name: 'Shop'}},
    ],
    aboutLinks: [
      {name: 'Our Company', url: {name: 'Our Company'}},
      {name: 'Our Team', url: {name: 'Our Team'}},
      {name: 'Our Core Values', url: {name: 'Our Core Values'}},
      {name: 'Social Impact', url: {name: 'Social Impact'}},
      {name: 'FAQ', url: {name: 'FAQ'}},
    ],
    helpLinks: [
      {name: 'FAQ', url: {name: 'FAQ'}},
      {name: 'Privacy Policy', url: {name: 'Privacy Policy'}},
      {name: 'Terms of Service', url: {name: 'Terms of Service'}},
    ],
    socials: [
      {icon: 'fab fa-facebook-f', link: 'https://facebook.com/agcomfy'},
      {icon: 'fab fa-twitter', link: 'https://twitter.com/agcomfy'},
      {icon: 'fab fa-instagram', link: 'https://instagram.com/agcomfy'}
    ],
    services: [
      {title: 'farmers', 'imageName': 'farmers.jpg'},
      {title: 'producers', 'imageName': 'producers.jpg'},
      {title: 'processors', 'imageName': 'processors.jpg'},
      {title: 'agrodealers', 'imageName': 'agrodealers.jpg'},
      {title: 'retailers', 'imageName': 'retailers.jpg'},
      {title: 'consumers', 'imageName': 'consumers.jpg'},
      {title: 'distributors', 'imageName': 'distributors.jpg'},
      {title: 'marketers', 'imageName': 'marketers.jpg'},
    ], 
    reasons,
    posts,
    values,
    products,
    socialImpacts,
  },
  getters: {
    getLinks: state => state.links,
    getAboutLinks: state => state.aboutLinks,
    getHelpLinks: state => state.helpLinks,
    getSocials: state => state.socials,
    getServices: state => state.services,
    getReasons: state => state.reasons,
    getPosts: state => state.posts,
    getValues: state => state.values,
    getProducts: state => state.products,
    getSocialImpacts: state => state.socialImpacts
  },
  mutations: {},
  actions: {}
}