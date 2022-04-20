<template>
  <v-form class="ma-5">
    <v-card class="pa-2">
      <v-card-title>Number into roman numerals</v-card-title>
      <v-text-field
          class="pa-2"
          type="number"
          v-model="number"
          @keydown.enter.prevent="convert"
          label="Enter a number between 0 and 100"
      />
      <v-btn @click="convert">Convert</v-btn>
      <v-card-text v-if="roman">
        Result : <v-chip>{{ roman }}</v-chip>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import axios from "axios";

// Note : This is a solution with server side input validation only
@Component
export default class NumberToRoman extends Vue {
  roman: string = ''
  number: string = ''

  mounted() {
    const eventSource = new EventSource('/converters/numberToRoman/sub');
    eventSource.onmessage = ({ data }) => {
      this.roman = data
    }
  }

  async convert(): Promise<void> {
    if(! this.number.length) {
      this.roman = ''
      return
    }
    try {
      await axios.post('/converters/numberToRoman', { number: +this.number });
    } catch(e) {
      this.roman = 'Invalid input value (integer 0 - 100)'
    }
  }

}
</script>

<style scoped lang="sass">
.ma-5
  margin: 5rem

.pa-2
  padding: 2rem
</style>