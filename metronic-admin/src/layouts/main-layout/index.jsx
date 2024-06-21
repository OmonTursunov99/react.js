import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/auth">User</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>Main Footer</footer>
        </div>
    );
};

export default MainLayout;
