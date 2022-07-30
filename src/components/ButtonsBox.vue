<template>
      <div class="buttons-box">
        <div class="buttons-inner-box">
            <div class="operators-first-box operators-box operators-btn-group-bg">    
                    <input  type="button" v-for="op in horizontalOperators" :key="op.id" @click="changeClickedValue(op.value)" :value="op.value" :class="op.class"> 
            </div>
            <div class="numbers-box numbers-btn-group-bg"> 
                <div class="row">
                    <input type="button"  v-for="n in 3" @click="changeClickedValue(n)" :value="n">  
                </div>   
                <div class="row">
                    <input type="button" v-for="n in 3" @click="changeClickedValue(n + 3)" :value="n + 3">
                </div> 
                <div class="row">
                    <input type="button" v-for="n in 3" @click="changeClickedValue(n + 6)" :value="n + 6"> 
                </div>
                <div class="row">
                    <input type="button" @click="changeClickedValue('.')" value="." >
                    <input type="button" @click="changeClickedValue('0')" value="0" >
                    <input type="button" @click="changeClickedValue('00')" value="00" >
                </div>
            </div>
        </div>
        <div class="buttons-inner-box">
            <div class="operators-last-box operators-box operators-btn-group-bg">  
                <input  type="button" v-for="op in verticalOperators" :key="op.id" @click="changeClickedValue(op.value)" :value="op.value" :class="op.class"> 
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name : "ButtonsBox", 
    props : ['toggleNegativeValue'],
    data : function(){
        return { 
            verticalOperators :  [{value : "÷" , class : []} ,{value : "×" , class : []} ,{value : "-" , class : []} ,{value : "+" , class : []} , {value :"=" , class : ["EquialOperator" , " singleTask"]}],
            horizontalOperators :  [{value : "AC" , class :["resetOperator" , " singleTask"]} ,{value : "+/-" , class : ["NegativeToggleOperator " ,  " singleTask "]} ,{value : "%" , class : []} ],  
            
        }
    }, 
    methods : {
        changeClickedValue : function(btnValue){ 
             this.$emit('new-btn-pressed' , btnValue.toString());
        }  
    }
}
</script>

<style scoped>
 
    div.buttons-box{
        position: relative;
        display: flex;
        justify-content: space-around;
        font-size: 26px;
        height:60%; 
        padding:15px;
        border-radius: 25px; 
    } 
    div.buttons-inner-box:first-of-type{
        width:65%;
    }
    div.buttons-inner-box:first-of-type  div.row{ 
        display: flex;
        justify-content: space-around; 
        width:100%;
    }
    div.buttons-inner-box:first-of-type  input{   
        margin:5px auto; 
        width:30%; 
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    div.buttons-inner-box:first-of-type > div.operators-first-box {  
        border-radius: 40px; 
    }
    div.buttons-inner-box:first-of-type > div.operators-first-box input{ 
        height:35px;
    }
    div.buttons-inner-box:first-of-type > div.numbers-box { 
        border-radius: 40px;
        padding:10px;
    }

    div.buttons-inner-box:first-of-type > div.numbers-box input{  
        border-radius:50%;   
        height:50px;
    }
    div.buttons-inner-box:last-of-type{
        width:20%;
    }
    div.buttons-inner-box:last-of-type > div.operators-last-box{
        height:100%;
        border-radius: 40px;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-around;
    }
    div.buttons-inner-box:last-of-type > div.operators-last-box input{
        width:80%
    }
</style>