import React from "react";
import { Empty } from "antd";

import "./animal-details.css";

export function AnimalDetails({animal, onAnimalChange}) {
    if (animal === undefined) {
        return (
            <div className="animal-details-empty">
                <Empty description="Animal not selected"/>
            </div>
        );
    }
    const isAddMode = animal === null;

    function onFormFieldChange(e) {
        const element = e.target;
        onAnimalChange({
           ...animal,
            [element.name]: element.value
        });
    }

    return (
        <div className="animal-details">
            <form>
                {!isAddMode && <label>ID <input value={animal.id} type="text" readOnly/></label>}
                <label htmlFor="name">Name</label>
                <input value={!isAddMode && animal.name || ""}
                       name="name"
                       type="text"
                       onChange={onFormFieldChange}
                />
            </form>
        </div>
    )
}
