const toggle = document.getElementById('toggle'); 
const menu = document.querySelector('.Contenu .headG'); 
const closeT = document.getElementById('close');   

toggle.addEventListener('click', () => {
    toggle.style.display = 'none';     
    menu.classList.add('active');      
    closeT.style.display = 'block';
});

closeT.addEventListener('click', () => {
    menu.classList.remove('active');  
    closeT.style.display = 'none';   
    toggle.style.display = 'flex';      
});
