import Elm from './Main'

const container = document.querySelector('body')
if (container) {
  Elm.Main.embed(container)
}
