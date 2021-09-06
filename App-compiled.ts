import { defineComponent as _defineComponent } from 'vue'
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

import { ref } from "@vue/reactivity";

interface Props {
  value?: number
}

export default /*#__PURE__*/_defineComponent({
  props: {
    value: { type: Number, required: false, default: 1 }
  },
  setup(__props: any) {

const props = __props as { value: number }


const hint = ref()


return (_ctx: any,_cache: any) => {
  return (_openBlock(), _createElementBlock("div", {
    ref: (_value, _refs) => {
      _refs['hint'] = _value
      hint.value = _value
    }
  }, _toDisplayString(props.value), 513 /* TEXT, NEED_PATCH */))
}
}

})