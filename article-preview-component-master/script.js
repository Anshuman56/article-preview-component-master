const icon = document.querySelector('.icon-share')
const hiddenBox = document.querySelector('#box')
const share = document.querySelector('.share-box')

icon.addEventListener('mouseover', e =>
{
    if(hiddenBox.style.display == 'none'){
        hiddenBox.style.display = 'flex';
    }  
     else   
        hiddenBox.style.display ='none';
})