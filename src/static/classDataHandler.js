async function fetchClassData() {
    const res = await fetch("http://localhost:555/classes");
    const data = await res.json();
    // 
    // console.log(data);
    return data;
}

function insertClassData() {
    let classesData = fetchClassData();
    let day = "";
    for (i = 0; i < 7; i++){
        let dataEachDay = getClassDataByDay(classesData, i);
        let last
        for(j = 0; j < dataEachDay.length; j++) {
            renderClassObj
        }
    }
}

const renderClassObj = (day, name, start, fin, prevfin) => {
    let wow = "wow"
    document.getElementsByClassName("classesDisplay")[0].getElementsByTagName('div')[day].innerHTML = `
        <div class = "classObj" style = "padding : ${start - prevfin}; background-color:${getRandomColor()}">hello</div>
    `;
}

const getClassDataByDay = (dataArr, day) => {
    let ret = [];
    for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i].classDay === day) ret.push(dataArr[i]);
    }
    return ret;
} 

const getRandomColor = () => {
    const letters = '56789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const classData = fetchClassData();


