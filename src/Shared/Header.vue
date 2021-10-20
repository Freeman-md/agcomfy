<template>
  <nav class="fixed inset-x-0 top-0 z-50 text-white bg-black">
    <div class="flex items-center justify-between h-20 responsive-container">
      <Sidebar />

      <router-link :to="{name: 'Home'}" class="w-48">
        <img src="@/assets/images/agcomfy-logo.png" class="object-contain"/>
      </router-link>
      
      <div class="flex items-center space-x-2 text-sm font-semibold text-white">
        <!-- Links -->
        <div class="flex items-center space-x-1">
          <router-link active-class="text-warning" :to="link.url" class="px-3 py-2 tracking-wider transition duration-200 cursor-pointer hover:text-warning" v-for="(link, index) in links" :key="index">{{ link.name }}</router-link>

          <div class="relative">
            <span @click="toggleDropdown" class="px-3 py-2 tracking-wider transition duration-200 cursor-pointer hover:text-warning" :class="{'text-warning': showDropdown}">About Us</span>
            <transition name="dropdown">
              <div class="absolute right-0 z-10 flex flex-col items-start w-56 px-4 py-3 mt-8 space-y-2 text-gray-700 origin-bottom-right bg-white rounded-md shadow-md " v-if="showDropdown" >
              <router-link
                v-for="(link, index) in aboutLinks"
                :key="index"
                :to="link.url"
                active-class="text-black"
                class="text-sm transition duration-200 cursor-pointer hover:text-black"
              >
                  {{ link.name }}
                </router-link>
              </div>
            </transition>
          </div>

          <router-link active-class="text-warning" :to="{name: 'Contact Us'}" class="px-3 py-2 tracking-wider transition duration-200 cursor-pointer hover:text-warning" >Contact Us</router-link>
        </div>

        <!-- Icons -->
        <div class="flex items-center space-x-6">
          <span class="transition duration-200 cursor-pointer fa fa-search hover:text-warning"></span>
          <span class="transition duration-200 cursor-pointer fa fa-shopping-basket hover:text-warning"></span>
          <span @click.prevent="toggleModal(true)" class="transition duration-200 cursor-pointer fa fa-user hover:text-warning"></span>
        </div>
      </div>
      
      <!-- Authentication Modal -->
      <Modal :show="showModal" v-show="showModal">
        <template v-slot:header>
          <div class="fixed text-lg text-gray-200 top-4 right-4">
            <span @click.prevent="toggleModal(false)" class="cursor-pointer fas fa-times"></span>
          </div>
        </template>
        <template v-slot:modal>
          <Authentication />
        </template>
      </Modal>
      
    </div>
</nav>

</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Sidebar from '@/Shared/Sidebar.vue'
import Authentication from '@/Shared/Authentication.vue'
import Modal from '@/components/Modal.vue'
export default {
  name: 'Header',  
  components: {Sidebar, Authentication, Modal},
  setup() {
    const store = useStore() 

    const showModal = ref(false)
    const showDropdown = ref(false)

    const links = computed(() => store.getters['landing/getLinks'])
    const aboutLinks = computed(() => store.getters['landing/getAboutLinks'])

    const toggleModal = (value) => {
      showModal.value = value
    }
    const toggleDropdown = () => showDropdown.value = !showDropdown.value

    return {
      showModal,
      showDropdown,
      links,
      aboutLinks,
      toggleModal,
      toggleDropdown
    }
  }
}
</script>

<style scoped>
.dropdown-enter-active {
  transition: ease-out 200ms;
}   
.dropdown-enter-from, .dropdown-leave-to  {
  transform: scale(0.9);
  opacity: 0;
}
.dropdown-enter-to, .dropdown-leave-from {
  transform: scale(1);
  opacity: 100;
}
.dropdown-leave-active {
  transition: ease-in 75ms;
}
</style>