<template>
    <div class="movie" @click="$router.push({name: 'MovieDetail', params:{id:data.imdbID}})"> 
        <div class="movie-img">
            <img src="../assets/images/noimage.png" v-if="data.Poster == 'N/A'" alt="">
            <img :src="data.Poster" v-else :alt="data.Title">
        </div>
        <div class="movie-title">
            {{data.Title}}
        </div>
        <div class="movie-desc">
            <div class="md-atribute">
                <i class="feather icon-airplay"></i>{{data.Type}}
            </div>
            <div class="md-atribute">
                <i class="feather icon-clock"></i>{{data.Year}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data: {
            type: Object
        }
    }
        
}
</script>