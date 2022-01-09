import React from "react";
import { AnimalsList } from "./components/alimals-list/animals-list";
import { animalsService } from "../../services/animals.service";
import { AnimalDetails } from "./components/animal-details/animal-details";

import "./animal-module.css"

export class AnimalModule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
            activeId: null,
        }
    }

    componentDidMount() {
        animalsService.fetchData().then(data => {
            this.setState(() => {
                return {
                    animals: data,
                }
            })
        });
    }

    onItemSelect = ({ key }) => {
        this.setState(() => {
            return {
                activeId: key
            }
        })
    }

    render() {
        const animals = this.state.animals;
        const activeAnimal = this.state.activeId && this.state.animals.find(it => it.id === this.state.activeId);
        return (
            <div className="animal-module">
                <AnimalsList animals={animals} onItemSelect={this.onItemSelect}/>
                <AnimalDetails animal={activeAnimal} />
            </div>
        );
    }
}
