<template>
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
        <div class="mid_screen" :style="{ zoom: scaleVal }">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
  <div class="mid_footer">
    <el-slider class="scale" v-model="scale" :step="10" show-input size="small" :min="50" :max="100" />
  </div>
</template>

<script>
  import SvgIcon from '@/components/svg-icon'
  import { useScreenStore } from '@/stores/screen'
  import { storeToRefs } from 'pinia'
  export default {
    name: 'homepage-rules',
    components: { SvgIcon },
    props: {},
    setup() {
      const store = useScreenStore()
      const { scale } = storeToRefs(store)
      return { scale }
    },
    data() {
      return {
        rulesWCount: 32,
        rulesHCount: 24,
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
  .mid_footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 30px;
    background: #f8f8f8;
    padding-right: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    .scale {
      width: 400px;
      transform: scale(0.6);
      transform-origin: right center;
    }
  }
  .mid_rules {
    flex: 1;
    display: grid;
    overflow: hidden;
    background: #e5e5e5;
    grid-template-columns: 20px calc(100% - 20px);
    grid-template-rows: 20px calc(100% - 20px);
    .mid_rules_icon {
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.2em;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      //background: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mid_rules_w_box {
      width: 100%;
      height: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      &::-webkit-scrollbar {
        display: none;
      }
      .mid_rules_w {
        width: 1600px;
        padding-left: 30px;
        display: grid;
        grid-template-columns: repeat(auto-fill, 100px);
        grid-template-rows: 20px;
        .mid_rules_w_line {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-left: 1px solid rgba(0, 0, 0, 0.2);
          & > p {
            padding-left: 2px;
            margin: 0;
            transform: scale(0.8);
            transform-origin: left bottom;
            color: rgba(0, 0, 0, 0.5);
          }
          .mid_rules_w_line_mini {
            width: 100px;
            margin-left: -1px;
            display: grid;
            grid-template-columns: repeat(auto-fill, 10px);
            & > span {
              display: inline-block;
              width: 1px;
              background: rgba(0, 0, 0, 0.2);
              height: 5px;
              &:first-child {
                background: none;
              }
            }
          }
        }
      }
    }
    .mid_rules_h_box {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      &::-webkit-scrollbar {
        display: none;
      }
      .mid_rules_h {
        height: 1200px;
        padding-top: 30px;
        display: grid;
        grid-template-rows: repeat(auto-fill, 100px);
        grid-template-columns: 20px;
        .mid_rules_h_line {
          //padding-top: 4px;
          border-top: 1px solid rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: flex-end;
          position: relative;
          & > p {
            color: rgba(0, 0, 0, 0.5);
            position: absolute;
            right: 6px;
            top: -12px;
            margin: 0;
            transform: scale(0.8) rotate(-90deg);
            transform-origin: bottom right;
            //transform: scale(0.8);
          }
          .mid_rules_h_line_mini {
            height: 100px;
            margin-top: -1px;
            display: grid;
            grid-template-rows: repeat(auto-fill, 10px);
            & > span {
              height: 1px;
              background: rgba(0, 0, 0, 0.2);
              width: 5px;
              &:first-child {
                background: none;
              }
            }
          }
        }
      }
    }
    .mid_canvas_box {
      height: 100%;
      width: 100%;
      overflow: scroll;
      scrollbar-width: none;
      .mid_canvas {
        height: 1200px;
        width: 1600px;
        padding-top: 30px;
        padding-left: 30px;
        .mid_screen {
          height: 900px;
          width: 1440px;
          background: #041238;
          transform-origin: left top;
          box-shadow: rgb(0 0 0 / 50%) 0 0 30px 0;
        }
      }
    }
  }
</style>
