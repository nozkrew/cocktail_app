<template>
    <div>
        <h1>Par categorie | <small>{{category}}</small></h1>
        <div class="row">
            <div class="col-md-2 mb-3" v-for="drink in drinks" :key="drink.idDrink">
            <Drink :name=drink.strDrink :id=drink.idDrink :thumb=drink.strDrinkThumb />
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import Drink from '../components/Drink'

export default {
    data(){
        return {
            drinks: [],
            category: ""
        }
    },
    components:{
        Drink
    },
    mounted(){

        this.category = this.$route.params.category.split('_').join(' ')

        axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+this.$route.params.category)
        .then(response => (this.drinks = response.data.drinks))
    }
}
</script>