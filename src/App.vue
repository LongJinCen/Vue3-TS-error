<template>
  <div>
    {{ value }}
  </div>
</template>
<script lang="ts" setup>

interface Props {
  value?: number
}
const props = withDefaults(defineProps<Props>(), {
  value: 1
})

console.log(props.value);

function test(value: number) {
  console.log(value);
}

// error
test(props.value)

</script>
