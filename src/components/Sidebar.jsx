import './Sidebar.css'

export default function Sidebar({ isOpen }) {
  const menuItems = [
    { icon: '🏠', label: 'Dashboard', href: '#' },
    { icon: '👥', label: 'Users', href: '#' },
    { icon: '📊', label: 'Reports', href: '#' },
    { icon: '⚙️', label: 'Settings', href: '#' },
    { icon: '📈', label: 'Analytics', href: '#' },
    { icon: '📝', label: 'Pages', href: '#' },
    { icon: '🔐', label: 'Security', href: '#' },
  ]

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2>NiceAdmin</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <a key={index} href={item.href} className="nav-item">
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
