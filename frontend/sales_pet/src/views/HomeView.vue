
<template >
    <div class="home-view container">

        <!-- <img :src="'/src/assets/image/' + 'MEME0001.jpg'" alt=""> -->

        <div class="sections row">
            <template v-for="(pet, index) in pets" :key="index">

                <div v-if="index < 20" class="card" style="width: 16rem;">
                    <img class="card-img-top" :src="path + pet.image" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ pet.name }} - {{ pet.ID }}</h5>
                        <p class="card-text">{{ pet.price }}</p>
                        <span>
                            <i class="id-pet">Giống: {{ pet.gender }}</i>
                        </span>
                    </div>
                </div>

            </template>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import staticPath from '../assets/staticPath';

export default {
    data() {
        return {
            // img: require(`../assets/image/${pets.image}`),
            pets: []
        }
    },

    computed: {
        path() {
            return staticPath
        }
    },

    created() {
        axios.get('http://localhost:3000/')
            .then(res => {
                this.pets = res.data.pets;
            })
            .catch(err => console.log(err));
    },
}
</script>


<style scoped>
    .card {
        display: inline-block;
        margin: 0 12px 8px;
    }
    .card-img-top{
        height: 412px;
        width:  260px;
        justify-content: center;
    }
</style>
