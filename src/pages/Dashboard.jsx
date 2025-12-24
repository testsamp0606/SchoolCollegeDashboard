import './Dashboard.css'
import StatCard from '../components/StatCard'
import ChartCard from '../components/ChartCard'
import RecentActivity from '../components/RecentActivity'

export default function Dashboard() {
  return (
    <main className="dashboard">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p className="subtitle">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <StatCard 
          icon="📊" 
          title="Total Sales" 
          value="$45,231" 
          change="+12.5%" 
          color="blue"
        />
        <StatCard 
          icon="👥" 
          title="Total Users" 
          value="2,854" 
          change="+4.3%" 
          color="green"
        />
        <StatCard 
          icon="📈" 
          title="Revenue" 
          value="$12,540" 
          change="+8.2%" 
          color="purple"
        />
        <StatCard 
          icon="💬" 
          title="New Orders" 
          value="834" 
          change="+2.1%" 
          color="orange"
        />
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <ChartCard title="Sales Overview" />
        <ChartCard title="Traffic Analytics" />
      </div>

      {/* Recent Activity */}
      <RecentActivity />
    </main>
  )
}
