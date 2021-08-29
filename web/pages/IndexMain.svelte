<script lang="ts">
  import TimerInput from "components/timer-input/timer-input.svelte";
  import HideTimer from "components/hide-timer/hide-timer.svelte";

  import "./index.less";
</script>

<div class="main-wrap">
  <div class="main-inputs-zone">
    <div class="time-inputs">
      <h1>Timer Ranges</h1>
      <h2 class="timer-input-header">min</h2>
      <TimerInput tabIndex={1}/>
      <h2 class="timer-input-header">max</h2>
      <TimerInput tabIndex={2}/>
    </div>
    <div class="range-inputs">
      <h1>Timer Urls</h1>
    </div>
  </div>

  <div class="timer-zone">
    <HideTimer/>
  </div>
</div>