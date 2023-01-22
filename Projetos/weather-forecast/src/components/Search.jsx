import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.searchInput = this.searchInput.bind(this);

    this.state = {
        key: '',
        cidade: '',
        pais: '',
        temp: '',
        ico: '',
      }
  }

  searchInput(e) {
    e.preventDefault();
    const key = document.querySelector('input[name=searchInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${key}&appid=bae345b78e7c5ff9ce9494d7e171b4f1&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { main, name, sys, weather } = data;
        console.log(weather);
        if (sys !== undefined) {
          if (weather !== undefined) {
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/
              ${weather[0]["icon"]}.svg`;
            this.setState({ 
             temp: main.temp,
             pais: sys.country,
             cidade: name,
             ico: icon,
            });
          }
        }else {
          this.setState({
            setCidade: '',
          });
        }
      });
  }
  
  render() {
    const { cidade, pais, temp, ico } = this.state;
    return (
        <div className="searchWraper">
            <div className="search">
                <h2>Previsão do tempo </h2>
                <form onSubmit={ (e) => this.searchInput(e) }>
                <input placeholder="Digite a cidade..."  type="text" name="searchInput" />
                <input type="submit" value="Pesquisar" />
                </form>
            
            </div>

            {
                (cidade!== "")?
                <div dangerouslySetInnerHTML={{__html: cidade}} />:
                <div style={{padding:'8px'}}>Resultado...</div>
            }
            <p>Cidade: {cidade}</p>
            <span>País: {pais}</span>
            <p>Temperatura: {temp}</p>
            <img src={ico} alt="país" />
            

        </div>
    );
  }
}

export default Search;
