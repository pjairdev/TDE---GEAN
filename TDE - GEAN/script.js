const produtos = document.querySelectorAll('.produto');

const selectContainer = document.querySelector('.select-container');
const redBorder = document.querySelector('.red-border');

  produtos.forEach(produto => {
    produto.addEventListener('mouseover', () => {
      produto.style.transform = 'scale(1.012)';
      
    });

    produto.addEventListener('mouseout', () => {
      produto.style.transform = 'scale(1)';
    });
  });



selectContainer.addEventListener('click', () => {
    redBorder.style.width = `${selectContainer.offsetWidth}px`;
});