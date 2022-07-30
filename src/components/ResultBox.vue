<template>
    <div class="result-box">
        <div class="first-row">
            <span class="EquationString">{{ equationString }}</span>
        </div>
        <div class="second-row">
            <span class="EquialOperatorSpan" >{{resultIsReady ? "=" : ""}}</span>
            <input type="text" class="resultOfStatment" @keyup.enter="setDataToParentProps" :value="equationResult">
        </div>
    </div>
</template>

<script>

export default{
    name : "ResultBox", 
    props : ['equationString' , 'equationResult', 'resultIsReady' ],  
    methods : {
        setDataToParentProps(event){
            let newEquationToCalculation = event.target.value;
            if(newEquationToCalculation != ""){ 
                this.$emit("request-to-new-result" , newEquationToCalculation );    
            }
        }
    }
}
</script>

<style scoped>
    div.result-box{
        height:40%;
        padding:34px 34px 10px;
        display: flex;
        align-content: flex-end;
        flex-wrap: wrap;
    }
    div.result-box > div{
        width:100%;
        text-align: end; 
    } 

    div.result-box > div.second-row{
        display: flex;
        justify-content: space-between;
        padding:10px 0;
    }
    div.result-box > div.second-row span{
        width:10%;
        display: flex;
        align-items: center;
    }
    div.result-box > div.second-row input{
        height:100%; 
        width:90%;
        background-color: transparent;
        cursor: text; 
        text-align: end;  
        font-size:22px
    }
</style>