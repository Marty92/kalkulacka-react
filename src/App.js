import React, { Component } from 'react';
import Calculator from './Calculator/Calculator';

class App extends Component {
  //proměnné pro uchování čísel a operátoru
  firstNumber = 0;
  secondNumber = 0;
  operator = 0;

  /*
    Funkce, která uloží do proměnné první číselnou hodnotu.
    Zajištění 'two-way data bindingu' (nevím, jak to rozumně nazvat česky), Angular se o tohle stará napůl automaticky.
    V podstatě díky tomuto způsobu se hodnota proměnné přenáší hned, je možné zobrazit průběžný výsledek, 
    nemusí se čekat na zmáčknutí tlačítka.
    Další dvě funkce se starají o to samé, jen se aktualizuje proměnná nesoucí druhé číslo a operátor.
  */
  firstNumberChangeHandler = (event) => {
    this.firstNumber = event.target.value;
    this.setState({});
  }
  secondNumberChangeHandler = (event) => {
    this.secondNumber = event.target.value;
    this.setState({});
  }

  switchOperationHandler = (operator) => {
    this.operator = operator;
    this.setState( {} );
  }


  render() {
    return (
      <div className="container">
        <div className="card shadow col-md-4 col-sm-6 col-12 mt-3 ml-auto mr-auto">
          <h1 className="text-center">Kalkulačka</h1>
          <div className="btn-group ml-auto mr-auto" role="group">
            {/* Tlačítka pro jednotlivé operátory, klikem se zavolá funkce měnící hodnotu proměnné "operator". */}
            <button className="btn btn-lg btn-info m-1" onClick={() => this.switchOperationHandler(0)}> + </button>
            <button className="btn btn-lg btn-info m-1" onClick={() => this.switchOperationHandler(1)}> - </button>
            <button className="btn btn-lg btn-info m-1" onClick={() => this.switchOperationHandler(2)}> * </button>
            <button className="btn btn-lg btn-info m-1" onClick={() => this.switchOperationHandler(3)}> / </button>
          </div>
          {/* Volání komponenty "Calculator" s potřebnými parametry. 
              firstChanged a secondChanged pracují s výše popsanou funkcí. V podstatě díky tomu je možné 
              ukládat průběžně se měnící hodnotu formulářového políčka a následně s ní pracovat. 
          */}
          <Calculator operator={this.operator}
            firstNumber={this.firstNumber} firstChanged={this.firstNumberChangeHandler}
            secondNumber={this.secondNumber} secondChanged={this.secondNumberChangeHandler}/>      
        </div>
      </div>
    );
  }
}

export default App;


