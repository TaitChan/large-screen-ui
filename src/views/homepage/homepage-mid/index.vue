<template>
  <div :style="{ background: bgColor }" style="position: relative; height: 100%; width: 100%" @click="clearActive">
    <!--    拖动组件-->
    <homepage-drag-item
      v-for="(item, index) in editItemList"
      :key="item.id"
      v-model="editItemList[index]"
      v-model:is-move="isMove"
      @click.stop="activeId = item.id"
      :is-active="activeId === item.id"
      :scale="scale / 100"
      :class="`${layoutBorder ? 'layout-border' : ''}`"
      :style="{
        background: `${layoutColor}`,
      }"
    >
      <!--      展示的子组件-->
      <component :is="item.cardId" :key="item.id"></component>
      <!--      xy,wh位置展示组件-->
      <homepage-location
        v-if="activeId === item.id && (isMove || isCircleMove)"
        v-model="editItemList[index]"
      ></homepage-location>
      <!--      缩放组件-->
      <homepage-resize
        v-if="activeId === item.id"
        v-model="editItemList[index]"
        v-model:is-move="isCircleMove"
        :scale="scale / 100"
      ></homepage-resize>
    </homepage-drag-item>
  </div>
</template>

<script>
  import { useScreenStore } from '@/stores/screen'
  import { storeToRefs } from 'pinia'
  import { domList } from '@/views/homepage/mock'
  import HomepageResize from '@/views/homepage/homepage-mid/homepage-resize'
  import HomepageLocation from '@/views/homepage/homepage-mid/homepage-location'
  import HomepageDragItem from '@/views/homepage/homepage-mid/homepage-drag-item'

  export default {
    name: 'homepage-mid',
    components: { HomepageDragItem, HomepageLocation, HomepageResize },
    props: {},
    setup() {
      const store = useScreenStore()
      const { scale, bgColor, layoutColor, layoutBorder, dragstartDom } = storeToRefs(store)
      return {
        scale,
        bgColor,
        layoutColor,
        layoutBorder,
        dragstartDom,
      }
    },
    data() {
      return {
        activeId: '',
        editItemList: domList,
        offsetX: 0,
        offsetY: 0,
        isMove: false,
        isCircleMove: false,
      }
    },
    watch: {},
    mounted() {},
    methods: {
      clearActive() {
        this.activeId = ''
        console.log(this.editItemList)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
