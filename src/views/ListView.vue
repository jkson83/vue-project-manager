<template>
    <h1>Table {{ title }}</h1>
    <div class="listTable">
      <ul class="row-group">
        <li>번호</li>
        <li>제목</li>
        <li>ID</li>
        <li>날짜</li>
        <li>조회</li>
      </ul>
      <ul>
        <li>{{ index }}</li>
        <li>{{ btitle }}</li>
        <li>{{ IDname }}</li>
        <li>{{ date }}</li>
        <li>{{ viewnum }}</li>
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
      title: 'Study',
      name: 'WriteForm',
      props: {
        index: {},
        btitle: {},
        IDname: {},
        date: {},
        viewnum: {}
      },
      components: {
        WriteForm
      }
    }
  }
}
</script>
