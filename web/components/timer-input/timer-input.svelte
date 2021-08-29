<script lang="ts">
  import cx from "classnames";

  import TimerDisplay from "components/timer-display/timer-display.svelte";

  import {addInputToTimerStr,backspaceTimerStr,convertToArrayTimerStr,
    isValidTimerStrInput} from "lib/timer-string";

  import "./timer-input.less";

  /** props */
  export var tabIndex:number;

  /** state */
  var inEditing:boolean=false;
  var topClass:Object;
  var timeValue:string="";
  var waitingForFirstInput:boolean=false;

  /** refs */
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
      if (!isValidTimerStrInput(e.key))
      {
        return;
      }

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
    editing:inEditing,
    "force-fade":waitingForFirstInput
  };
</script>

<div class={cx("timer-input",topClass)} on:focus={h_focus} on:blur={h_blur} tabindex={tabIndex}
  on:keydown={h_key} bind:this={theTimerElement}
>
  <TimerDisplay timeValue={timeValue}/>
</div>