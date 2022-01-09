import React from "react";
import { Empty } from "antd";

import "./animal-details.css";

export function AnimalDetails({animal}) {
    if (!animal) {
        return (
            <div className="animal-details-empty">
                <Empty description="Animal not selected"/>
            </div>
        );
    }

    return (
        <div className="animal-details">
            <form>
                <input value={animal.id} type="text" readOnly/>
                <input value={animal.name} type="text"/>
            </form>
        </div>
    )
}
