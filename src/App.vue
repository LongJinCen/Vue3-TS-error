<template>
  <span>
    {{ hintMsg }}
  </span>
  <span>{{ iconName }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  hintMsg: string;
  iconName: string;
}

withDefaults(defineProps<Props>(), {
  hintMsg: '',
  iconName: 'question'
})

const hint = ref(null)

</script>