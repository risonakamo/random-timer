<script lang="ts">
  import TimerInput from "components/timer-input/timer-input.svelte";
  import HideTimer from "components/hide-timer/hide-timer.svelte";
  import Button_81 from "components/button-81/button-81.svelte";

  import useTimer from "hooks/useTimer";

  import "./index.less";

  const [timerNumberValue,timerTriggered,startTimer,stopTimer,resetTimer]=useTimer();

  var timerValue:string="0";
  var minTimeInput:string="";
  var maxTimeInput:string="";
  var timerUrls:string="";

  /** using the current timer values, set the main timer, hide the timer, and begin the timer */
  function beginTimer():void
  {
    console.log(minTimeInput);
    console.log(maxTimeInput);
  }

  /** handle start click button. begin the timer */
  function h_startClick():void
  {
    beginTimer();
  }
</script>

<div class="main-wrap">
  <div class="main-inputs-zone">
    <div class="time-inputs">
      <h1>Timer Ranges</h1>
      <h2 class="timer-input-header">min</h2>
      <TimerInput tabIndex={1} bind:timeValue={minTimeInput}/>
      <h2 class="timer-input-header">max</h2>
      <TimerInput tabIndex={2} bind:timeValue={maxTimeInput}/>
    </div>
    <div class="range-inputs">
      <h1>Timer Urls</h1>
      <div class="url-input-wrap">
        <textarea class="url-input" bind:value={timerUrls}></textarea>
      </div>
    </div>
  </div>

  <div class="timer-zone">
    <HideTimer timeValue={timerValue} hidden={false}/>
  </div>

  <div class="control-zone">
    <Button_81 text="START" on:click={h_startClick}/>
  </div>
</div>