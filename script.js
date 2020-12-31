const valorDoProduto = 202.25;
const areaValorDoProduto =  document.querySelector(".secao__produto .produto__valor");


const btnQuantidadeMenos = document.querySelector(".produto__quantidade .menos");
const btnQuantidadeMais = document.querySelector(".produto__quantidade .mais");
const quantidadeDoProduto = document.querySelector(".produto__quantidade div");

btnQuantidadeMenos.addEventListener("click", () => {
	let contador = +quantidadeDoProduto.innerText - 1;
	let valorAtualizado = valorDoProduto * contador;
	if(contador === 0 && valorAtualizado !== 202.25) {
		contador = 1;
		valorAtualizado = 202.25;
	}
	quantidadeDoProduto.innerText = contador;
	areaValorDoProduto.innerText = `R$ ${valorAtualizado.toString().replace(".", ",")}`;
	// console.log(contador);
});

btnQuantidadeMais.addEventListener("click", () => {
	let contador = +quantidadeDoProduto.innerText + 1;
	let valorAtualizado = valorDoProduto * contador;
	quantidadeDoProduto.innerText = contador;
	areaValorDoProduto.innerText = `R$ ${valorAtualizado.toString().replace(".", ",")}`;
	// console.log(contador);
}); 

quantidadeDoProduto.addEventListener("keypress", () => {
	
});