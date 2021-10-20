import Home from '@/views/Home.vue'
import LocalMarket from '@/views/LocalMarket.vue'
import GlobalMarket from '@/views/GlobalMarket.vue'
import ProductEstimator from '@/views/ProductEstimator.vue'
import AboutUs from '@/views/AboutUs.vue'
import ContactUs from '@/views/ContactUs.vue'
import OurCompany from '@/views/OurCompany.vue'
import OurTeam from '@/views/OurTeam.vue'
import OurCoreValues from '@/views/OurCoreValues.vue'
import SocialImpact from '@/views/SocialImpact.vue'
import FAQ from '@/views/FAQ.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TermsOfService from '@/views/TermsOfService.vue'
import NotFound from '@/views/NotFound.vue'

// import Products from '@/views/Products.vue'
// import Blog from '@/views/Blog.vue'
// import Shop from '@/views/Shop.vue'
// import BlogPost from '@/views/BlogPost.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/local-market',
    name: 'Local Market',
    component: LocalMarket
  },
  {
    path: '/global-market',
    name: 'Global Market',
    component: GlobalMarket
  },
  {
    path: '/product-estimator',
    name: 'Product Estimator',
    component: ProductEstimator
  },
  {
    path: '/our-company',
    name: 'Our Company',
    component: OurCompany
  },
  {
    path: '/our-team',
    name: 'Our Team',
    component: OurTeam
  },
  {
    path: '/our-core-values',
    name: 'Our Core Values',
    component: OurCoreValues
  },
  {
    path: '/social-impact',
    name: 'Social Impact',
    component: SocialImpact
  },
  {
    path: '/frequently-asked-questions',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-of-service',
    name: 'Terms of Service',
    component: TermsOfService
  },
  {
    path: '/*',
    name: '404',
    component: NotFound
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: AboutUs
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: ContactUs
  },
  // {
  //   path: '/products',
  //   name: 'Products',
  //   component: Products
  // },
  // {
  //   path: '/blog',
  //   name: 'Blog',
  //   component: Blog
  // },
  // {
  //   path: '/shop',
  //   name: 'Shop',
  //   component: Shop
  // },
  // {
  //   path: '/:slug',
  //   name: 'Blog Post',
  //   component: BlogPost
  // },
]