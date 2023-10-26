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
    const bgModal = document.getElementsByClassName("bg-modal")[0];
    const dataid = e.target.getAttribute('dataid');
    bgModal.style.display = 'flex';
    // console.log(getClassDataByUniqueId(dataid));

    bgModal.getElementsByClassName("subjectName")[0].innerHTML = getClassDataByUniqueId(dataid).subject;
    getTodos();
    document.getElementsByClassName("buttonTEST")[0].setAttribute('classid', getClassDataByUniqueId(dataid).classId);


}

const hideSubjectInfo = () => {
    // console.log(document.getElementsByClassName("bg-modal")[0]);
    const elem = document.getElementsByClassName("bg-modal")[0];
    elem.style.display = 'none';
}