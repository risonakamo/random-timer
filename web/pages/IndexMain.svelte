<script lang="ts">
  import _ from "lodash";

  import TimerInput from "components/timer-input/timer-input.svelte";
  import HideTimer from "components/hide-timer/hide-timer.svelte";
  import Button_81 from "components/button-81/button-81.svelte";

  import useTimer from "hooks/useTimer";

  import {timerStrToSeconds,secondsToTimerStr} from "lib/timer-string";

  import "./index.less";

  const [timerNumberValue,timerTriggered,startTimer,stopTimer,resetTimer]=useTimer();

  /** states */
  // value of the main timer
  var timerValue:string="0";

  // value of the min time input
  var minTimeInput:string="";

  // value of the max time input
  var maxTimeInput:string="";

  // value of the timer urls box
  var timerUrls:string="";

  /** using the current timer values, set the main timer, hide the timer, and begin the timer */
  function beginTimer():void
  {
    var randomTimeValue:number=_.random(
      timerStrToSeconds(minTimeInput),
      timerStrToSeconds(maxTimeInput)
    );

    $timerNumberValue=randomTimeValue;

    stopTimer();
    startTimer();
  }

  /** handle start click button. begin the timer */
  function h_startClick():void
  {
    beginTimer();
  }

  $: timerValue=secondsToTimerStr($timerNumberValue);
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