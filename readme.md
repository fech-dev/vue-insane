# vue-insane
Vue plugin for [insane](https://github.com/bevacqua/insane) sanitizer

## Usage
```
  npm install vue-insane
```

```
  yarn add vue-insane
```

Install as plugin, will install the instance method `$sanitizeHTML()` and the `v-sanitize-html` directive.
```js
import Vue from 'vue'
import VueInsanePlugin from 'vue-insane'

Vue.use(VueInsanePlugin, {
  .../*insane options*/
})


//only directive 
import { insaneDirective } from 'vue-insane'
Vue.directive('sanitize-html', insaneDirective)
```

## Usage on components
```vue
<template>
  <div>
    <!-- As method -->
    <p v-html="$sanitizeHTML(content)" />

    <!-- As Directive -->
    <p v-sanitize-html="content" />

    <!-- Set the 'strict' option to true -->
    <p v-sanitize-html.strict="content" />
  </div>
</template>
<script>
export default {
  data(){
    return {
      content: `<div><p>Hello World!</p></div>`
    }
  }
}
</script>
```

## `$sanitizeHTML(html, options, strict)`
| param | type | description |
|------|-------|-------------|
| html | `string` | The HTML string to sanitize |
| options | `object` |  The insane's options object. It will be merged with the options defined in the plugin registration. |
| strict | `boolean` | The strict param of insane function.|
