let toDoList = [];
const myInput = document.getElementById("myInput");

const mySubmit = document.getElementById("submit");

myInput.addEventListener("change", update);

// let myExtras = [];
// const myExtrasInput = document.getElementById('extraUdstyr');
// const myExtrasListElement = document.getElementById('extraList');


// myExtrasInput.addEventListener("change", addExtra);

function update() {
    toDoList.push(myInput.value);
    console.log(toDoList);
    updateDelete();

}


function updateDelete() {

    let myText = '<strong> Du har valgt:</strong><br><ul>';
    // console.log('exstras array:' + 'myExstra');  kun for at tjekke efter fejl

    toDoList.map((items) => {
    console.log('item:' + items);
    
    
    myText = myText +  '<li>' + items + '</li>';
    console.log('text:' + myText);

    });

    myText = myText +  '</ul>';

    mySubmit.innerHTML = myText;

}
