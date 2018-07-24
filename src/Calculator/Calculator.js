import React from 'react';

//konstanty zastupující číselné hodnoty operací
const SUM = 0;
const SUB = 1;
const MUL = 2;
const DIV = 3;

//funkce počítající na základě hodnoty operátoru výsledek
function count(a,b,operator){
    if(operator === SUM){
        return Number(a)+Number(b);
    }
    else if(operator === SUB){
        return Number(a)-Number(b);
    }
    else if(operator === MUL){
        return Number(a)*Number(b);
    }
    else if(operator === DIV){
        if(Number(b) === 0){
            return "nekonečno";
        }
        return Number(a)/Number(b);
    }
    else {
        return Number(a)+Number(b);
    }
    
}

//Hlavní funkce komponenty, která je aktivována tagem <Calculator /> v souboru App.js.
//props je proměnná, v níž jsou uloženy parametry a jejich hodnoty, se kterými má být komponenta použita.
const calculator = (props) => {
    return (
        <div>
            <div className="row mt-3">
                {/* Políčka, do nichž je možné psát číselnou hodnotu, se kterou se bude počítat.
                    Při každé změně políčka se změní hodnota proměnné nesoucí číslo, se kterým se počítá. */}
                <div className="col-6">
                    <input type="number" className="form-control" onChange={props.firstChanged} 
                        value={props.firstNumber} placeholder="Napište číslo" />
                </div>
                <div className="col-6">
                    <input type="number" className="form-control" onChange={props.secondChanged} 
                        value={props.secondNumber} placeholder="Napište číslo" />
                </div>
            </div>

            <div className="mt-3">
                <p>Výsledek: </p>
                 {/* Volání funkce, která s dvěma zvolenými čísly provede vybranou početní operaci. */}
                <h2 className="text-center">{count(props.firstNumber, props.secondNumber, props.operator)}</h2>
            </div>
        </div>
    )
}

export default calculator;