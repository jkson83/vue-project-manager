<!-- eslint-disable indent -->
<!-- <template>
    <child-component @send-message="sendMessage" ref="child_component" />
</template>

<script>
import ChildComponent from './ChildComponent2.vue'
export default {
  components: { ChildComponent },
  mounted () {
    this.$refs.child_component.callFromParent()
  }
}
</script> -->

<template>
  <button type="button" @click="checkChild">자식컴포넌트 조회</button>
  <child-component ref = "child_component" />
  <!-- <child-component @send-message="sendMessage" /> -->
</template>
<script>
import ChildComponent from './ChildComponent2.vue'

export default {
  components: { ChildComponent },
  computed: {
    msg () {
      return this.$refs.child_component.msg
    }
  },
  methods: {
    // changeChildData () {
    //   this.$refs.child_component.msg = '부모 컴포넌트가 변경한 데이터'
    // }
    // sendMessage (data) {
    //   console.log(data)
    // }
    checkChild () {
      alert(this.msg)
    }
  }
}
</script>
