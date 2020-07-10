<template>
    <div>
        <h1>Sans alcool</h1>
        <div class="row mt-3">
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
        return{
            drinks: []
        }
    },
    components:{
        Drink
    },
    mounted(){
        axios
            .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then(response => (this.drinks = response.data.drinks))
    }
}
</script>