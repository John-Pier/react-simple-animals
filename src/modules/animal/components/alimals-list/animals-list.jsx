import React from "react";
import { Button } from 'antd';
import { AnimalsListItem } from "../animals-list-item/animals-list-item";
import { Collapse } from 'antd';

const { Panel } = Collapse;

export function AnimalsList({ animals }) {
    return (
        <div className={'app__animals-list'}>
            <div>Animals</div>
            <div className={'animals-list__header'}>
                <Button className={'app_button _default'}>Hide Cats</Button>
                <Button className={'app_button _main'}>Add Animal</Button>
            </div>
            <div>
                {animals.map(animal => <div key={animal.id}>{animal.name}</div>)}
            </div>
            {/*<Collapse className={'animals-list__inner'}>*/}
            {/*    {Array(10).fill(0).map((value, key) => <Panel key={key}> <AnimalsListItem key={key} animal={"animals " + Math.random()}/></Panel>)}*/}
            {/*</Collapse>*/}
        </div>
    )
}