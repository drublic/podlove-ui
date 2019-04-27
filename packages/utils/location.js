import queryString from 'query-string'
import { toPlayerTime } from './time'

export const locationParams = queryString.parse(window.location.search)

const parseParameters = parameters => {
  const parsed = {}

  if (parameters.t) {
    const [start, stop] = parameters.t.split(',')
    parsed.starttime = typeof start === 'string' ? toPlayerTime(start) : undefined
    parsed.stoptime = typeof stop === 'string' ? toPlayerTime(stop) : undefined
  }

  if (parameters.episode) {
    parsed.episode = parameters.episode
  }

  if (parameters.autoplay) {
    parsed.autoplay = true
  }

  return parsed
}

export const urlParameters = { ...parseParameters(locationParams) }