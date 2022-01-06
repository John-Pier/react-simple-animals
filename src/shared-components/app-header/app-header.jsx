import React from "react";

import "./app-header.css"

export function AppHeader({appName, appLinks = []}) {
    return (
        <header className={'app-header'}>
            <div className={'app-header__name'}>
                {appName}
            </div>
            <div className={'app-header__links'}>
                {appLinks.map(link => {
                    return (
                        <div className={'app-header__links-item'}>
                            {link}
                        </div>
                    );
                })}
            </div>
        </header>
    );
}
