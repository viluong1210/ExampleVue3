
<template>
 <input
 @input="handleChange">
</template>

<script>


export default {
  props: {
    onChange : Function ,
  },
  
  methods: {
    handleChange(event) {
      this.onChange(event); 
    }
  }
};
</script>

