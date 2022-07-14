<template>
  <div
    :style="{ background: bgColor }"
    style="position: relative; height: 100%; width: 100%"
    @click="clearActive"
    @drop="handleDrop"
    @dragover.prevent
  >
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
        isMove: false,
        isCircleMove: false,
      }
    },
    watch: {},

    mounted() {
      document.onkeydown = (e) => {
        if (this.activeId && e.code === 'Backspace') {
          const index = this.editItemList.findIndex((v) => v.id === this.activeId)
          this.editItemList.splice(index, 1)
        }
      }
    },
    methods: {
      handleDrop(event) {
        const { cardId, w, h } = this.dragstartDom
        const id = new Date().getTime()
        this.editItemList.push({
          id,
          cardId,
          w,
          h,
          x: event.offsetX,
          y: event.offsetY,
        })
        this.activeId = id
      },
      clearActive() {
        this.activeId = ''
        console.log(this.editItemList)
      },
    },
    unmounted() {
      document.onkeydown = null
    },
  }
</script>

<style lang="scss" scoped></style>
