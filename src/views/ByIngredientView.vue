<template>
    <div>
        <h1>Par ingrédient | <small>{{ingredient}}</small></h1>
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
            ingredient: ""
        }
    },
    components:{
        Drink
    },
    mounted(){

        this.ingredient = this.$route.params.ingredient.split('_').join(' ')

        axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+this.$route.params.ingredient)
        .then(response => (this.drinks = response.data.drinks))
    }
}
</script>