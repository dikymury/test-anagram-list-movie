<template>
  <div class="container">
    <h1>List Movies</h1>
    <div class="search">
      <i class="feather icon-search"></i>
      <input type="text" v-model="search" @change="setSearch()" placeholder="Pencarian">
    </div>
    <div class="list-movies">
      <Movie v-for="x in listMovies" :key="x.imdbID" :data="x" />
      <div class="movie-null" v-if="!listMovies.length">
        Tidak Ada Movies, Coba cari di kolom Pencarian dan Enter
      </div>
    </div>
  </div>
</template>
<script>
import Movie from '@/components/Movie.vue'
export default {
  name:'Movies',
  data() {
    return {
      search:[],
      page:0,
      load:false
    }
  },
  components:{
    Movie
  },
  computed: {
    listMovies(){
      return this.$store.state.listMovie;
    },
    countMovies(){
      return this.$store.state.listMovie.length;
    } 
  },
  methods:{
    nextPage(){
      if (window.scrollY > (document.body.offsetHeight - window.outerHeight)) { 
        let calc = 0;
        if(this.countMovies > 0){
          calc = this.countMovies/10;
        }
        if(calc == this.page && this.load == true){
          this.load = false;
          this.page = this.page+1;
          this.$store.dispatch('getListMovie','s='+this.search+'&page='+this.page)
          .then(res =>{
            if(res.data.Search.length > 0){
              this.load = true
            }
          })
        }       
      }
    },
    setSearch(){
      this.$store.commit("CLEAR_LIST_MOVIE")
      this.page = 1;
      this.$store.dispatch('getListMovie','s='+this.search+'&page='+this.page)
      .then(res =>{
        if(res.data.Search.length > 0){
          this.load = true
        }
      })
    },
    initScroll(){
      window.onscroll = this.nextPage()
    }
  },
  created(){
    // this.$store.dispatch('getListMovie','s=batman&page='+this.page)
    window.addEventListener('scroll', this.initScroll);
  },
}
</script>
