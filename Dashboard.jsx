import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const metrics = {
        revenue: 120000,
        users: 4500,
        conversionRate: 3.5,
        performance: 98,
    };

    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <div className='kpi-container'>
                <div className='kpi-card'>
                    <h2>Revenue</h2>
                    <p>${metrics.revenue}</p>
                </div>
                <div className='kpi-card'>
                    <h2>Users</h2>
                    <p>{metrics.users}</p>
                </div>
                <div className='kpi-card'>
                    <h2>Conversion Rate</h2>
                    <p>{metrics.conversionRate}%</p>
                </div>
                <div className='kpi-card'>
                    <h2>Performance</h2>
                    <p>{metrics.performance}%</p>
                </div>
            </div>
            {/* Sample Chart Component */}
            <div className='chart-container'>
                {/* Line Chart goes here */}
                <h3>Trends</h3>
                <p>[Insert Line Chart Component here]</p>
            </div>
        </div>
    );
};

export default Dashboard;