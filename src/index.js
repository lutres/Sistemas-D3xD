import './styles.css';
import './css/productos.css';

const btnSistemas = document.querySelectorAll('.button-text');
const flecha      = document.querySelectorAll('.bi-chevron-double-right');
const sistemas    = document.querySelectorAll('.informacion');

btnSistemas.forEach(btn => {

    btn.addEventListener('click', (e) => {

       if (e.currentTarget.classList.contains('sistema-adm')) {

            if (flecha[0].classList.contains('rotate')) {

                flecha[0].classList.remove('rotate');
                sistemas[0].classList.remove('display');

            } else {

                flecha[0].classList.add('rotate');
                sistemas[0].classList.add('display');

            }   

       } else {

            if (flecha[1].classList.contains('rotate')) {

                flecha[1].classList.remove('rotate');
                sistemas[1].classList.remove('display');

            } else {

                flecha[1].classList.add('rotate');
                sistemas[1].classList.add('display');

            }   
       
       }

    })
    
});