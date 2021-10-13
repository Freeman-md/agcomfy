<template>
  <div>
    
    <!-- Contact Information Summary -->
    <ContactInformation />

    <div class="py-24">

      <div class="flex space-x-6 responsive-container">

        <!-- FAQ -->
        <ContactFAQ />
        
        <!-- Contact Form  -->
        <ContactForm />
        
      </div>

    </div>

  </div>
</template>

<script>
import ContactInformation from '@/components/ContactUs/Information.vue'
import ContactForm from '@/components/ContactUs/Form.vue'
import ContactFAQ from '@/components/ContactUs/FAQ.vue'
export default {
  name: 'ContactUs',
  components: { ContactInformation, ContactForm, ContactFAQ, },
}
</script>