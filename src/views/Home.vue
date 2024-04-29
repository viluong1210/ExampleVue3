<template>
  <div class="home-page">
   
    <button  @click="addNewTag">add new tag</button>
    <div v-if="isLoading" class="loading-modal">
    <div class="loading-spinner"></div>
  </div>
    <div>
   
    <p>Tags: {{ tags }}</p>
  </div>
  </div>
</template>

<script>


import { FETCH_TAGS } from "../store/actions.type";
import { TAG_ADD } from "../store/mutations.type";

export default {
  name: "home",
  components: {
   
  },
  mounted() {
    this.$store.dispatch(FETCH_TAGS);
  },
  computed: {
    
    tags() {
     
      return this.$store.state.tags;
    },
    isLoading() {

    return this.$store.state.isLoading
},
    
  },
  methods: {
    addNewTag() {
      this.$store.dispatch(TAG_ADD);
    }
  }
};
</script>
