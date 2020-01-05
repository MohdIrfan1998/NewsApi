// sports section
const SportsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a4e7503b33b343238fcfd3f4fc7d67de`

window.fetch(SportsApiUrl).then(data =>{
    data.json().then(sportsnews => {
    let sportsData = sportsnews.articles;
    let output ="";
    for(let sports of sportsData) {
        output +=`

        
        <h1 class="h1Title"><a href="${sports.url}" target_blank>${sports.title}</a></h1>
        <p>${sports.description}</p>
        <img src="${sports.urlToImage}"/>
        <p>${sports.publishedAt}</p>

        `;

        document.getElementById("left").innerHTML = output;
    }


    }).catch(err => console.log(err))
}).catch(err => console.log(err))

// time javascript here
setInterval(()=>{
    var time = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
},1000);

// entertainment section

const EntUrl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a4e7503b33b343238fcfd3f4fc7d67de`

window.fetch(EntUrl)
.then(data => {
    data
    .json()
    .then (ent => {
        let entData = ent.articles;
        let output = "";
        for (let ent of entData) {
            
            output +=`
            <h1 class="h1Title"><a href="${ent.url}" target=_blank>${ent.title}</a></h1>
            <p>${ent.description}</p>
            <img src="${ent.urlToImage}"/>
            <p>${ent.publishedAt}</p>

            `;
        }

        document.getElementById("right").innerHTML = output;

    })

    .catch(err => console.log(err));

})

.catch(err => console.log(err));


// top news headlines

const TopHeadLineUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a4e7503b33b343238fcfd3f4fc7d67de`
window
.fetch(TopHeadLineUrl)
.then(data => {
    data
    .json()
    .then(topnews => {
        console.log(topnews);
        let topnewsData = topnews.articles;
        let output = "";
        for (let topnew of topnewsData){
            output +=`
            <h1 class="h1Title"><a href="${topnew.url}" target=_blank>${topnew.title}</a></h1>
            <p>${topnew.description}</p>
            <img src="${topnew.urlToImage}" />
            <p>${topnew.publishedAt}</p>


            `;

        }

        document.getElementById("middle").innerHTML = output;
    })

    .catch(err => console.log(err));

})

.catch(err => console.log(err));






