import insane from 'insane'
import merge from 'lodash.merge'

const _sanitizeDir = (el, { value, modifiers }) => {
  el.innerHTML = insane(value, merge({}, opts, insane.defaults), modifiers.strict)
}

const sanitizeDirective = {
  bind: _sanitizeDir,
  update: _sanitizeDir
}

function install(Vue, opts = {}){
  Vue.prototype.$sanitizeHTML = function(html, options = {}, strict = false) {
    return insane(html, merge(options, opts, insane.defaults), strict)
  }

  Vue.directive('sanitize-html', sanitizeDirective)
}

export default {
  install
}

export const insaneDirective = sanitizeDirective