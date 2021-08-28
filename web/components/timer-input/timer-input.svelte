<script lang="ts">
  import "./timer-input.less";
  import cx from "classnames";

  import {addInputToTimerStr,backspaceTimerStr,convertToArrayTimerStr} from "lib/timer-string";

  var inEditing:boolean=false;
  var topClass:Object;
  var timeValue:string="";
  var timerDigits:TimerStrDigit[]=[];
  var waitingForFirstInput:boolean=false;

  var theTimerElement:HTMLDivElement;

  /** on focus, enter editing mode */
  function h_focus()
  {
    inEditing=true;
    waitingForFirstInput=true;
  }

  /** exit editing mode without saving */
  function h_blur()
  {
    inEditing=false;
  }

  /** handle key inputs. modify the time value. enter defocuses the input. */
  function h_key(e:KeyboardEvent):void
  {
    if (e.key=="Backspace")
    {
      timeValue=backspaceTimerStr(timeValue);
    }

    else if (e.key=="Enter" || e.key=="Escape")
    {
      theTimerElement.blur();
    }

    else
    {
      // if first input after having focused on the input box, the first input should clear the current
      // timer value
      if (waitingForFirstInput)
      {
        waitingForFirstInput=false;
        timeValue="";
      }

      timeValue=addInputToTimerStr(timeValue,e.key);
    }
  }

  $: topClass={
    editing:inEditing
  };

  $: timerDigits=convertToArrayTimerStr(timeValue,true);
</script>

<div class={cx("timer-input",topClass)} on:focus={h_focus} on:blur={h_blur} tabindex="0"
  on:keydown={h_key} bind:this={theTimerElement}
>
  {#each timerDigits as digit}
    {#if digit.style=="number"}
      <span>{digit.value}</span>
    {:else if digit.style=="text"}
      <span class="small-digit">{digit.value}</span>
    {:else if digit.style=="space"}
      <div class="digit-spacer"></div>
    {/if}
  {/each}
</div>