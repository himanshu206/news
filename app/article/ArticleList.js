class ArticleList {
    #id;
    
    constructor(id) {
        this.#id = id;
    }

    generateUI = (articles) => {
        const articleElements = articles.map(articleData => {
            const article = new Article();
            return article.generateUI(articleData);
        }).join('');

        return `<div class='articleList'>
            ${articleElements}
        </div>`;
    }
};