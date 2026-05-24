import React from 'react';
import { createRoot } from 'react-dom/client';
import DashboardRoutes from './routes/DashboardRoutes';
const root = createRoot(document.getElementById('dashboard-root')!);

root.render(<DashboardRoutes />);
