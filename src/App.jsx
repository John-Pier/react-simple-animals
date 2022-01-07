import React from "react";
import { AppFooter } from "./shared-components/app-footer/app-footer";
import { AppHeader } from "./shared-components/app-header/app-header";
import { AppContent } from "./shared-components/app-content/app-content";
import { AnimalModule } from "./modules/animal/animal-module";

import "./app.css";

function App() {
    return (
        <React.Fragment>
            <AppHeader appName={"Animals List"}/>
            <AppContent>
                <AnimalModule/>
            </AppContent>
            <AppFooter email="test@yexy.js"/>
        </React.Fragment>
    );
}

export default App;
