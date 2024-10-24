import React, { useState } from 'react';
import { Home, DollarSign, Calendar, ShoppingCart, Package, Book, Users, Layout, Mail, PenTool, Plus, Search, ChevronRight, ChevronLeft } from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="dashboard">
      <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">

          {/* Image Path Updated */}
          <img src="/src/pages/Dashboard/images/logo.png" alt="Logo" className="logo" />

          <button className="toggle-sidebar" onClick={toggleSidebar}>
            {isSidebarCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
        </div>
        <nav className="main-nav">
          <a href="#" className="nav-item active"><Home size={24} /> <span>Dashboard</span></a>
          <a href="#" className="nav-item"><DollarSign size={24} /> <span>Getting Paid</span></a>
          <a href="#" className="nav-item"><Calendar size={24} /> <span>Booking Calendar</span></a>
          <a href="#" className="nav-item"><ShoppingCart size={24} /> <span>Sales</span></a>
          <a href="#" className="nav-item"><Package size={24} /> <span>Catalog</span></a>
          <a href="#" className="nav-item"><Book size={24} /> <span>Online Programs</span></a>
          <a href="#" className="nav-item"><PenTool size={24} /> <span>Blog</span></a>
          <a href="#" className="nav-item"><Users size={24} /> <span>Groups</span></a>
          <a href="#" className="nav-item"><Layout size={24} /> <span>Apps</span></a>
          <a href="#" className="nav-item"><Layout size={24} /> <span>Site & Mobile App</span></a>
          <a href="#" className="nav-item"><Mail size={24} /> <span>Inbox</span></a>
          <a href="#" className="nav-item"><Users size={24} /> <span>Customers & Leads</span></a>
        </nav>
        <div className="sidebar-footer">
          <button className="quick-add-btn"><Plus size={24} /> <span>Quick Add</span></button>
          <button className="design-site-btn"><PenTool size={24} /> <span>Design Site</span></button>
        </div>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1>Welcome back to your Dashboard</h1>
          <div className="header-actions">
            <button className="upgrade-btn">Upgrade</button>
            <div className="search-container">
              <Search size={24} />
              <input type="search" placeholder="Search for tools, apps, help & more..." />
            </div>
          </div>
        </header>
        <div className="dashboard-cards">
          <div className="info-card">
            <div className="info-item">
              <span className="label">Plan:</span>
              <span>Free plan</span>
              <a href="#" className="link">Compare Plans</a>
            </div>
            <div className="info-item">
              <span className="label">Domain:</span>
              <span>https://your-site.com</span>
              <a href="#" className="link">Connect Domain</a>
            </div>
            <div className="info-item">
              <span className="label">Business Email:</span>
              <span>Not set up</span>
              <a href="#" className="link">Connect</a>
            </div>
            <button className="edit-btn">Edit Business Info</button>
          </div>
          <div className="setup-card">
            <h2>Let's set up your personal portfolio</h2>
            <div className="progress-bar">
              <div className="progress" style={{width: '60%'}}></div>
            </div>
            <ul className="setup-steps">
              <li className="setup-step completed" key="update-site-type">
                <span className="step-title">Update your site type</span>
                <span className="step-check">✓</span>
              </li>
              <li className="setup-step" key="connect-domain">
                <span className="step-title">Connect a custom domain</span>
                <button className="step-action">Start</button>
              </li>
              <li className="setup-step completed" key="review-menu">
                <span className="step-title">Review your generated menu</span>
                <span className="step-check">✓</span>
              </li>
              <li className="setup-step completed" key="finish-services">
                <span className="step-title">Finish setting up your services</span>
                <span className="step-check">✓</span>
              </li>
              <li className="setup-step" key="setup-payment-methods">
                <span className="step-title">Set up payment methods</span>
                <button className="step-action">Start</button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
