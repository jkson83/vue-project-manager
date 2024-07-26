<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <input type="text" v-model="valueModel" /><br>
      <textarea v-model="message"></textarea>
    </div>
    <div>
      <label><input type="checkbox" value="서울" v-model="checked">서울</label>
      <label><input type="checkbox" value="부산" v-model="checked">부산</label>
      <label><input type="checkbox" value="제주" v-model="checked">제주</label>
      <br>
      <span>체크한 지역: {{ checked }}</span><br>
    </div>
    <div>
      <lbael><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</lbael>
      <lbael><input type="radio" v-bind:value="radioValue2" v-model="picked">부산</lbael>
      <lbael><input type="radio" v-bind:value="radioValue3" v-model="picked">제주</lbael>
      <br>
      <span>선택한 지역: {{ picked }}</span>
    </div>
    <div class="container" v-bind:class="{'active':isActive, 'text-red':hasErro}">
      Class Binding
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'World',
      valueModel: 'SouthKorea',
      message: '여러 줄을 입력할 수 있는 textarea 입니다.',
      checked: [],
      picked: '',
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주',
      isActive: true,
      hasErro: false
    }
  }
}
</script>
