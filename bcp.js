const input = document.querySelector('input')
const list = document.querySelector('ul')
const listItems = document.querySelectorAll('li')
const info = document.querySelector('#info')
let countryList = [], countriesArr = [], output = '', output1 = '', data

// const xhttp = new XMLHttpRequest()
// xhttp.onload = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     data = JSON.parse(this.responseText)
//     data.forEach (e => {
//     // output += '<span class="border border-secondary p-1 m-1">' + e.name + '</span>'
//     countriesArr.push(e.name)
//     })
//     // document.querySelector("div").innerHTML = output
//   }
// }
// xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true)
// xhttp.send()

fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(d => data = d)
 console.log(data);
 
data.forEach(i => countriesArr.push(i.name))

input.addEventListener('input', (e)=>{
  if(e.target.value){
    countryList = countriesArr.filter(cn => cn.toLowerCase().includes(e.target.value.toLowerCase()))
    countryList = countryList.map(cn => `<li class="list-group-item">${cn}</li>`)
    list.innerHTML = !countryList.length ? '' : countryList.join('')
  } else {
    list.innerHTML = ''
  }
})

window.addEventListener('click', (e) => {
  e.target != list && e.target != input && (list.innerHTML = '')
  
  if(e.target.tagName  == 'LI'){
    input.value = e.target.textContent
    list.innerHTML = ''
  }

  if(e.target.tagName  == 'BUTTON'){
    data.forEach((i) => {
      if(input.value && input.value == i.name){
        console.log(i)
        output1 = `<img src="${i.flag}" class='mb-2' width="80 alt="">`
        output1 += `<p>The population if ${i.name} is ${i.population}</p>`
        output1 += `<p>The capital is ${i.capital}</p>`
        output1 += `<p>The currency is ${i.currencies[0].name} ${i.currencies[0].symbol}</p>`
      }
    })
    info.innerHTML = output1
    !input.value && alert('Check the name of the country !')
  }
})