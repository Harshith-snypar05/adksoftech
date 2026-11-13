import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/site'

export const alt = `${SITE.name} — software, AI and IT staffing in Hyderabad`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#ffffff',
          padding: '0 90px',
          borderBottom: '14px solid #FF6A13',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 680 }}>
          <div style={{ display: 'flex', fontSize: 26, fontWeight: 700, letterSpacing: 6, color: '#FF6A13', textTransform: 'uppercase' }}>
            Software · AI · Talent
          </div>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, color: '#0B2A5E', marginTop: 22, lineHeight: 1.05 }}>
            {SITE.name}
          </div>
          <div style={{ display: 'flex', fontSize: 38, color: '#475569', marginTop: 26, lineHeight: 1.3 }}>
            {SITE.tagline}
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#0B2A5E', marginTop: 40, fontWeight: 600 }}>
            HITEC City, Hyderabad, India
          </div>
        </div>
        <svg width="330" height="380" viewBox="0 0 330 380">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFB400" />
              <stop offset="0.55" stopColor="#FF6A13" />
              <stop offset="1" stopColor="#E5322D" />
            </linearGradient>
          </defs>
          <polygon points="10,10 320,190 10,370" fill="url(#g)" />
          <polygon points="10,250 175,190 10,370" fill="#1E88E5" />
        </svg>
      </div>
    ),
    size,
  )
}
