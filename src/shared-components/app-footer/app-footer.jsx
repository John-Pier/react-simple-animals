import React from "react";

import "./app-footer.css";

export function AppFooter({ email }) {
    return (
        <footer className={'app-footer'}>
            <div>{email}</div>
        </footer>
    )
}
