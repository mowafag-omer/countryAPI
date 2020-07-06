const input = document.querySelector('input')
const list = document.querySelector('ul')
const listItems = document.querySelectorAll('li')
const info = document.querySelector('#info')
let countryList = [], countriesArr = [], output = '', output1 = '', data

const xhr = new XMLHttpRequest()
xhr.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText)
    data.forEach (e => {
    // output += '<span class="border border-secondary p-1 m-1">' + e.name + '</span>'
    countriesArr.push(e.name)
    })
    // document.querySelector("div").innerHTML = output
  }
}
xhr.open("GET", "https://restcountries.eu/rest/v2/all", true)
xhr.send()

input.addEventListener('input', (e)=>{
  if(e.target.value){
    let reg = new RegExp(`^${e.target.value}`, 'gi')
    countryList = countriesArr.filter(cn => cn.match(reg))
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
      if(input.value.toLowerCase() == i.name.toLowerCase()){
        console.log(i.borders);
        output1 = `<img src="${i.flag}" class='mb-2' width="80 alt="">`
        output1 += `<p>The population if ${i.name} is ${i.population}</p>`
        output1 += `<p>The capital is ${i.capital}</p>`
        output1 += `<p>The currency is ${i.currencies[0].name} ${i.currencies[0].symbol}</p>`
        output1 += !getBorder(i.borders).length ? '' :`Border countries are : ${getBorder(i.borders).join(' - ')}`
      }
    })
    info.innerHTML = output1
    !input.value && alert('Check the name of the country !')
  }
})

const getBorder = (arr) => {
  let borders = []
  arr.forEach(ac => {
    data.forEach(i => i.alpha3Code == ac && borders.push(i.name))
  })
  return borders
}