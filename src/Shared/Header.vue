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
        </div>

        <!-- Icons -->
        <div class="flex items-center space-x-6">
          <span class="transition duration-200 cursor-pointer fa fa-search hover:text-warning"></span>
          <span class="transition duration-200 cursor-pointer fa fa-shopping-basket hover:text-warning"></span>
          <span @click.prevent="toggleModal(true)" class="transition duration-200 cursor-pointer fa fa-user hover:text-warning"></span>
        </div>
      </div>
      
      <!-- Authentication Modal -->
      <Modal :show="show" v-show="show">
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

    const show = ref(false)

    const links = computed(() => store.getters['landing/getLinks'])

    const toggleModal = (value) => {
      show.value = value
    }

    return {
      show,
      links,
      toggleModal
    }
  }
}
</script>