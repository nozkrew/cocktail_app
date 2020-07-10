<template>
    <div>
        <div class="row mt-3">
            <div class="col-md-5">
                <img :src=drink.strDrinkThumb class="img-fluid" alt="Responsive image">
            </div>
            <div class="col-md-7">
                
                <h1>
                    {{drink.strDrink}}
                    <font-awesome-layers v-if="drink.strAlcoholic === 'Non alcoholic' " class="small">
                        <font-awesome-icon icon="glass-martini-alt" />
                        <font-awesome-icon icon="times" class="text-danger" />
                    </font-awesome-layers>
                    <font-awesome-icon v-else icon="glass-martini-alt" class="small" />
                </h1>
                <h2>Ingredients</h2>
                <ul>
                    <li v-show="ingredient" v-for="ingredient in ingredients" :key="ingredient" >
                        <router-link :to="{ name: 'ByIngredientView', params: { ingredient : ingredient } }">{{ingredient}}</router-link>
                    </li>
                </ul>
                <h2>Instructions</h2>
                <p>{{drink.strInstructions}}</p>
                <h2>Informations complémentaires</h2>
                <p>Catégorie : <router-link :to="{ name: 'ByCategoryView', params: { category: drink.strCategory } }">{{drink.strCategory}}</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return{
            drink: {},
            ingredients: []
        }
    },
    mounted(){
        axios
            .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+this.$route.params.id)
            .then(response => (this.drink = response.data.drinks[0]))
    },
    watch:{
        drink(value){
            this.ingredients.push(value.strIngredient1)
            this.ingredients.push(value.strIngredient2)
            this.ingredients.push(value.strIngredient3)
            this.ingredients.push(value.strIngredient4)
            this.ingredients.push(value.strIngredient5)
            this.ingredients.push(value.strIngredient6)
            this.ingredients.push(value.strIngredient7)
            this.ingredients.push(value.strIngredient8)
            this.ingredients.push(value.strIngredient9)
            this.ingredients.push(value.strIngredient10)
            this.ingredients.push(value.strIngredient11)
            this.ingredients.push(value.strIngredient12)
            this.ingredients.push(value.strIngredient13)
            this.ingredients.push(value.strIngredient14)
            this.ingredients.push(value.strIngredient15)
        }
    }
}
</script>