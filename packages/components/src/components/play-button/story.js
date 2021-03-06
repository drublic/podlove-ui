import { select, color, text, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import PlayButton from '.'

import * as defaultVariables from 'defaults'

const types = { loading: 'loading', play: 'play', pause: 'pause', restart: 'restart' }

export default () => ({
  components: { PlayButton },
  props: {
    type: {
      default: select('type', types, 'loading')
    },
    color: {
      default: color('color', defaultVariables.color)
    },
    background: {
      default: color('background', defaultVariables.background)
    },
    label: {
      default: text('label', '')
    },
    size: {
      default: number('size', 50)
    }
  },
  template: `
    <play-button
      :type="type"
      :color="color"
      :background="background"
      :label="label"
      :size="size"
      @click="action"
    >
    </play-button>`,
  methods: { action: action('@click') }
})
