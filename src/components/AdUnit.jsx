import { useEffect, useRef } from 'react'

/**
 * AdSense Ad Unit Component
 * ─────────────────────────
 * HOW TO USE:
 * 1. Uncomment the AdSense <script> tag in index.html
 * 2. Replace "ca-pub-XXXXXXXXXX" with your Publisher ID
 * 3. Replace adSlot prop value with your actual Ad Unit slot ID
 *
 * Example usage:
 *   <AdUnit adSlot="1234567890" />
 *   <AdUnit adSlot="9876543210" format="horizontal" />
 *
 * format options: "auto" | "horizontal" | "vertical" | "rectangle"
 */
export default function AdUnit({
  adSlot = 'XXXXXXXXXX',          // ← your Ad Unit slot ID
  adClient = 'ca-pub-XXXXXXXXXX', // ← your Publisher ID (or set once globally)
  format = 'auto',
  fullWidthResponsive = true,
  style = {},
}) {
  const adRef = useRef(null)

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({})
      }
    } catch (e) {
      // AdSense not loaded — ignore in development
    }
  }, [])

  return (
    <div className="ad-unit" style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  )
}
