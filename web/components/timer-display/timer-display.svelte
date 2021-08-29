<script lang="ts">
  import cx from "classnames";

  import {convertToArrayTimerStr} from "lib/timer-string";

  import "./timer-display.less";

  export var timeValue:string;
  export var minDigitMode:boolean=false;

  var timerDigits:TimerStrDigit[]=[];

  /** from digit data, return cx class modifier */
  function digitNotFadeClass(digitData:TimerStrDigit):Object
  {
    return {
      "not-faded":digitData.active
    };
  }

  $: timerDigits=convertToArrayTimerStr(timeValue,!minDigitMode);
</script>

<div class="timer-display">
  {#each timerDigits as digit}
    {#if digit.style=="number"}
      <span class={cx(digitNotFadeClass(digit),"large-digit")}>{digit.value}</span>
    {:else if digit.style=="text"}
      <span class={cx(digitNotFadeClass(digit),"small-digit")}>{digit.value}</span>
    {:else if digit.style=="space"}
      <div class="digit-spacer"></div>
    {/if}
  {/each}
</div>