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

@Component
export default class NumberToRoman extends Vue {
  roman: string = ''
  number: string = ''

  async convert(): Promise<void> {
    if(! this.number.length) {
      this.roman = ''
      return
    }
    try {
      const { data } = await axios.post('http://localhost:3000/converters/numberToRoman', { number: +this.number });
      this.roman = data;
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