// 用于构建时的入口
// import ElCollapseTransition from './transitions/collapse-transition'
// Basic
import { ElButton } from './components/Button'
import ElScrollbar from '../packages/scrollbar'

import { version } from '../package.json'

const components = [ElButton, ElScrollbar]

const install = (app, opts = {}) => {
  components.forEach((component) => {
    app.use(component)
  })
}

const element3 = {
  version,
  install
}

export { version, ElButton, ElScrollbar, install }

export default element3
