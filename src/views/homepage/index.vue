<template>
  <div class="container">
    <div class="header">
      <ct-header></ct-header>
    </div>
    <div class="main">
      <div class="left" :class="isOpenLeft ? '' : 'close-left'">
        <left></left>
        <div class="left_is_open" @click="isOpenLeft = !isOpenLeft">
          {{ isOpenLeft ? 'off' : 'on' }}
        </div>
      </div>
      <div class="mid">
        <div class="mid_rules">
          <div class="mid_rules_icon">
            <svg-icon icon-class="view"></svg-icon>
          </div>
          <div class="mid_rules_w_box" ref="midRulesW">
            <div
              class="mid_rules_w"
              :style="{
                gridTemplateColumns: `repeat(auto-fill, ${scale}px)`,
              }"
            >
              <div class="mid_rules_w_line" v-for="item in rulesWCount" :key="item">
                <p>{{ (item - 1) * 100 }}</p>
                <div
                  class="mid_rules_w_line_mini"
                  :style="{
                    gridTemplateColumns: `repeat(auto-fill, ${scale / 10}px)`,
                  }"
                >
                  <span v-for="v in 10" :key="v"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="mid_rules_h_box" ref="midRulesH">
            <div
              class="mid_rules_h"
              :style="{
                gridTemplateRows: `repeat(auto-fill, ${scale}px)`,
              }"
            >
              <div class="mid_rules_h_line" v-for="item in rulesHCount" :key="item">
                <p>{{ (item - 1) * 100 }}</p>
                <div
                  class="mid_rules_h_line_mini"
                  :style="{
                    gridTemplateRows: `repeat(auto-fill, ${scale / 10}px)`,
                  }"
                >
                  <span v-for="v in 10" :key="v"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="mid_canvas_box" @scroll="handleScroll" ref="midCanvas">
            <div class="mid_canvas">
              <!--              <div-->
              <!--                class="mid_screen"-->
              <!--                :style="{ transform: `scale(${scaleVal})` }"-->
              <!--              >-->
              <!--                <mid></mid>-->
              <!--              </div>-->
              <div class="mid_screen" :style="{ zoom: scaleVal }">
                <mid></mid>
              </div>
              <!--              <div-->
              <!--                class="mid_screen"-->
              <!--                :style="{-->
              <!--                  height: `${900 * scaleVal}px`,-->
              <!--                  width: `${1440 * scaleVal}px`,-->
              <!--                }"-->
              <!--              >-->
              <!--                <mid></mid>-->
              <!--              </div>-->
              <!--              <div class="mid_screen">-->
              <!--                <mid></mid>-->
              <!--              </div>-->
            </div>
          </div>
        </div>
        <div class="mid_footer">
          <el-slider class="scale" v-model="scale" :step="10" show-input size="small" :min="50" :max="100" />
        </div>
      </div>
      <div class="right" :class="isOpenRight ? '' : 'close-right'">
        <right></right>
        <div class="right_is_open" @click="isOpenRight = !isOpenRight">
          {{ isOpenRight ? 'off' : 'on' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Left, Mid, Right, CtHeader } from './components/index'
  import SvgIcon from '@/components/svg-icon'
  export default {
    name: 'HomePage',
    components: { SvgIcon, Left, Mid, Right, CtHeader },
    props: {},
    data() {
      return {
        scale: 50,
        rulesWCount: 32,
        rulesHCount: 24,
        isOpenRight: true,
        isOpenLeft: true,
      }
    },
    computed: {
      scaleText() {
        return this.scale + '%'
      },
      scaleVal() {
        return this.scale / 100
      },
    },

    methods: {
      handleScroll() {
        this.$nextTick(() => {
          this.$refs.midRulesH.scrollTop = this.$refs.midCanvas.scrollTop
          this.$refs.midRulesW.scrollLeft = this.$refs.midCanvas.scrollLeft
        })
      },
    },
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>
