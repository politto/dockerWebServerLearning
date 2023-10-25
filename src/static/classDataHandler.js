// const { resolve } = require("path");

console.log("hello");
const classData = getClassData().then(classData => {
    insertClassData(classData);
});

// const classData = [{"_id":"6538d294534e384a74fc1945","classId":"0","section":"1","subject":"Business analysis","classDay":"5","startTime":"9.00","endTime":"12.00","__v":0}];
// console.log(classData);
// insertClassdata(classData);

async function getClassData() {
    const ret = [];
    try {
        const classData = await fetchClassData();
        return classData;
    } catch (error) {
        console.error("Error fetching class data:", error);
    }
}

async function fetchClassData(callback) {
    const res = await fetch("http://localhost:555/classes")
    let data = await res.json()
    return data;
}

function insertClassData(classData){
    console.log(classData);
    classesData = classData;
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

        for(j = 0; j < dataEachDay.length; j++) {
            document.getElementsByClassName("classObj")[j].addEventListener("click", displaySubjectInfo);
        }

    }
}

function convertDeciMinToNormal(time){
    let intt = parseInt(time);
    let deci = (time - intt) * 10 / 6
    // console.log(intt+deci);
    return intt + deci;
}

function getClassDataByDay(dataArr, day) {
    let ret = [];
    for (let i = 0; i < dataArr.length; i++) {
        if (parseInt(dataArr[i].classDay) === day) ret.push(dataArr[i]);
    }
    return ret;
} 

function renderClassObj(id, classid, name, day, start, fin, prevfin){
    let width = document.getElementsByClassName("classesDisplay")[0].getElementsByTagName('div')[0].offsetWidth;
    console.log(width);
    start = (start - 8);
    fin = (fin - 8);
    if (prevfin > 0) prevfin = (prevfin - 8);
    let wow = "wow"
    console.log(start + " " + fin + " " + prevfin + " " + day);
    document.getElementsByClassName("classesDisplay")[0].getElementsByClassName('dayRow')[parseInt(day)].innerHTML = `
        <div dataId = ${id} classId = ${classid} class = "classObj" 
        style = "margin-left: ${(start - prevfin) /100 * width * 1.3}%; width: ${(fin - start) / 100 *width * 1.3}%; background-color:${getRandomColor()}" >${name}</div>
    `;
}






