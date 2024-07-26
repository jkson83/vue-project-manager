<template>
    <h1>Hello, {{ title }}</h1>
    <div class="listTable">
      <ul>
        <li>번호</li>
        <li>제목</li>
        <li>ID</li>
        <li>날짜</li>
        <li>조회</li>
      </ul>
    </div>
    <write-form></write-form>
</template>

<script>
import WriteForm from './WriteForm.vue'
export default {
  components: { WriteForm },
  data () {
    return {
      title: 'World',
      name: 'WriteForm',
      components: {
        WriteForm
      }
    }
  }
}
</script>
