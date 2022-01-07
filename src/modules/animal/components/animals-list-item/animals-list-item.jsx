import React from "react";

export function AnimalsListItem({ animal }) {
    return (
        <div className={'app__animals-list-item'}>
            {animal?.name}
        </div>
    )
}
