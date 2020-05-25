class Article {
    #id;
    
    constructor(id) {
        this.#id = id;
    }

    generateUI = (article) => {
        const { title, source: { name }, urlToImage } = article;

        return `<div class='article'>
            <h2 class='article__sourceName'>${name}</h2>
            <div class='article__title'>${title}</div>
            <img class='article__img' src=${urlToImage}></img>
        </div>`;
    }
}; 
