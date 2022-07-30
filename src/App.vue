<template>
  <div  :data-mode="dataMode" class="calculator-box">
    <ModeChangersBox @mode-changed="changeDataMode"/>
    <HistoryBox @line-selected="HistoryLineSelected" :historyArray="historyArray" />
    <ResultBox 
        v-model:equationResult="equationResult"
       :equationString="equationString" 
       :equationResult="equationResult" 
       :resultIsReady="resultIsReady" 
       @request-to-new-result="getResult" />
    <ButtonsBox @new-btn-pressed="getClickedBtn" :toggleNegativeValue="toggleNegativeValue" />
  </div>
</template>

<script>
import CalculatorClass from './OwnLibraries/CalculatorClass'; 
import HistoryBox from './components/HistoryBox.vue';
import ModeChangersBox from './components/ModeChangersBox.vue';
import ResultBox from './components/ResultBox.vue';
import ButtonsBox from './components/ButtonsBox.vue';

export default { 
  data : function(){
    return {
      //ModeChangersBox component props
      dataMode : "dark",
      //Buttons component props
      clickedBtnValue : "",
      toggleNegativeValue : false,
      //result component props
      equationString : "",
      equationResult : "",
      resultIsReady : false, 
      //history component props
      historyArray : [],
    }
  }, 
  watch : {
    equationResult : function(newValue){    
       this.resultIsReady = newValue !== "" ? true : false;
    }
  },
  methods:{ 
    getClickedBtn : function(clickedBtnValue){  
      this.equationString  = "" ;
      if(clickedBtnValue == "="){this.getResult(this.equationResult); return;}
      if(clickedBtnValue == "AC"){
        this.equationString = "";
        this.equationResult = "";
        return;
      }  
      if(clickedBtnValue == "+/-"){  
        if(this.toggleNegativeValue){ 
          this.equationResult = this.equationResult.slice(0 , this.equationResult.length - 5) ;    
        }else{  
          this.equationResult += "(-1)×";   
        } 
        this.toggleNegativeValue = !this.toggleNegativeValue; 
        return; 
      } 
      this.equationResult += clickedBtnValue;   
      this.toggleNegativeValue = false;
    }, 
    //this method will be change color mode
    changeDataMode : function(activeMode){ 
      this.dataMode =  activeMode;
    },
    //this method will receive the values from result input when it request to calculate a new equation ... and set the values into
    //data properities (equationResult , equationString) these are important for other components (like history component)
    getResult : function(newEquationString){  
      let tempEq = CalculatorClass.replaceCharactersToCalculating(newEquationString);
      let result = CalculatorClass.getEquationValue(tempEq);  
      if(result){
        this.equationResult = result; 
        this.equationString = newEquationString;
        return this.appendLineToHistory({Equation : this.equationString , answer : this.equationResult});  
      }
        this.equationResult = ""; 
        this.equationString = "Wrong Entry"; 
    },
    //this method will append a new history line if history array has less than 3 lines .... else it will replace 1st old line with the new
    appendLineToHistory : function(lineOb){
      if(this.historyArray.length < 3){
        return this.historyArray.push(lineOb);
      } 
      return this.historyArray[0] = lineOb;
    },
    //method to set the selected history values to input , and its equation string part
    HistoryLineSelected : function(line){ 
      this.equationString = line.Equation;
      this.equationResult = line.answer; 
    }
  },
  components : {
     HistoryBox , ModeChangersBox , ResultBox , ButtonsBox
  }

}
</script>

<style> 
*{
    box-sizing: border-box;
}
div.calculator-box{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600; 
    width:300px;
    height:550px;
    margin:20px auto; 
    overflow: hidden;
    position: relative; 
    border-radius:40px;
}

div.calculator-box:after{
    content:"";
    display: block;
    position: absolute;
    left:50%;
    bottom:5px;
    width:50%;
    height:3px;
    transform: translateX(-50%);
    border-radius:3px;
}
 div.calculator-box input{ 
    font-size: 18px;
    cursor:pointer;    
    outline: none;
    border:none;
}
</style>
