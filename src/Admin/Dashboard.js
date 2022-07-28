import React from 'react';
import Sidebar from '../Components/Sidebar';

function Dashboard(props) {
    return (
        <div className="container-fluid vh-100">
            <div className="row">
                <Sidebar />
                <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2 text-muted">Dashboard</h1>
                    </div>
                    
                </main>
            </div>
        </div>

    );
}

export default Dashboard;