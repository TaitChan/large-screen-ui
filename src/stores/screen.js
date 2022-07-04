import { defineStore } from 'pinia'
import { modelList } from '@/views/homepage/mock'
export const useScreenStore = defineStore('screen', {
  state: () => ({
    screenWidth: 1440,
    screenHeight: 900,
    // bgColor: '#3d8ab6',
    // bgColor: '#1b9aee',
    bgColor: '#4C81E3',
    // bgColor: '#F5FAFE',
    // bgColor: '#f0f9ff',
    // bgColor: '#fff',
    layoutColor: '#fff',
    layoutBorder: true,
    dragstartDom: {},
    modelList,
  }),
  getters: {},
  actions: {
    setOption(option) {
      this.modelList[0].ref = 'aaa'
      this.modelList[0].option = option
    },
    setDragstartDom(dom) {
      this.dragstartDom = dom
    },
  },
})
