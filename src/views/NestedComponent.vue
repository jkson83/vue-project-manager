<template>
    <div>
        <PageTitle />
    </div>
    <h3>modal</h3>
    <button type="button" @click="this.modalShow = !this.modalShow">모달클릭</button>
    <ModalArea v-if="this.modalShow" @modalClose="modalClose">
      <template #header>
        타이틀
      </template>
      <template #body>
        <div>내용</div>
        <div>
          <button type="button" @click="this.modalShow = false">버튼</button>
          <button type="button" @click="this.modalShow = false">버튼</button>
        </div>
      </template>
    </ModalArea>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'
import ModalArea from '../components/ModalArea.vue'
// eslint-disable-next-line vue/no-export-in-script-setup
export default {
  name: 'NestedComponent',
  components: {
    PageTitle,
    ModalArea
  },
  data () {
    return {
      modalShow: false
    }
  },
  methods: {
    modalClose () {
      this.modalShow = false
    }
  }
}

</script>
