import { defineStore } from 'pinia'
export const useScreenStore = defineStore('screen', {
  state: () => ({
    screenWidth: 1440,
    screenHeight: 900,
    scale: 50,
    bgColor: '#F5FAFE',
    layoutColor: 'rgba(255,255,255,0)',
    layoutBorder: false,
    dragstartDom: {},
  }),
  getters: {},
  actions: {
    setDragstartDom(dom) {
      this.dragstartDom = dom
    },
  },
})
