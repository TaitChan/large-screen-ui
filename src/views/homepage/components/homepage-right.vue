<template>
  <div class="right-container">
    <div class="page-setting">页面设置</div>
    <el-form>
      <el-form-item label="屏幕宽度">
        <el-input-number v-model="screenWidth" />
      </el-form-item>
      <el-form-item label="屏幕高度">
        <el-input-number v-model="screenHeight" />
      </el-form-item>
      <el-form-item label="背景颜色">
        <el-color-picker v-model="bgColor" show-alpha />
      </el-form-item>
      <el-form-item label="模块颜色">
        <el-color-picker v-model="layoutColor" show-alpha />
      </el-form-item>
      <el-form-item label="模块边框">
        <el-switch v-model="layoutBorder"></el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { storeToRefs } from 'pinia'
  import { useScreenStore } from '@/stores/screen'
  export default {
    name: 'HomepageRight',
    setup() {
      const store = useScreenStore()
      const { screenWidth, screenHeight, bgColor, layoutColor, layoutBorder } = storeToRefs(store)
      return { screenWidth, screenHeight, bgColor, layoutColor, layoutBorder }
    },
  }
</script>

<style lang="scss" scoped>
  .page-setting {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .right-container {
    form {
      padding: 10px;
    }
  }
</style>
