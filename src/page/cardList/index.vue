<template>
  	<div class="card_list_container">
        <head-top head-title="卡片列表" go-back='true'></head-top>
        <p>test</p>
        <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
    </div>
</template>

<script>
    import { getCardList} from 'src/service/getData'
    import {getStore, setStore, removeStore} from 'src/config/mUtils'
    import headTop from 'src/components/header/head'
    import alertTip from 'src/components/common/alertTip'

    export default {
    	data(){
            return{
                showAlert: true,
                alertText: '弹框提示'
            }
        },

        mounted(){
            
        },

        components:{
            headTop,
            alertTip
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
        padding-top: 10rem;
        background-color: skyblue;
        p{
            color: red;
        }
   }
</style>
