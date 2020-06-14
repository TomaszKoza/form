

mybar=document.querySelector('.hours--js')

const bar=() => {
    value=document.querySelector('.value--js');
    value.innerHTML= (mybar.value);
}

mybar.addEventListener('click',bar);