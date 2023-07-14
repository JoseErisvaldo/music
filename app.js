let favorito = document.querySelector('.favorito')
let container = document.querySelector('#container')

favorito.addEventListener('click',() => {
  let dados = ` <div class="cardFavorito" >
  <div class="dadosCard">
      <div>
          <div class="btnClose" >
              <i class='bx bx-x' ></i>
          </div>
      </div>
      <div class="dadosDash">
          <div class="dashFavorito">
              <h3 class="titleDashCantores">Cantores favorito</h3>
              <h1 class="countCantores">4</h1>
          </div>
          <div class="dashFavorito">
              <h3 class="titleDashCantores">Musicas ouvida este mês</h3>
              <h1 class="countMusicas">4</h1>
          </div>
          
      </div>
      <div class="dadosCounteudo" >
          <div class="cardCouteudo">
              <h2>Ultimo cantor ouvido</h2>
              <div class="card">
                  <img src="./img/gustavoLima.png" alt="Gustavo Lima">
                  <h4 class="cantor">Gustavo Lima</h4>
              </div>
          </div>
          <div class="cardCouteudo">
              <h2>Categorias favoritas</h2>
              <div class="cardCategoria">
                  <div>Sertanejo<img src="./img/sertanejo.png" alt=""></div>
                  <div>Pop<img src="./img/pop.png" alt=""></div>
                  <div>Eletronica<img src="./img/eletronica.png" alt=""></div>
                  <div>Funk<img src="./img/funk.png" alt=""></div>
                  <div>Rave<img src="./img/rave.png" alt=""></div>
              </div>
          </div>
      </div> 
  </div>
</div>
             `

  let element = document.createElement('div')
  element.innerHTML = dados
  container.append(element)
  console.log(element)

})
