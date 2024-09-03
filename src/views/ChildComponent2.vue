<template>
    <button type="button" @click="childFunc" ref="btn">자식 컴포넌트 데이터 변경</button>
 <!-- <h1>{{ msg }}</h1> -->
</template>

<script>
export default {
  // methods: {
  //   callFromParent () {
  //     console.log('부모 컴포넌트에서 직접 호출한 이벤트')
  //   }
  // }
  data () {
    return {
      msg: '메세지'
    }
  },
  methods: {
    childFunc () {
      this.msg = '변경된 메세지'
    }
  }
  // mounted () {
  //   this.$emit('send-message', this.msg)
  // }
}
</script>
