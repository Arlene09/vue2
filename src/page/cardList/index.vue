<template>
  	<div class="card_list_container">
        <p>test</p>
    </div>
</template>

<script>
    import { getCardList} from 'src/service/getData'
    import {getStore, setStore, removeStore} from 'src/config/mUtils'

    export default {
    	data(){
            return{
                
            }
        },

        mounted(){
            
        },

        components:{
        },

        computed:{

        },
        created(){
            this.getCardListData();
        },
        methods:{
            
            async getCardListData(){
                let res = await getCardList();
            },
            
        }
    }

</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
   .card_list_container{
        background-color: skyblue;
        p{
            color: red;
        }
   }
</style>
