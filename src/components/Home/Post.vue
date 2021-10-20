<template>
  <div class="overflow-hidden border shadow-sm cursor-pointer" @click.prevent="viewPost">
    <div class="overflow-hidden h-60">
      <img :src="imagePath" class="w-full transition duration-1000 ease-in-out transform h-60 hover:scale-110" />
    </div>
    <div class="flex flex-col items-start p-4 space-y-4 bg-white">
      <div>
        <span class="font-semibold">{{ post.title }}</span>
        <div class="w-8 h-0.5 mt-2 bg-muted"></div>
      </div>
      <!-- <router-link class="p-1 px-4 text-xs font-semibold uppercase transition duration-200 border-2 border-muted text-muted hover:bg-success hover:border-0 hover:border-success hover:text-white" :to="{name: 'Blog Post', params: { slug: this.post.slug }}">Read More</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
  methods: {
    viewPost() {
      this.$router.push({name: 'Blog Post', params: { slug: this.post.slug }})
    }
  },
  computed: {
    imagePath() {
      return `/images/posts/${this.post.imageName}`
    }
  }
}
</script>