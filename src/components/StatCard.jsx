import './StatCard.css'

export default function StatCard({ icon, title, value, change, color }) {
  return (
    <div className={`stat-card stat-${color}`}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <p className="stat-title">{title}</p>
        <p className="stat-value">{value}</p>
        <p className="stat-change">{change} from last month</p>
      </div>
    </div>
  )
}
