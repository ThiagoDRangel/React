#ct-catalog-section {
  padding: 40px 0;
}

.ct-catalog-main {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

.ct-search-bar-container {
  margin-bottom: 40px;
}

.ct-catalog-cartds-container {
  display: flex;
  flex-wrap: wrap; /* Permite que os Cards quebrem para a próxima linha quando não couberem mais na largura da tela */
  justify-content: flex-start; /* Alinhamento à esquerda */
}

.ct-catalog-cartds-container .ct-card {
  flex-basis: calc(33.33% - 20px); /* Define a largura dos cartões com margens */
  margin-right: 20px; /* Espaço entre os Cards */
  margin-bottom: 20px; /* Espaço abaixo dos Cards */
}

.ct-container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .ct-catalog-cartds-container .ct-card {
    flex-basis: calc(50% - 20px); /* Em dispositivos móveis, 2 cartões por linha */
  }
}

@media (max-width: 576px) {
  .ct-catalog-cartds-container .ct-card {
    flex-basis: 100%; /* Em dispositivos menores, 1 cartão por linha */
  }
}
