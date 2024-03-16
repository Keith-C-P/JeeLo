<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <h1>JeeLo</h1>
      <div class="cards">
        <Card 
        title="MCQ System" 
        content="Click to go to MCQ System" @click="goToMCQ" />
        <Card 
        title="Flash Card System" 
        content="Click to go to Flash Card System" @click="goToFlashCard" />
        <Card 
        title="Mental Health System" 
        content="Click to go to Mental Health System" @click="goToMentalHealth" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Card from './components/Card.vue';

export default {
  components: {
    Sidebar,
    Card,
  },
  methods: {
    goToMCQ() {
      // navigate to MCQ System
    },
    goToFlashCard() {
      // navigate to Flash Card System
    },
    goToMentalHealth() {
      // navigate to Mental Health System
    },
  },
};
</script>

<style>
#app {
  display: flex;
}

.content {
  margin-left: 250px;
}

.cards {
  display: flex;
  justify-content: space-between;
}
</style>
