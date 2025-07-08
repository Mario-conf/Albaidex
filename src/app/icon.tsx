import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// This is a placeholder to allow the static favicon in layout.tsx to be used.
// The presence of this file can override the static icon, so we return a transparent image.
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', background: 'transparent' }} />
    ),
    {
      ...size,
    }
  )
}
