const input = document.querySelector('section #input input');
const search = document.querySelector('section #input #search')

const output_div = document.querySelector('#output')
let userInput;

search.addEventListener('click', e => {
userInput = input.value || 'nature';
page = Math.floor(Math.random()*10)
 main();
})


async function main(){
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${userInput}&client_id=Oi972sN9-1Edt1RuRzaPanQ2XV-bz7qJ7lqXyItd5bc`
    let response = await fetch(url)
    let data = await response.json() 


    data.results.forEach(result => {
        link = result.urls.regular
        let img = document.createElement('img')
        img.className = 'outputSections'
        img.src = link
        output_div.appendChild(img)
    });
}

