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
    // console.log(document.getElementsByClassName("bg-modal")[0]);
    const elem = document.getElementsByClassName("bg-modal")[0];
    elem.style.display = 'flex';

    // const clickedElemDataId = this.target.dataid;
    // elem.getElementsByClassName("subjectName")[0].innerHTML = e.target.getAttribute('dataid');
    elem.getElementsByClassName("subjectName")[0].innerHTML = e.target.textContent;


}

const hideSubjectInfo = () => {
    // console.log(document.getElementsByClassName("bg-modal")[0]);
    const elem = document.getElementsByClassName("bg-modal")[0];
    elem.style.display = 'none';
}