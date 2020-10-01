// Создаем приложение, которое позволяет при помощи ползунков изменить высоту блока. (аля эквалайзер)
// Есть 7 вертикальных блоков, высотой 100-300px.
// Каждый обладает уникальным цветом.
// Под ними 7 регуляторов (input type="range") при перемещении которых меняется высота соответствующего блока.
Vue.component('block', {
    template: `<div class="rectangle" :style="divParams" >
                    
                   <input 
                        type="range"
                        id="line"
                        :min="rectangleSizes.minHeight"
                        :max="rectangleSizes.maxHeight"
                        @input="rectangleSizes.currentHeight=$event.target.value"
                        >
                   <label for="line">Current height : {{rectangleSizes.currentHeight}}</label>
</div> 
                
    `,
    data(){
        return{
            rectangleSizes:{
                minHeight:200,
                maxHeight:900,
                currentHeight:200
            },
        }
    },
    computed: {
        divParams(){
            return{
                height:`${this.rectangleSizes.currentHeight}px`,
                backgroundColor:'#' + Math.floor(Math.random()*16777215).toString(16)
            }

        }
    }
});

let app= new Vue({
    el: '#app',
    },


);
