import Home from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import Products from '@/views/Products.vue'
import SocialImpact from '@/views/SocialImpact.vue'
import Blog from '@/views/Blog.vue'
import Shop from '@/views/Shop.vue'
import ContactUs from '@/views/ContactUs.vue'
import FAQ from '@/views/FAQ.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TermsOfService from '@/views/TermsOfService.vue'
import BlogPost from '@/views/BlogPost.vue'
import NotFound from '@/views/NotFound.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: AboutUs
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/social-impact',
    name: 'Social Impact',
    component: SocialImpact
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: ContactUs
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
    path: '/:slug',
    name: 'Blog Post',
    component: BlogPost
  },
  {
    path: '/*',
    name: '404',
    component: NotFound
  }
]