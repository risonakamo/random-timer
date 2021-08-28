<script lang="ts">
  import "./timer-input.less";
  import cx from "classnames";

  import {addInputToTimerStr,backspaceTimerStr,convertToArrayTimerStr} from "lib/timer-string";

  var inEditing:boolean=false;
  var topClass:Object;
  var timeValue:string="";

  var theTimerElement:HTMLDivElement;

  /** on focus, enter editing mode */
  function h_focus()
  {
    inEditing=true;
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

    else if (e.key=="Enter")
    {
      theTimerElement.blur();
    }

    else
    {
      timeValue=addInputToTimerStr(timeValue,e.key);
    }

    console.log("new time value",timeValue);
  }

  $: topClass={
    editing:inEditing
  };
</script>

<div class={cx("timer-input",topClass)} on:focus={h_focus} on:blur={h_blur} tabindex="0"
  on:keydown={h_key} bind:this={theTimerElement}
>
  <span>5</span>
  <span class="small-digit">m</span>
  <div class="digit-spacer"></div>
  <span>00</span>
  <span class="small-digit">s</span>
</div>