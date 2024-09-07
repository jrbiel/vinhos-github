//console.log(dados[2].titulo);
// comentário

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos
    console.log(section); // Verifica se a seção foi encontrada não precisa mais
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value     // js não aceita caracterios especiais para variáveis
    console.log(campoPesquisa);
    // se o campoPesquisa for string sem nada comparar 2 iguais == e retorn finaliza
      if(campoPesquisa == "") {
          section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome de um vinho ou país</p>"
          return
      }

      campoPesquisa = campoPesquisa.toLowerCase()   // tranaforma tudo em letra minuscula

    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let titulo = "";
    let descricao = "";
    let harmonizacao = "";

    // Itera sobre cada dado na lista de dados e adiciona um elemento HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      harmonizacao = dado.harmonizacao.toLowerCase()

      //se titulo includes capoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || harmonizacao.includes(campoPesquisa)) {
            // Crie um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2> 
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao} </p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
      }
}
  
      if (!resultados) {
        resultados = "<p> Nada foi encontrado</p>"    
      }
  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}
// crase;