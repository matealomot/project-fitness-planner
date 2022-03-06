//////// varijable 

let inputTekst = document.getElementById('tekstPolje');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');
let dodajnaListu = document.getElementById('btn1');
let resetujListu = document.getElementById('btn2');
let dNP = document.getElementById('dnP');
let dNK = document.getElementById('dnK');
let numberInput = document.getElementById('brojPolje');
let btnPocni = document.getElementById('start');
let btnPauziraj = document.getElementById('pause');
let btnStopiraj = document.getElementById('stop');
let span1 = document.getElementById('clock');
let span2 = document.getElementById('date');
let td = document.getElementsByTagName('td');
let brojac = -3;
let counter = null;
let timer = null;

//////// funkcije

function time() {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    span1.textContent = `${sati} : ${minuti} : ${sekunde}`;
}

function date() {
    let datum = new Date();
    let day = datum.getDay();
    let danuMesecu = datum.getDate();
    let month = datum.getMonth();
    let godina = datum.getFullYear();
    let mesec;
    let dan;
    switch (day) {
        case 0:
            dan = "Nedelja";
            break;
        case 1:
            dan = "Ponedeljak";
            break;
        case 2:
            dan = "Utorak";
            break;
        case 3:
            dan = "Sreda";
            break;
        case 4:
            dan = "Cetvrtak";
            break;
        case 5:
            dan = "Petak";
            break;
        case 6:
            dan = "Subota";
    }
        
    switch (month) {
        case 0:
            mesec = "Januar";
            break;
        case 1:
            mesec = "Februar";
            break;
        case 2:
            mesec = "Mart";
            break;
        case 3:
            mesec = "April";
            break;
        case 4:
            mesec = "Maj";
            break;
        case 5:
            mesec = "Jun";
            break;
        case 6:
            mesec = "Jul";
            break;
        case 7:
            mesec = "Avgust";
            break;
        case 8:
            mesec = "Septembar";
            break;
        case 9:
            mesec = "Oktobar";
            break;
        case 10:
            mesec = "Novembar";
            break;
        case 11:
            mesec = "Decembar";
    }
    span2.textContent = `${dan}, ${mesec} ${danuMesecu}, ${godina}`;
}

setInterval(date, 1000);
setInterval(time, 1000);

ul.addEventListener('dblclick', e => {
    if(e.target.tagName == "LI") {
        if(e.target.style.textDecoration == "none") {
            e.target.style.textDecoration = "line-through";
        }
        else {
            e.target.style.textDecoration = "none";
        }
    }
});

ul.addEventListener('auxclick', e => {
    if(e.target.tagName == "LI") {
        e.target.remove();
    }
})

dodajnaListu.addEventListener('click', () => {
    if(inputTekst.value == "") {
        alert("Prazno polje!");
    }
    else {
        if(dNP.checked) {
            let lItem = document.createElement('li');
            lItem.innerText = inputTekst.value;
            lItem.contentEditable = 'true';
            lItem.draggable = 'true';
            ul.prepend(lItem);
            inputTekst.value = "";
        }
        else if(dNK.checked) {
            let lItem = document.createElement('li');
            lItem.innerText = inputTekst.value;
            lItem.contentEditable = 'true';
            lItem.draggable = 'true';
            ul.appendChild(lItem);
            inputTekst.value = "";
        }
    }
});


resetujListu.addEventListener('click', () => {
    inputTekst.value = "";
    dNP.checked = true;
    dNK.checked = false;
});

btnPocni.addEventListener('click', () => {
    numberInput.value = "Get ready!";
    numberInput.style.backgroundColor = "lawngreen";
    numberInput.style.transition = "background 1s";
    if(counter === null) {
        counter = setInterval(() => {
            if (brojac != 0) {
                numberInput.value = Math.abs(brojac);
            } 
            else {
                numberInput.value = "Go!";
            }
            brojac++;
        }, 1000);
    }
});

btnPauziraj.addEventListener('click', () => {
    if(counter != null) {
        clearInterval(counter);
        counter = null;
        numberInput.style.backgroundColor = "orangered";
        numberInput.style.transition = "background 1s";
    }
});

btnStopiraj.addEventListener('click', () => {
    clearInterval(counter);
    counter = null;
    brojac = 0;
    numberInput.style.backgroundColor = "lemonchiffon";
    numberInput.style.transition = "background 1s";
    numberInput.value = "";
});


///// add instructions

//// make list items draggable items

//// check for saving to local storage

