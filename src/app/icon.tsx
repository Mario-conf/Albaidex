import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffae00',
          borderRadius: '6px',
        }}
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="none"
            style={{ width: '85%', height: '85%' }}
        >
            <path d="M403.455 256.417C403.455 183.91 356.12 119.58 277.585 102.046C271.742 100.864 263.858 97.054 260.474 91.547C256.733 85.457 256.162 77.986 256.162 72C256.162 77.986 255.591 85.457 251.85 91.547C248.466 97.054 240.581 100.864 234.738 102.046C156.204 119.58 108.869 183.91 108.869 256.417C108.869 349.503 174.521 424 256.162 424C337.803 424 403.455 349.503 403.455 256.417Z" fill="white"/>
            <path d="M222 234L186 256L222 278" stroke="#ffae00" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M290 234L326 256L290 278" stroke="#ffae00" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
