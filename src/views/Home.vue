<template>
  <div class="home">
    <h1>Berikut Adalah Hasil Test Untuk Anagram :</h1>
    <p>{{anagramOutput}}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      anagramOutput:[]
    }
  },
  methods: {
    bubbleSort(array) {
      var done = false;
      while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
          if (array[i - 1] > array[i]) {
            done = false;
            var tmp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = tmp;
          }
        }
      }
      return array;
    },
    anagram(){
      const anagrams = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
      const list = []

      anagrams.forEach(anagram => {
        let letters = anagram.split('')
        this.bubbleSort(letters); 
        list[letters] ? list[letters].push(anagram) : list[letters] = [anagram]
      })
      const keys = Object.keys(list);
      this.anagramOutput = [];
      for (let val of keys) {
          this.anagramOutput.push(list[val])
      }
      // console.log(this.anagramOutput) 
    },
  },
  mounted() {
    this.anagram();
  },
}
</script>
