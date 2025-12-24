import './ChartCard.css'

export default function ChartCard({ title }) {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>{title}</h3>
        <div className="chart-options">
          <button>📅 This Month</button>
        </div>
      </div>
      <div className="chart-body">
        <div className="simple-chart">
          <svg viewBox="0 0 400 200" className="chart-svg">
            {/* Simple bar chart representation */}
            <rect x="20" y="120" width="30" height="60" fill="#2a5298" opacity="0.7" />
            <rect x="60" y="100" width="30" height="80" fill="#2a5298" opacity="0.8" />
            <rect x="100" y="80" width="30" height="100" fill="#2a5298" opacity="0.9" />
            <rect x="140" y="90" width="30" height="90" fill="#2a5298" opacity="0.85" />
            <rect x="180" y="70" width="30" height="110" fill="#2a5298" opacity="0.95" />
            <rect x="220" y="60" width="30" height="120" fill="#2a5298" opacity="1" />
            <rect x="260" y="85" width="30" height="95" fill="#2a5298" opacity="0.9" />
            <rect x="300" y="75" width="30" height="105" fill="#2a5298" opacity="0.92" />
          </svg>
        </div>
      </div>
      <div className="chart-footer">
        <p>Showing data for the current period</p>
      </div>
    </div>
  )
}
