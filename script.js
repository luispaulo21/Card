const valorDoProduto = 202.25;
const areaValorDoProduto =  document.querySelector(".secao__produto .produto__valor");
const miniaturasDoProduto = document.querySelectorAll(".produto__miniatura .miniatura__imagem");
const imagemDoProduto = document.querySelector(".produto__imagem .imagem__principal");

miniaturasDoProduto.forEach((item, index) => {
	item.addEventListener("click", () => {
		if(index === 0 ) {
			imagemDoProduto.setAttribute("src", "img1.png");
		} else if(index === 1 ) {
			imagemDoProduto.setAttribute("src", "img2.png");
		} else if(index === 2 ) {
			imagemDoProduto.setAttribute("src", "img3.png");
		} else {
			imagemDoProduto.setAttribute("src", "img4.png");
		}

		imagemDoProduto.classList.add("animImg");
		setTimeout(() => {
			imagemDoProduto.classList.remove("animImg");
		}, 300);
	})
});


const btnQuantidadeMenos = document.querySelector(".produto__quantidade .menos");
const btnQuantidadeMais = document.querySelector(".produto__quantidade .mais");
const quantidadeDoProduto = document.querySelector(".produto__quantidade .number");

btnQuantidadeMenos.addEventListener("click", () => {
	let contador = +quantidadeDoProduto.innerText - 1;
	let valorAtualizado = valorDoProduto * contador;
	if(contador === 0 && valorAtualizado !== 202.25) {
		contador = 1;
		valorAtualizado = 202.25;
	}
	quantidadeDoProduto.innerText = contador;
	areaValorDoProduto.innerText = `R$ ${valorAtualizado.toString().replace(".", ",")}`;
});

btnQuantidadeMais.addEventListener("click", () => {
	let contador = +quantidadeDoProduto.innerText + 1;
	let valorAtualizado = valorDoProduto * contador;
	quantidadeDoProduto.innerText = contador;
	areaValorDoProduto.innerText = `R$ ${valorAtualizado.toString().replace(".", ",")}`;
});