import './RecentActivity.css'

export default function RecentActivity() {
  const activities = [
    { id: 1, user: 'Sarah Anderson', action: 'Placed an order', time: '2 hours ago', icon: '🛒' },
    { id: 2, user: 'John Smith', action: 'Completed payment', time: '4 hours ago', icon: '💳' },
    { id: 3, user: 'Emma Davis', action: 'Updated profile', time: '6 hours ago', icon: '👤' },
    { id: 4, user: 'Michael Brown', action: 'Sent feedback', time: '1 day ago', icon: '💬' },
    { id: 5, user: 'Lisa Johnson', action: 'Downloaded report', time: '2 days ago', icon: '📥' },
  ]

  return (
    <div className="recent-activity">
      <div className="activity-header">
        <h3>Recent Activity</h3>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-details">
              <p className="activity-user">{activity.user}</p>
              <p className="activity-action">{activity.action}</p>
            </div>
            <p className="activity-time">{activity.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
