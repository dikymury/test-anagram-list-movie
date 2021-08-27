<template>
  <div class="detail">
    <ModalImage v-show="showModal" :image="data.Poster != 'N/A' ? data.Poster : '' " @poweroff="showModal = false" />
    <div class="detail-top">
        <div class="detail-img" @click="showModal=true">
            <img src="../assets/images/noimage.png" v-if="data.Poster == 'N/A'" alt="">
            <img :src="data.Poster" v-else :alt="data.Title">
        </div>
        <div class="detail-movie">
            <h1 class="dm-title">
                {{ data.Title }}
            </h1>
            <div class="dm-row">
                <div class="dm-drow">
                    <div class="drow-title">
                        <i class="feather icon-dollar-sign" style="padding:0px"></i> Total Box Office
                    </div>
                    <div class="drow-content">
                        {{data.BoxOffice}}
                    </div>
                </div>
                <div class="dm-drow" v-for="(y,i) in data.Ratings" :key="i">
                    <div class="drow-title">
                        {{y.Source}}
                    </div>
                    <div class="drow-content">
                        {{y.Value}}
                    </div>
                </div>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-users" style="padding:0px"></i> Actors</h3>
                <p>{{ data.Actors }}</p>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-clock" style="padding:0px"></i> Year</h3>
                <p>{{ data.Year }}</p>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-award" style="padding:0px"></i> Awards</h3>
                <p>{{ data.Awards }}</p>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-map-pin" style="padding:0px"></i> Country</h3>
                <p>{{ data.Country }}</p>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-activity" style="padding:0px"></i> Genre</h3>
                <p>{{ data.Genre }}</p>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-globe" style="padding:0px"></i> Language</h3>
                <p>{{ data.Language }}</p>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-calendar" style="padding:0px"></i>  Released</h3>
                <p>{{ data.Released }}</p>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-cast" style="padding:0px"></i>  Director</h3>
                <p>{{ data.Director }}</p>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-star" style="padding:0px"></i> Metascore</h3>
                <p>{{ data.Metascore }}</p>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-briefcase" style="padding:0px"></i> Production</h3>
                <p>{{ data.Production }}</p>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-clock" style="padding:0px"></i> Runtime</h3>
                <p>{{ data.Runtime }}</p>
            </div>
            <div class="dm-line">
                <h3><i class="feather icon-airplay" style="padding:0px"></i> Type</h3>
                <p>{{ data.Type }}</p>
            </div>
        </div>
    </div>
    <div class="detail-bottom">
        <div class="detail-plot">
            {{data.Plot}}
        </div>
    </div>
  </div>
</template>
<script>
import ModalImage from '@/components/ModalImage.vue'
export default {
    name:'MovieDetail',
    components:{
        ModalImage
    },
    data() {
        return {
            showModal:false
        }
    },
    computed:{
        data(){
            return this.$store.state.detailMovie
        }
    },
    created(){
        this.$store.dispatch('getDetailMovie',this.$route.params.id)
    }
}
</script>