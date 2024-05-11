
<template>
 <button @click="handleClick">{{ title }}</button>
</template>

<script>


export default {
  props: {
    title :  String,
    onClick : Function ,
  },
  setup(props) {
    const handleClick = () => {
      props.onClick(); 
    };

    return {
      title: props.title,
      handleClick,
    };
  }
  
};
</script>

