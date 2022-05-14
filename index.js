//DOM Variables
const container = document.getElementById('container');
const pushButton = document.getElementById('add-end-btn')
const unshiftButton = document.getElementById('add-start-btn')
const popButton = document.getElementById('remove-end-btn')
const shiftButton = document.getElementById('remove-start-btn')
const input = document.getElementById('input');
//console.log(container);

//variavles
const emojisArr = ["👨‍💻", "⛷", "🍲"]
renderEmojis();


//functions
//push func
function addToTheEnd(){
    //console.log("added");
    const inputText = input.value;
    console.log(inputText)
    if(inputText){
        emojisArr.push(inputText);
        input.value = "";
        //console.log(emojisArr)
        }

        renderEmojis();
}

//unshift func
function addToTheStart(){
    const inputText = input.value;
    if(inputText){
        emojisArr.unshift(input.value)
        input.value=""
    }
    renderEmojis();
}

//pop func
function removeFromTheEnd(){
    if(emojisArr.length > 0){
        emojisArr.pop()
    }
    renderEmojis();
}

//pop func
function removeFromTheStart(){
    if(emojisArr.length > 0){
        emojisArr.shift();
    }
    renderEmojis();
}

function renderEmojis(){
    container.innerHTML="";
    for(let i =0; i< emojisArr.length; i++){
        //console.log(emojisArr[i]);
        const span = document.createElement('span');   
        span.textContent = `${emojisArr[i]}`
        container.appendChild(span);
    } 
}

//event listeners
pushButton.addEventListener('click', addToTheEnd);
unshiftButton.addEventListener('click', addToTheStart);
popButton.addEventListener('click', removeFromTheEnd);
shiftButton.addEventListener('click', removeFromTheStart);
