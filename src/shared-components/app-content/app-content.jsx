import React from "react";

import "./app-content.css";

export function AppContent(props) {
    return (
        <section className="app-content">
            <main className="app-content__inner">
                {props.children}
            </main>
        </section>
    )
}
