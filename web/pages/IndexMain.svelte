<script lang="ts">
  import TimerInput from "components/timer-input/timer-input.svelte";
  import HideTimer from "components/hide-timer/hide-timer.svelte";
  import Button_81 from "components/button-81/button-81.svelte";

  import "./index.less";

  var timerValue:string="12";
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
    <HideTimer timeValue={timerValue} hidden={true}/>
  </div>

  <div class="control-zone">
    <Button_81 text="START"/>
  </div>
</div>