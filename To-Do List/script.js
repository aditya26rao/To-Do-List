const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
function addTask(){
    if(inputBox.value === ""){
        alert('You must write something')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let cross = document.createElement('span')
        cross.innerHTML = '\u00d7';
        li.appendChild(cross) //adding cross icon
    }
    inputBox.value = '' //after adding the value , im making it empty again
    saveData()  // for add im saving it in my storage
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName == 'LI'){ // if target tagName is 'list item' then check it
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove(); // or it is SPAN remove the list item
    }
},false)

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function getData(){
   listContainer.innerHTML =  localStorage.getItem('data'); // it will give the whole content 
}
getData();
