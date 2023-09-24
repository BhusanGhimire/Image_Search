const input = document.querySelector('section #input input');
const search = document.querySelector('section #input #search')
const output_div = document.querySelector('#output')

let page;

search.addEventListener('click', e => {
 main(input.value || 'nature');
})

document.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        main(input.value || 'nature');
    }
})


async function main(userInput){
    page = Math.floor(Math.random()*10);

    [...output_div.children].forEach(elem => {
        elem.remove()
    })
    
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${userInput}&client_id=Oi972sN9-1Edt1RuRzaPanQ2XV-bz7qJ7lqXyItd5bc`
    let response = await fetch(url)
    let data = await response.json() 


    data.results.forEach(result => {
        link = result.urls.regular
        output_div.innerHTML += `<div class='outputSections'><img src=${link}></img></div>`
    });
}

