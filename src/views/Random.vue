<template>
    <div>
        <p>{{drink.strDrink}}</p>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data: function(){
        return{
            drink:{}
        }
    },
    mounted: function(){
        axios
            .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(response => ( this.$router.push({ name: 'DrinkView', params: { id: response.data.drinks[0].idDrink } })))
    }
}
</script>

<style scoped>

</style>