<script lang="ts">
  import TimerDisplay from "components/timer-display/timer-display.svelte";

  import "./hide-timer.less";
</script>

<div class="hide-timer">
  <TimerDisplay timeValue="102" minDigitMode={true}/>
</div>