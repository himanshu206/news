class Search {
    #id;

    constructor(id) {
        this.#id = id;
    }

    generateUI = () => {
        return `<div class='search'>
            <input class='search__input' type='text' placeholder='Search ...'></input>
        </div>`;
    }
}