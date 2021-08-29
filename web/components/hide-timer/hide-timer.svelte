<script lang="ts">
  import TimerDisplay from "components/timer-display/timer-display.svelte";

  import "./hide-timer.less";

  export var timeValue:string;
  export var hidden:boolean=false;
</script>

<div class="hide-timer">
  {#if !hidden}
    <TimerDisplay timeValue={timeValue} minDigitMode={true}/>
  {:else}
    <div class="hide-block">
      <p>timer running</p>
    </div>
  {/if}
</div>