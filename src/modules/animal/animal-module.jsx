import React from "react";
import { AnimalsList } from "./components/alimals-list/animals-list";
import { animalsService } from "../../services/animals.service";
import { AnimalDetails } from "./components/animal-details/animal-details";

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

    render() {
        const animals = this.state.animals;
        const activeAnimal = this.state.activeId && this.state.animals.find(it => it.id === this.state.activeId);
        return (
            <div className="animal-module">
                <AnimalsList animals={animals}/>
                <AnimalDetails animal={activeAnimal} />
            </div>
        );
    }
}
