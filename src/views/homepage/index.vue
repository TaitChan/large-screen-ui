<template>
  <div class="container">
    <div class="header">
      <homepage-header></homepage-header>
    </div>
    <div class="main">
      <div class="left" :class="isOpenLeft ? '' : 'close-left'">
        <homepage-left></homepage-left>
        <div class="left_is_open" @click="isOpenLeft = !isOpenLeft">
          {{ isOpenLeft ? 'off' : 'on' }}
        </div>
      </div>
      <div class="mid">
        <homepage-rules>
          <homepage-mid></homepage-mid>
        </homepage-rules>
      </div>
      <div class="right" :class="isOpenRight ? '' : 'close-right'">
        <homepage-right></homepage-right>
        <div class="right_is_open" @click="isOpenRight = !isOpenRight">
          {{ isOpenRight ? 'off' : 'on' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomepageHeader from '@/views/homepage/homepage-header'
  import HomepageLeft from '@/views/homepage/homepage-left'
  import HomepageRules from '@/views/homepage/homepage-rules/homepage-rules'
  import HomepageMid from '@/views/homepage/homepage-mid'
  import HomepageRight from '@/views/homepage/homepage-right/homepage-right'
  export default {
    name: 'HomePage',
    components: { HomepageRight, HomepageMid, HomepageRules, HomepageLeft, HomepageHeader },
    props: {},
    data() {
      return {
        isOpenRight: true,
        isOpenLeft: true,
      }
    },
    computed: {},
    methods: {},
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>
