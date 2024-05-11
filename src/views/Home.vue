<template>
   <label >Name</label>
  <VInput :onChange="(e)=> handleChange(e, 'name')"/> 


  <label >Title</label>
  <VInput :onChange="(e)=> handleChange(e, 'title')"/>

  <VButton :onClick="SubmitData" :title="`hahah`"  />
</template>

<script>

import { ref } from 'vue';
import VInput from '../components/Input.vue'
import VButton from '../components/Button.vue'
export default {
  name: "home",
  setup() {
    const dataForm = ref({});

  const handleChange = (e, name) => {
    dataForm.value[name] = e.target.value;
  };

  const SubmitData = (e, name) => {
   console.log('this.dataForm', dataForm.value);
 };
return {
  dataForm,
  handleChange,
  SubmitData
};
  },
  components: {
    VInput,
    VButton
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    
   
  }
};
</script>
