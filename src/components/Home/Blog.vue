<template>
  <div class="py-10 bg-gray-100">
    <div class="grid grid-cols-3 gap-6 responsive-container">
      
      <!-- Text Content -->
      <div class="flex flex-col items-start space-y-3">
        <span class="text-2xl font-semibold text-gray-900 uppercase">From Our Blog</span>
        <p class="text-sm font-light leading-6 tracking-normal">Read the latest article from the agro sector in and around the world.</p>
        <Button text="Visit Our Blog" transition="hover:bg-blend-dark-light"/>
      </div>

      <!-- Blog Posts -->
      <div class="flex justify-between col-span-2 space-x-8">
        
        <Post 
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
        />

      </div>

    </div>
  </div>  
</template>

<script>
import { mapGetters }  from 'vuex'
import Button from '@/components/Button.vue'
import Post from '@/components/Home/Post.vue'
export default {
  components: { Button, Post },
  name: 'RecentBlog',
  computed: {
    ...mapGetters('landing', {
      posts: 'getPosts'
    })
  }
}
</script>