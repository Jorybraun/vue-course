<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['tones'],
  computed: {
        labels() {
            return this.tones.map((tone) => tone.tone_name);
        },
        data() {
            return this.tones.map((tone) => tone.score);
        }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Emotions',
          backgroundColor: '#f87979',
          data: this.data
        }
      ]
    })
  }
}
</script>
