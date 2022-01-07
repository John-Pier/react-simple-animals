import React from "react";


export function AnimalDetails({animal}) {
    if (!animal) {
        return <div>Animal not selected</div>;
    }

    return (
        <div>
            <form>
                <input value={animal.id} type="text" readOnly/>
                <input value={animal.name} type="text"/>
            </form>
        </div>
    )
}
