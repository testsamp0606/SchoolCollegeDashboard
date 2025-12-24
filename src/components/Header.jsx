import './Header.css'

export default function Header({ onMenuClick }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>
          ☰
        </button>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      
      <div className="header-right">
        <div className="notification">
          <span className="bell">🔔</span>
          <span className="badge">3</span>
        </div>
        <div className="user-info">
          <img src="/assets/img/profile-img.jpg" alt="User" className="user-avatar" />
          <div className="user-details">
            <p className="user-name">John Doe</p>
            <p className="user-role">Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}
