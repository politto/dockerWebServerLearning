const getRandomColor = () => {
    const letters = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const hello = () => {
    console.log("hello?");
}

const displaySubjectInfo = (e) => {
    const elem = document.getElementsByClassName("bg-modal")[0];
    elem.style.display = 'flex';
    elem.getElementsByClassName("subjectName")[0].innerHTML = e.target.textContent;


}

const hideSubjectInfo = () => {
    // console.log(document.getElementsByClassName("bg-modal")[0]);
    const elem = document.getElementsByClassName("bg-modal")[0];
    elem.style.display = 'none';
}