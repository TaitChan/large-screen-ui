<template>
  <base-chart chartRef="bar-simple" :option="option"></base-chart>
</template>

<script>
  import { getOption } from './index.js'
  import BaseChart from '@/components/base-chart'
  export default {
    name: 'pie-simple',
    components: { BaseChart },
    data() {
      return {
        option: {},
      }
    },
    created() {
      const { option } = getOption()
      this.option = option
    },
  }
</script>

<style lang="scss" scoped></style>
