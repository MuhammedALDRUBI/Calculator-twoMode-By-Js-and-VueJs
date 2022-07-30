<template>
   <div class="history" :class="visibility">
        <span @click="ShowHistoryBox" class="historyIcon"> 
            <i class="fa-solid fa-clock-rotate-left"></i>
        </span>
        <span @click="HideHistoryBox" class="closeSpan"><i class="fa-solid fa-circle-xmark"></i></span>
        <h2>History : </h2> 
        <div class="history-box">
            <div class='Equation-history-row' v-for="line in historyArray" :key="line.id">
                <p @click="selectLine(line)" > {{line.Equation}} = {{line.answer}}</p>
            </div>
         </div>
    </div>
</template>

<script>

export default{
    name : "HistoryBox", 
    data : function(){
            return {
                visibility : {hidden : true, visible : false} 
            }
    },
    props : ['historyArray'], 
    methods : {
        HideHistoryBox : function () {  
            this.visibility.hidden   = true;
            this.visibility.visible  = false;
        },
        ShowHistoryBox : function () {  
            this.visibility.hidden   = false;
            this.visibility.visible  = true;
        },
        selectLine : function (line) {   
            this.$emit('line-selected' , line);
            this.HideHistoryBox();
        }
    }
}
</script>

<style scoped>
    div.history { 
        position: absolute;
        top:2.5%;
        left:2.5%;
        transition:.5s transform ease-in-out;
        width:95%;
        height:35%;  
        border-radius:40px;
    } 
    div.history.visible{ 
        transform: translateX(0);
    }
    div.history.hidden{ 
        transform: translateX(105%);
    }
    div.history > span.historyIcon{
        width:30px;
        height:30px;
        position: absolute;
        z-index: 3;
        top:59px;
        left:-50px;
        cursor:pointer;
    } 
    div.history > span.closeSpan{
        width:30px;
        height:30px;
        position: absolute;
        z-index: 3;
        top:20px;
        right:10px;
        cursor:pointer;
    } 

    div.history >  h2{  
        margin:10%;
    }
    div.history > div.history-box{
        width:80%;
        height:80%;
        margin:0 auto;
    }
    div.history > div.history-box div.Equation-history-row{  
        padding:5px 10px;
        margin:10px auto;
        cursor:pointer;
    }
    div.history > div.history-box div.Equation-history-row p{
        margin:0;
    }
</style>