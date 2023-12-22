import createCache, { EmotionCache } from '@emotion/cache'

export function createEmotionCache(): EmotionCache {
  const cache = createCache({ key: 'css', prepend: true })
  cache.compat = true
  return cache
}
