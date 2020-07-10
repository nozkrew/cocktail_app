<template>
    <div>
        <div class="card">
            <img :src=thumb class="card-img-top" alt="Image cocktail">
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
                <router-link class="btn btn-primary" :to="{ name: 'DrinkView', params: { id: id } }">Voir</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Drink",
    props: [
        'name',
        'id',
        'thumb'
    ],
}
</script>

<style scoped>

</style>