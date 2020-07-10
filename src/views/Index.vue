<template>
  <div>

      <div v-show="categories">
        <h2>Trouver un cocktail par categories</h2>

        <router-link v-for="category in sortCategories" :key="category.id" type="button" class="btn btn-primary btn-sm ml-1 mr-1 mb-1" :to="{ name: 'ByCategoryView', params: { category: category.strCategory.split(' ').join('_') } }">
          {{category.strCategory}}
        </router-link>
      </div>

      <div v-show="ingredients">
        <h2>Trouver un cocktail par ingrédients</h2>

        <router-link v-for="ingredient in sortIngredients" :key="ingredient.id" type="button" class="btn btn-primary btn-sm ml-1 mr-1 mb-1" :to="{ name: 'ByIngredientView', params: { ingredient: ingredient.strIngredient1.split(' ').join('_') } }">
          {{ingredient.strIngredient1}}
        </router-link>
      </div>

      <h2>Rechercher un cocktail</h2>
      <input id="search" v-model="search" class="form-control" placeholder="Commencez à écrire le nom d'un cocktail ...">

      <div class="row mt-3">
        <div class="col-md-2 mb-3" v-for="drink in drinks" :key="drink.idDrink">
          <Drink :name=drink.strDrink :id=drink.idDrink :thumb=drink.strDrinkThumb />
        </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios'
import Drink from './../components/Drink'

export default {
  name: "Index",
  components:{
    Drink
  },
  data: function(){
    return{
      search: "",
      drinks: [],
      ingredients: [],
      categories: []
    }
  },
  watch:{
    search(value){
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+value)
        .then(response => (this.drinks = response.data.drinks))
    }
  },
  computed:{
    sortIngredients: function(){
      function compare(a, b) {
        
        const bandA = a.strIngredient1.toUpperCase()
        const bandB = b.strIngredient1.toUpperCase()

        if (bandA > bandB) {
          return 1;
        } else if (bandA < bandB) {
          return -1;
        }
        return 0;
      }

      //Créer une copie du tableau pour ne pas modifier l'original
      var copy = [...this.ingredients]

      return copy.sort(compare)
    },
    sortCategories: function(){
      function compare(a, b) {
        
        const bandA = a.strCategory.toUpperCase()
        const bandB = b.strCategory.toUpperCase()

        if (bandA > bandB) {
          return 1;
        } else if (bandA < bandB) {
          return -1;
        }
        return 0;
      }

      //Créer une copie du tableau pour ne pas modifier l'original
      var copy = [...this.categories]

      return copy.sort(compare)
    } 
      
  },
  mounted(){

    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then(response => (this.ingredients = response.data.drinks))

      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then(response => (this.categories = response.data.drinks))

    axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then(response => (this.drinks = response.data.drinks))
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
