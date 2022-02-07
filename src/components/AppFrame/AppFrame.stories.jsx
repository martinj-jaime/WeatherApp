import React from 'react';
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

// import 

export default {
    title: "App Frame Render",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem impsun
        </AppFrame>
    </Router>
)