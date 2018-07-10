import axios from "axios";

export default {

    // gets data from api
    search: function (params) {
        return axios.get("/api/search", params);
    },
    // saves article to db
    postArticle: function (articleData) {
        console.log(articleData)
        return axios.post("/api/articles", articleData);
    },
    // gets all saved articles
    getArticle: function () {
        return axios.get("/api/articles");
    },
    // deletes saved article 
    delete: function (id) {
        return axios.delete("/api/articles/" + id);
    }
};
