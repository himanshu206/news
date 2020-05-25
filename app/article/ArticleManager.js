class ArticleManager {
    static _articleListUrl = 'https://newsapi.org/v2/everything?q=bitcoin&from=2020-05-25&sortBy=publishedAt&apiKey=da364cb7f87b4c1a887a5f370298aeae';
    #articleList;

    constructor()  {
        this.#articleList = null;
    }

    getArticleList = () => {
        return this.#articleList;
    }
 
    #updateArticleList = (list) => {
        this.#articleList = list.map(listItem => {
            const { title } = listItem;
            if (title.length > 65) {
                listItem.title = `${title.substring(0, 65)} ...`;
            }
            return listItem;
        });
    }

    fetchArticleList = () => {
        return fetch(ArticleManager._articleListUrl).then(response => response.json()).then(data => {
            const { articles } = data;
            this.#updateArticleList(articles);
        });
    }
}

const articleManager = new ArticleManager();