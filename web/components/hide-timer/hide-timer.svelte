<script lang="ts">
  import TimerDisplay from "components/timer-display/timer-display.svelte";

  var hidden:boolean=true;

  import "./hide-timer.less";
</script>

<div class="hide-timer">
  {#if !hidden}
    <TimerDisplay timeValue="102" minDigitMode={true}/>
  {:else}
    <div class="hide-block">
      <p>timer running</p>
    </div>
  {/if}
</div>