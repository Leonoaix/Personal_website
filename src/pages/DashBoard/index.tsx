import React from 'react';
import { Home, DollarSign, Calendar, ShoppingCart, Package, Book, Users, Layout, Mail, PenTool, Plus, Search } from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo-container">
          <img src={require("../images/logo.png")} alt="Logo" className="logo" />
        </div>
        <nav className="main-nav">
          <a href="#" className="nav-item active"><Home size={20} /> Dashboard</a>
          <a href="#" className="nav-item"><DollarSign size={20} /> Getting Paid</a>
          <a href="#" className="nav-item"><Calendar size={20} /> Booking Calendar</a>
          <a href="#" className="nav-item"><ShoppingCart size={20} /> Sales</a>
          <a href="#" className="nav-item"><Package size={20} /> Catalog</a>
          <a href="#" className="nav-item"><Book size={20} /> Online Programs</a>
          <a href="#" className="nav-item"><PenTool size={20} /> Blog</a>
          <a href="#" className="nav-item"><Users size={20} /> Groups</a>
          <a href="#" className="nav-item"><Layout size={20} /> Apps</a>
          <a href="#" className="nav-item"><Layout size={20} /> Site & Mobile App</a>
          <a href="#" className="nav-item"><Mail size={20} /> Inbox</a>
          <a href="#" className="nav-item"><Users size={20} /> Customers & Leads</a>
        </nav>
        <button className="quick-add-btn"><Plus size={20} /> Quick Add</button>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1>Welcome back to your Dashboard</h1>
          <div className="header-actions">
            <button className="upgrade-btn">Upgrade</button>
            <div className="search-container">
              <Search size={20} />
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
              <li className="setup-step completed">
                <span className="step-title">Update your site type</span>
                <span className="step-check">✓</span>
              </li>
              <li className="setup-step">
                <span className="step-title">Connect a custom domain</span>
                <button className="step-action">Start</button>
              </li>
              <li className="setup-step completed">
                <span className="step-title">Review your generated menu</span>
                <span className="step-check">✓</span>
              </li>
              <li className="setup-step completed">
                <span className="step-title">Finish setting up your services</span>
                <span className="step-check">✓</span>
              </li>
              <li className="setup-step">
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