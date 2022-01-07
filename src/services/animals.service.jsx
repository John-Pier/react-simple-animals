export class AnimalsService {

    async fetchData() {
        return Promise.resolve([
            {
                id: "1",
                name: "test1",
            },
            {
                id: "2",
                name: "test2",
            },
            {
                id: "3",
                name: "test3",
            },
            {
                id: "4",
                name: "test4",
            },
        ]);
    }
}

export const animalsService = new AnimalsService();
