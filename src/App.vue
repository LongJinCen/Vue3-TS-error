<template>
  <div ref="hint">
    {{ props.value }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

interface Props {
  value?: number
}
const props = withDefaults(defineProps<Props>(), {
  value: 1
})

const hint = ref()

</script>
