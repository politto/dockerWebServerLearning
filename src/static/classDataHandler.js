
const classData = getClassData().then(classData => {
    insertClassDataToHtml(classData);
    dataallClass = classData;
});
let dataallClass;

// const classData = [{
//     "_id": "65393f653d6a28fcdf458ba9",
//     "classId": "1",
//     "section": "2",
//     "subject": "Business analysis",
//     "classDay": "4",
//     "startTime": "13.00",
//     "endTime": "16.00",
//     "__v": 0
// },    {
//     "_id": "65394e01bf3ab6abaa439f1a",
//     "classId": "1",
//     "section": "2",
//     "subject": "Linear algebra",
//     "classDay": "2",
//     "startTime": "09.00",
//     "endTime": "12.00",
//     "__v": 0
// }];
// insertClassDataToHtml(classData);

async function getClassData() {
    try {
        const cd = await fetchClassData();
        return cd;
    } catch (error) {
        console.error("Error fetching class data:", error);
    }

}



// async function getClassData(uniqueId) {
//     let ret = [];
//     try {
//         const classData = await fetchClassData(uniqueId);
//         return ret;
//     } catch (error) {
//         console.error("Error fetching class data:", error);
//     }
// 
// }

function getClassDataByUniqueId(uid) {
    console.log("initial getdata by id :" + uid);
    for (let i = 0; i < dataallClass.length; i++) {
        console.log(dataallClass[i]._id + uid);
        if (dataallClass[i]._id === uid) {
            return dataallClass[i]
        }
        
    }
    return null;

}

async function fetchClassData(callback) {
    const res = await fetch("http://localhost:555/classes")
    let data = await res.json()
    return data;
}

async function fetchTodo(callback) {
    const res = await fetch("http://localhost:555/todos")
    let data = await res.json()
    return data;
}

async function getTodos() {
    try {
        const todoData = await fetchTodo();
        todoData.forEach((todo) => {
            renderTodoObject(todo._id, todo.classId, todo.topic, todo.detail, todo.dueDate);
        });
    } catch (error) {
        console.error("Error getting and rendering todos:", error);
        // const todoData = [{
        //     "_id": "6537be0144dd15f4bb9833de",
        //     "todoId": "2",
        //     "classId": "1",
        //     "topic": "cs",
        //     "detail": "test test",
        //     "dueDate": "1.1.2023",
        //     "comment": "test twst",
        //     "__v": 0
        // },{
        //     "_id": "6537be0144dd15f4bb9833de",
        //     "todoId": "2",
        //     "classId": "2",
        //     "topic": "css",
        //     "detail": "test test",
        //     "dueDate": "1.1.2023",
        //     "comment": "test twst",
        //     "__v": 0
        // }]
        // todoData.forEach((todo) => {
        //     renderTodoObject(todo._id, todo.classId, todo.topic, todo.detail, todo.dueDate);
        // });
    }
}

// async function fetchClassData(uniqueId) {
//     const res = await fetch("http://localhost:555/classes/" + uniqueId)
//     let data = await res.json()
//     return data;
// }

function insertClassDataToHtml(classData){
    console.log(classData);
    classesData = classData;
    let i = 0;
    for (i = 0; i < 7; i++){
        let dataEachDay = getClassDataByDay(classesData, i);
        // console.log(dataEachDay);
        let lastend = 0;
        for(j = 0; j < dataEachDay.length; j++) {
            let each = dataEachDay[j];

            each.startTime = convertDeciMinToNormal(each.startTime);
            each.endTime = convertDeciMinToNormal(each.endTime);
            console.log(each.endTime)
            renderClassObj(each._id, each.classId, each.subject, each.classDay, each.startTime, each.endTime, lastend);
            lastend += each.endTime;
        }

    }

    i = 0;
    while (document.getElementsByClassName('classObj')[i] != undefined){
        document.getElementsByClassName('classObj')[i].addEventListener('click', displaySubjectInfo);
        i++;
        // console.log(i);
    }
}

function convertDeciMinToNormal(time){
    let intt = parseInt(time);
    let deci = (time - intt) * 10 / 6
    // console.log(intt+deci);
    return intt + deci;
}

function getClassDataByDay(dataArr, day) {
    const getSection = document.getElementsByClassName('bg-primary')[0].getElementsByTagName('h2')[0].getElementsByTagName('b')[0];
    console.log(getSection);
    let sect = document.getElementsByClassName('bg-primary')[0].getElementsByTagName('h2')[0] === '1'? 1: 2; 
    console.log(sect);
    let ret = [];
    for (let i = 0; i < dataArr.length; i++) {
        // if (parseInt(dataArr[i].classDay) === day && parseInt(dataArr[i].section) === sect) ret.push(dataArr[i]);
        if (parseInt(dataArr[i].classDay) === day) ret.push(dataArr[i]);
    }
    return ret;
} 

function renderClassObj(id, classid, name, day, start, fin, prevfin){
    let width = document.getElementsByClassName("classesDisplay")[0].getElementsByClassName('dayRow')[0].offsetWidth;
    console.log(width);
    start = (start - 8);
    fin = (fin - 8);
    if (prevfin > 0) prevfin = (prevfin - 8);
    let wow = "wow"
    console.log(start + " " + fin + " " + prevfin + " " + day);
    document.getElementsByClassName("classesDisplay")[0].getElementsByClassName('dayRow')[parseInt(day)].innerHTML += `
        <div dataId = ${id} classId = ${classid} class = "classObj" 
        style = "margin-left: ${(start - prevfin) * (width / 11)}px; width: ${(fin - start) * (width / 11)}px; background-color:${getRandomColor()}" >${name}</div>
    `;
    
}

function renderTodoObject(todoId, classId, topic, detail, dueDate){

    const renderPlane = document.getElementsByClassName("assignment")[1];
    console.log(dueDate + " " + todoId);
    renderPlane.innerHTML = `
        <div todoId = ${todoId}>
            <div>${topic}</div>
            <div>${detail}</div>
            <div>${dueDate}</div>
            <div onClick = hideTodoObject('${todoId}')>delete</div>
        </div>
    `

}

function hideTodoObject(id){
    let divs = document.getElementsByClassName('assignment')[1].getElementsByTagName('div');
    let i = 0;
    while (divs[i] != undefined) {
        if (divs[i].getAttribute('todoId') === id) return divs[i].style.display = 'none';
    }
    

}

let todoId = "0";
const buttonTodoAdd = document.querySelector('.button-todo-add');
buttonTodoAdd.addEventListener('click', (e) => {
  e.preventDefault();

  console.log("button-todo-add clicked");
  let todoIdNumber = parseInt(todoId,10);

  fetch('http://localhost:555/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      todoId: todoId, // FAKE
      classId: document.querySelector('.button-todo-add').getAttribute('classId'),
      topic: document.querySelector('.todo-topic').value,
      detail: document.querySelector('.todo-dueDate').value,
      dueDate: document.querySelector('.todo-detail').value,
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    console.log("todo added");
    todoIdNumber++;
    todoId = todoIdNumber.toString();
    location.reload();
  })
    .catch(err => console.log(err));
})


