import React from "react";
import "./App.css";
import { AnimalsList } from "./components/alimals-list/animals-list";
import { AppFooter } from "./shared-components/app-footer/app-footer";
import { AppHeader } from "./shared-components/app-header/app-header";
import { AppContent } from "./shared-components/app-content/app-content";

function App() {
    return (
        <React.Fragment>
          <AppHeader appName={"Animals List"}/>
            <AppContent>
                <AnimalsList/>
            </AppContent>
            <AppFooter/>
        </React.Fragment>
    );
}

export default App;
