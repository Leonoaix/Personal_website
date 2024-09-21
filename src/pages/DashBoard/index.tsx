import '@Dashboard/Dashboard.css'
import { useState } from 'react';

let [sidepanel, setSidepanel] = useState(false);
function toggleSidepanel() {
  setSidepanel(!sidepanel);
}
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <button onClick={toggleSidepanel}>Toggle Side Panel</button>
        <h1>Dashboard</h1>
      </div>
      {sidepanel && (
        <div className="dashboard-sidepanel">
        <h2>Side Panel</h2>
      </div>
      )}
      <div className="dashboard-content">
        <p>Welcome to the dashboard!</p>
      </div>
    </div>
  );
}
export default Dashboard;
