const fetch = require('node-fetch');

async function fetchNews(topic){

    return new Promise(resolve=>{
fetch(`http://newsapi.org/v2/everything?q=sports&from=2020-09-14&sortBy=publishedAt&apiKey=df224751000f4ab0a6e1ca836be63ca3`)
.then(res=>res.json())
.then(res=>{
    console.log(res.articles.length)
    resolve(res.articles)
    return 
})
})

}


module.exports = fetchNews;