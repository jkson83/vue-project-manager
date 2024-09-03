<template>
    <!-- <h2><slot></slot></h2> -->
     <h2>{{ title }}</h2>
</template>
<pageTitle />
<script>
export default {
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다.'
    }
  }
}
</script>
