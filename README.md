# CountryAPI
![](https://img.shields.io/badge/javaScript-gray?logo=javaScript)
![](https://img.shields.io/badge/HTML-gray?logo=HTML5)
![](https://img.shields.io/badge/Bootstrap_vue-gray?logo=Bootstrap).
## <br>
## content
* [App](#app)
* [CountryAPI#1](#CountryAPI#1)
* [JScode](#JScode)

## App
display the information of the country we choose.
User is able to click on the country of his choice then display a card with some information we receive through an other API call (http://restcountries.eu/#api-endpoints-name).ssigned yet to a Technology Watch. A single page in which we can add both students and Technology Watch.
<br><br>
## CountryAPI#1
![Image1](https://github.com/mowafag-omer/countryAPI/blob/master/screenshots/Capture3.PNG)
![Image1](https://github.com/mowafag-omer/countryAPI/blob/master/screenshots/Capture4.PNG)

<br><br>
## JScode
- Show students and Assassinated Technologies lists once the page has loaded
```js
window.onload = () => {
  students = JSON.parse(localStorage.getItem('student')) 
  techs = JSON.parse(localStorage.getItem('tech')) 
  
  students.forEach((i) => studentsName.push(i))
  techs.forEach((i) => technologie.push(i) )

  list[0].innerHTML = studentsName.map(i => "<li>" + i + "</li>").join('') 
  list[1].innerHTML = technologie.map(i => `<li> ${i[0]} - ${i[1]}</li>`).join('') 
}
```
- add student and store data in the localStorage
```js
form[0].addEventListener('submit', (event) => {
  event.preventDefault()
  studentsName.push(studentInput.value)
  localStorage.setItem("student", JSON.stringify(studentsName))
  list[0].innerHTML += "<li>" + studentInput.value + "</li>"
  form[0].reset()  
})
```
- randomly assign a chosen Topic to a Student who wasn't assigned yet to a Technology Watch
```js
form[1].addEventListener('submit', (event) => {
  event.preventDefault()
  random = [Math.floor(Math.random() * studentsName.length)]
  technologie.push([techInput.value, studentsName[random]])
  localStorage.setItem("tech", JSON.stringify(technologie))
  list[1].innerHTML += "<li>" + techInput.value + ' - ' + studentsName[random] + "</li>"
  form[1].reset()
})

```
