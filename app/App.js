class App {
    #app;
    #searchBar;
    #articleList;

    constructor() {
        this.#app = null;
    }

    setup = ({ root }) => {
        this.#app = root;
        this.#searchBar = new Search();
        this.#articleList = new ArticleList();

        this.fetchArticles();
    }

    fetchArticles = () => {
        articleManager.fetchArticleList().then(() => {
            this.#app.innerHTML += this.#articleList.generateUI(articleManager.getArticleList());
        })
    }

    generateUI = () => {
        this.#app.innerHTML = this.#searchBar.generateUI();
    }
}
