import './Dashboard.css'
import { useState } from 'react';

function Dashboard() {
  const [sidepanel, setSidepanel] = useState(false);

  function toggleSidepanel() {
    setSidepanel(!sidepanel);
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <button onClick={toggleSidepanel} className="Toggle-Side-Panel"></button>
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-main-content">
        {sidepanel && (
          <div>
            <div className="sidepanel-placeholder"></div>
            <div className="dashboard-sidepanel">
              <h2>Side Panel</h2>
            </div>
          </div>
        )}
        <div className="dashboard-content">
          <p>Welcome to the dashboard!</p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
