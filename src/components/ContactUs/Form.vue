<template>
  <div class="w-2/5">
    <div class="flex flex-col space-y-4">
      
      <!-- Title -->
      <Title title="Send us an email" />

      <!-- Form -->
      <form novalidate @submit.prevent="" class="flex flex-col items-start space-y-4">

        <input type="text" :class="classes" placeholder="Your Name*" />

        <input type="email" :class="classes" placeholder="Your Email*" />

        <input type="text" :class="classes" placeholder="Your Company" />

        <select :class="classes">
          <option>---</option>
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
            class="capitalize"
          >
            {{ option.text }}
          </option>
        </select>

        <textarea placeholder="Your Message*" :class="classes"></textarea>

        <Button text="Submit" />
        
      </form>

    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import Button from '@/components/Button.vue'
import Title from '@/components/ContactUs/Title.vue'
export default {
  name: 'ContactForm',
  components: { Button, Title },
  setup() {
    const classes = ref('w-full p-2 text-black bg-gray-100 border focus:outline-none border-muted')
    const options = reactive([
      { text: 'Help Center', value: 'help-center' },
      { text: 'Sales', value: 'sales' },
      { text: 'Partnership', value: 'partnership' },
      { text: 'Others', value: 'others' },   
    ])

    return { options, classes }
  }
}
</script>