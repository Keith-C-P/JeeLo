<template>
  <Sidebar :visible="visible" :baseZIndex="1000" :showCloseIcon="false">
    <h1>JeeLo</h1>
    <i class="pi pi-home"></i>
    <i class="pi pi-calendar"></i>
    <i class="pi pi-book"></i>
    <i class="pi pi-pencil"></i>
    <i class="pi pi-cog"></i>
    <i class="pi pi-users"></i>
    <i class="pi pi-question"></i>
    <div class="profile">
      <img src="../assets/samba.png" alt="Profile" @click="goToProfile" />
    </div>
    <button @click="toggle">Toggle Sidebar</button>
  </Sidebar>
</template>

<script>
import Sidebar from 'primevue/Sidebar'; //idk why this is not working

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    goToProfile() {

    }
  }
}
</script>

<style scoped>
.profile img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>