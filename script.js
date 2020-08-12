let editBtn = document.querySelector('.edit');
let text = document.querySelector('.text');
let btnGroup = document.querySelector('.content-editable');
let saveBtn = document.querySelector('.save');
let cancelBtn = document.querySelector('.cancel');
let initialText = text.innerHTML;

if (localStorage.getItem('userText') !== null) {
    text.innerHTML = localStorage.getItem('userText');
} 

editBtn.addEventListener('click', function(){
    editBtn.classList.add('hide');
    btnGroup.classList.add('show');
    text.setAttribute('contenteditable', 'true');
});

cancelBtn.addEventListener('click', function(){
    if (localStorage.getItem('userText') !== null) {
        text.innerHTML = localStorage.getItem('userText');
    } else {
        text.innerHTML = initialText;
    }
    text.removeAttribute('contenteditable');
    editBtn.classList.remove('hide');
    btnGroup.classList.remove('show');
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('userText', text.innerHTML);
    text.removeAttribute('contenteditable');
    editBtn.classList.remove('hide');
    btnGroup.classList.remove('show');
});

