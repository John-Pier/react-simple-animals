import React from "react";
import { AnimalsList } from "./components/alimals-list/animals-list";
import { animalsService } from "../../services/animals.service";
import { AnimalDetails } from "./components/animal-details/animal-details";
import { Button } from "antd";

import "./animal-module.css";

const buttonTypeIdMap = {
    CANCEL: "cancel",
    SAVE: "save",
    NEW: "new"
};

export class AnimalModule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
            activeId: undefined,
        };
    }

    componentDidMount() {
        animalsService.fetchData()
            .then(data => {
                this.setState(() => {
                    return {
                        animals: data,
                    };
                });
            });
    }

    onItemSelect = ({ key }) => {
        this.setState(() => {
            return {
                activeId: key,
            };
        });
    };

    onAnimalUpsert = animal => {
        if (animal) {
            const animalWithId = {
                ...animal,
                id: animal.id ?? `${Math.random() * 100}`
            };
            this.setState(state => {
                const filtered = state.animals.filter(it => it.id !== animal?.id);
                filtered.unshift(animalWithId);
                return {
                    animals: filtered,
                    activeId: animalWithId.id,
                };
            });
        }
    }

    onButtonClickHandler(name) {
        this.setState(() => {
            switch (name) {
            case buttonTypeIdMap.NEW:
                return {
                    activeId: null,
                };
            case buttonTypeIdMap.SAVE:
                return {
                    activeId: undefined,
                };
            case buttonTypeIdMap.CANCEL:
                return {
                    activeId: undefined,
                };
            default:
                return {};
            }
        });
    };

    render() {
        const animals = this.state.animals;
        const isAddMode = this.state.activeId === null;
        const activeAnimal = this.state.activeId && this.state.animals.find(it => it.id === this.state.activeId);
        return (
            <>
                <div className="animal-module">
                    <AnimalsList animals={animals}
                                 onItemSelect={this.onItemSelect}/>
                    <AnimalDetails animal={activeAnimal}
                                   onAnimalChange={this.onAnimalUpsert}/>
                </div>
                <div className="animal-module__buttons">
                    {
                        isAddMode
                            ? <>
                                <Button onClick={this.onButtonClickHandler.bind(this, buttonTypeIdMap.CANCEL)}>
                                    Cancel
                                </Button>
                                <Button type="primary"
                                        onClick={this.onButtonClickHandler.bind(this, buttonTypeIdMap.SAVE)}>
                                    Save
                                </Button>
                            </>
                            : <Button type="primary"
                                      onClick={this.onButtonClickHandler.bind(this, buttonTypeIdMap.NEW)}>
                                Add New
                            </Button>
                    }
                </div>
            </>
        );
    }
}
