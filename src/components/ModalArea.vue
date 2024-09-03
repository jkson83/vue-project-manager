<template>
    <div class="modal-wrap">
        <div class="modal-header">
            <slot name="header" calss="header-title" />
            <button type="button" @click="$emit('modalClose')">팝업닫기</button>
        </div>
        <div class="modal-body">
            <slot name="body" />
        </div>
    </div>
    <div class="modal-overlay" @click="$emit('modalClose')"></div>
</template>

<script>
export default {
  name: 'modalArea',
  props: {
  },
  data () {
    return {
    }
  }
}
</script>
