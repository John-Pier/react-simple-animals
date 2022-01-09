import React from "react";
import { Menu, Switch } from "antd";

import "./animals-list.css"

export function AnimalsList({ animals, onItemSelect }) {
    return (
        <div className="animals-list">
            <div className="animals-list__header">
                <div className="animals-list__header-title">Animals</div>
                <div>
                    <Switch /> Hide Cats
                </div>
            </div>
            <div className="animals-list">
                <Menu onSelect={onItemSelect}>
                    {animals.map(animal => <Menu.Item key={animal.id}>{animal.name}</Menu.Item>)}
                </Menu>
            </div>
        </div>
    )
}
