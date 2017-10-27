let line = "";
let history = [];

function displayChange(value){
    line=value;
}

function calc(){
    try{
        resLine.innerText = eval(line);
        addHistory();
        renderHistory();
    }catch(e){
        alert(e);
    }
}

function push(c){
    displayChange(displayInput.value += c);
}

function addHistory (){
    if (history.length < 10){
        history.push(line);
    }else{
        history.splice(0, 1);
    }
}

function loadHistory(self){
    displayChange(displayInput.value = self.innerText);
}

function renderHistory (){
    historyBlock.innerHTML = "";
    history.map(h => {
        historyBlock.innerHTML += '<p><a onclick="loadHistory(this)">'+ h +'</a></p>';
    });
}
