
export default class Calculator{
       
    //this method used to get value of equation string that be received
     static getEquationValue = function(Equation){
        try{  
            return eval(Equation);
        }catch(e){
            return false;
        }
     } 

     //this method is used to filtering the equation string before calculation and printing operations
     static replaceCharactersToCalculating = function(Equation){
        return Equation.replace(/×/gi , "*").replace(/÷/gi , "/").replace("+/-" , "(-1)*").replace(/%/gi , "/100").replace(/[a-zA-Z]/gi , ""); 
     }
  
}