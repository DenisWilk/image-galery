console.log(`Ваша отметка - 70 балла(ов)
Отзыв по пунктам ТЗ:
Все пункты выполнены полностью!`);


/* input.addEventListener("keyup", (a) => {
    if (a.key === 'Enter') 
    getData();
  }); */


let inputText = document.querySelector('.input-text');
inputText.value = '';
const inputCancel = document.querySelector('.input-cancel');
const inputSubmit = document.querySelector('.input-submit');
const mainTable = document.querySelector('.main-table');



async function getStartData() {
    const url = `https://api.unsplash.com/search/photos?query=
random&per_page=30&orientation=landscape&client_
id=OqbI0ge8DtRLHHZwp9jUgYROuP30PniarzNVrrd9HdM`;
    const res = await fetch(url);
    const data = await res.json();
    
    showData(data);
}
getStartData();



async function getData() {
    const url = `https://api.unsplash.com/search/photos?query=
${inputText.value}&per_page=30&orientation=landscape&client_
id=OqbI0ge8DtRLHHZwp9jUgYROuP30PniarzNVrrd9HdM`;

    const res = await fetch(url);
    const data = await res.json();
    
    console.log(url);
    console.log(data);

    showData(data);
}
inputSubmit.addEventListener('click', getData);
inputText.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        getData();
    }
});



function showData(data) {
    mainTable.innerHTML = '';

    data.results.map(el => {
        let img = `<img class="table-item" src="${el.urls.regular}" 
        alt="image" onclick = "openImage(this.src)">`;
        mainTable.insertAdjacentHTML('beforeend', img);
    });
}



function clearInput() {
    inputText.value = '';
    inputText.focus();
}
inputCancel.addEventListener('click', clearInput);



function openImage(src) {
    window.open(src, '_blank').focus();
}



const lightTheme = document.querySelector('.btn1');
const blueTheme = document.querySelector('.btn2');
const darkTheme = document.querySelector('.btn3');

function changeTheme() {

    if (event.target.classList.contains('btn2')) {
        document.body.classList.add('blue');
        document.body.classList.remove('dark');
    }
    else if (event.target.classList.contains('btn3')) {
        document.body.classList.add('dark');
        document.body.classList.remove('blue');
    }
    else {
        document.body.classList.remove('blue');
        document.body.classList.remove('dark');
    }
}
lightTheme.addEventListener('click', changeTheme);
blueTheme.addEventListener('click', changeTheme);
darkTheme.addEventListener('click', changeTheme);


