import React from "react";

import "./app-content.css";

export function AppContent({ content: Content }) {
    return (
        <section>
            <main>
                <Content/>
            </main>
        </section>
    )
}
