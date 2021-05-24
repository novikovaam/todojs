const toDoInput = document.querySelector('.toDoInput')
const toDoBtn = document.querySelector('.toDoBtn')

const root = document.querySelector('#root')
let arrayTasks = []
/* if (toDoInput.value.trim() !== '') {

 }*/

const clearTaskList = () => {
    root.innerHTML = ''
}
let addTaskArr = (event) => {
    event.preventDefault()

    let date = new Date()
    let month = date.getMonth()
    let day = date.getDate()
    if (month === 4) {
        month = 'may'
    }
    clearTaskList()

    let newTask = toDoInput.value
    toDoInput.value = ''
    arrayTasks.push({value: newTask, data: {dayDate: '0' + day, monthDate: month}})
    arrayTasks.forEach(item => {
        root.append(renderTask(item))
    })
    let serialObj = JSON.stringify(arrayTasks)
    localStorage.setItem("value", serialObj);
    let returnObj = JSON.parse(localStorage.getItem("value"))
    returnObj.forEach(item => {
        arrayTasks.push(item)
    })
    console.log('test')
}

const renderTask = (item) => {
    const wrapper = document.createElement("div")
    const task = document.createElement("span")
    task.classList.add('todoItem')
    task.innerText = `${item.value}  date: ${item.data.dayDate} ${item.data.monthDate}`
    wrapper.append(task)
    return wrapper
}

/*const renderAfterLoad = (item) => {
    let serialObj = JSON.stringify(arrayTasks)
    localStorage.setItem("value", serialObj);
    let returnObj = JSON.parse(localStorage.getItem("value"))
    returnObj.forEach(item => {
        arrayTasks.push(item)
    })
    console.log('test')
}*/

//window.addEventListener('load', renderAfterLoad);
toDoBtn.addEventListener('click', addTaskArr);
