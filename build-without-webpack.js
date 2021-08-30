const { compileScript, parse } = require('@vue/compiler-sfc')
const fs = require('fs')

const fileContent = fs.readFileSync('./src/App.vue')

const { descriptor } = parse(fileContent.toString())

const result = compileScript(descriptor, {
    id: 'xx',
    inlineTemplate: true
})

fs.writeFileSync('./App-compiled.ts', result.content)


