# Vue.js 学习笔记

## Vue 3 新特性

### Composition API
```javascript
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const double = computed(() => count.value * 2)
    
    onMounted(() => {
      console.log('组件已挂载')
    })
    
    return {
      count,
      double
    }
  }
}