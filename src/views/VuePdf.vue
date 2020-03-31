<template>
  <div class="container">
    <div class="back">{{currentPage}}/{{numPages}}</div>
    <div class="pdf-container">
      <!-- <pdf src="./pdf/relativity.pdf"></pdf> -->
      <pdf
        v-for="i in numPages"
        :key="i"
        :src="src"
        :page="i"
        style="display: inline-block; width: 100%"
      ></pdf>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

let loadingTask = pdf.createLoadingTask('./pdf/relativity.pdf');
// let loadingTask = pdf.createLoadingTask('./pdf/relativity.pdf', {rangChunckSize: 65536*16});
export default {
  name: 'Home',
  components: {
    pdf,
  },
  data() {
    return {
      currentPage: 0,
      src: loadingTask,
			numPages: undefined,
    }
  },
  mounted() {
		this.src.then(pdf => {
      console.log(pdf)
			this.numPages = pdf.numPages
		})
	},
  methods: {
  },
}

</script>
<style lang="scss" scoped>
.container {

}
</style>