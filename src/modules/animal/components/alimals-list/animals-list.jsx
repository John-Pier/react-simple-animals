import React from "react";
import { Menu, Switch } from "antd";

export function AnimalsList({ animals, onItemSelect }) {
    return (
        <div className={'app__animals-list'}>
            <div>Animals</div>
            <div className={'animals-list__header'}>
                <Switch /> Hide Cats
                {/*<Button className={'app_button _default'}>Hide Cats</Button>*/}
                {/*<Button className={'app_button _main'}>Add Animal</Button>*/}
            </div>
            <div>
                <Menu onSelect={onItemSelect}>
                    {animals.map(animal => <Menu.Item key={animal.id}>{animal.name}</Menu.Item>)}
                </Menu>
            </div>
        </div>
    )
}
