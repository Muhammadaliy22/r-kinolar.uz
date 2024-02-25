let PartMovie = movies.slice(0,800)
let elMovlist = document.querySelector('.movises__list')
let elCategory = document.querySelector('.sel__catedory')
fnRender(PartMovie)

function fnRender(data){
    elMovlist.innerHTML = ''
 data.forEach((item, index)=>{
    let newLi = document.createElement('li')
    newLi.classList = 'movies_item'
    newLi.innerHTML = `
    <div class="card" style="width: 18rem; ">
    <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg"
     class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title d-flex align-items-center justify-content-between">
      ${item.Title.toString().slice(0,25)} <i onclick="fnLowerCase('${item.ytid}')" class="bi bi-heart"></i></h5>
      <p class="card-text">${item.Categories.toString().slice(0,30)}</p>
      <p class="card-text">${item.movie_year}</p>
      <h4 class="card-text">${item.imdb_rating}</h4>
      <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-warning">Watch the movie</a>
    </div>
  </div>
    `
    elMovlist.appendChild(newLi)   
 })
}

function fnYear (value){
    if(value == 'Old'){
        fnRender(PartMovie.sort((a,b)=>a.movie_year - b.movie_year));
    }else{
        fnRender(PartMovie.sort((a,b)=>b.movie_year - a.movie_year));
    }
}

function fnRaiting(value){
    if(value == 'Min'){
        fnRender(PartMovie.sort((a,b)=>a.imdb_rating - b.imdb_rating));
    }else{
        fnRender(PartMovie.sort((a,b)=>b.imdb_rating - a.imdb_rating));
    }
}

let arrCategory = []
PartMovie.forEach((item)=>{
    if(!arrCategory.includes(item.Categories)){ 
        arrCategory.push(item.Categories)
    }
})

arrCategory.forEach(item=>{
    let newOption = document.createElement('option')
    newOption.textContent = item
    newOption.value = item
        elCategory.appendChild(newOption)
})

function fnCategory(value){
    fnRender(PartMovie.filter((item)=> item.Categories == value));
}


function movieSearch(e){
    e.preventDefault()
    let mov = e.target.mov.value
    fnRender(PartMovie.filter((i)=> 
    i.Title.toString().toLowerCase().includes(mov.toLowerCase()) &&
    i.Title.toString().toLowerCase()[0] == mov.toLowerCase()[0]
    )); 
}
 let intialLocalDate = []
function fnLoveMovie(id){
    console.log(PartMovie.find((item)=> item.ytid == id));
    intialLocalDate.push(PartMovie.find((item)=> item.ytid == id))
    window.localStorage.setItem('localMovie',JSON.stringify(intialLocalDate))
}
