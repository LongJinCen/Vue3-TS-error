import { defineComponent as _defineComponent } from 'vue'
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

interface Props {
  value?: number
}

export default _defineComponent({
  props: {
    value: { type: Number, required: false, default: 1 }
  } as unknown as undefined,
  setup(__props: {
  value?: number
}) {

const props = __props



console.log(props.value);

function test(value: number) {
  console.log(value);
}

// error
test(props.value)


return (_ctx: any,_cache: any) => {
  return (_openBlock(), _createElementBlock("div", null, _toDisplayString(__props.value), 1 /* TEXT */))
}
}

})