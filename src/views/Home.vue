<template>
  <div>
    
    <!-- Landing Page Background Image and Introduction -->
    <Background />

    <!-- Call To Action -->
    <Action />

    <!-- Services -->
    <Services />

    <!-- Reasons -->
    <Reasons />

    <!-- How It Works -->
    <div class="py-20 bg-success">
      <div class="flex responsive-container">
        <h6 class="text-2xl font-semibold tracking-wide text-white uppercase">How It Works</h6>
      </div>
    </div>

    <!-- From Our Blog -->
    <Blog />

  </div>
</template>

<script>
import Background from '@/components/Home/Background.vue'
import Action from '@/components/Home/Action.vue'
import Services from '@/components/Home/Services.vue'
import Reasons from '@/components/Home/Reasons.vue'
import Blog from '@/components/Home/Blog.vue'
export default {
  name: 'Home',
  components: { Background, Action, Services, Reasons, Blog }
}
</script>
