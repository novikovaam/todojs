const toDoInput = document.querySelector('.toDoInput')
const toDoBtn = document.querySelector('.toDoBtn')
//const toDoList = document.querySelector('.toDoList')

const root = document.querySelector('#root')
let arrayTasks = []
/* if (toDoInput.value.trim() !== '') {

 }*/

const clearTaskList = () => {
    root.innerHTML = ''
}
const addTaskArr = (event) => {
    event.preventDefault()

    let date = new Date()
    let month = date.getMonth()
    if (month === 3) {
        month = 'march'
    }
    let day = date.getDay()

    clearTaskList()

    let newTask = toDoInput.value
    toDoInput.value = ''

    arrayTasks.push({value: newTask, data: {dayDate: '0' + day, monthDate: month}})
    arrayTasks.forEach(item => {
        root.append(renderTask(item))
    })
    console.log(arrayTasks)
    localStorage.setItem('value', JSON.stringify(arrayTasks))
    let raw = localStorage.getItem('value')
    JSON.parse(raw)
    console.log(raw)
}

const renderTask = (item) => {
    const wrapper = document.createElement("div")
    const task = document.createElement("span")
    task.classList.add('todoItem')
    task.innerText = `${item.value}  date: ${item.data.dayDate} ${item.data.monthDate}`
    wrapper.append(task)
    return wrapper
}
toDoBtn.addEventListener('click', addTaskArr);

