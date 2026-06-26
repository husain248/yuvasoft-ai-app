'use client'

export default function PreLoader() {
  return (
    <div className="preloader">
      <div className="spinner-wrap">
        <div className="preloader-logo">
          <img src="/assets/images/yuva-logo-icon.png" alt="Logo" className="img-fluid" />
        </div>
        <div className="spinner"></div>
      </div>
    </div>
  )
}
