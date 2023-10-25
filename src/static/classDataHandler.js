async function fetchClassData() {
    const res = await fetch("http://localhost:555/classes");
    const data = await res.json();
    // 
    // console.log(data);
    return data;
}

async function insertClassData() {
    for (i = 0; i < 7; i++){
        
    }
}

const renderClassObj = (day, name, start, fin, prevfin) => {
    let wow = "wow"
    document.getElementsByClassName("classesDisplay")[0].getElementsByTagName('div')[day].innerHTML = `
        <div class = "classObj" style = "padding : ${start - prevfin}; background-color:${getRandomColor()}">hello</div>
    `;
}


const getRandomColor = () {
    const letters = '56789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const classData = fetchClassData();

renderDayRow();
