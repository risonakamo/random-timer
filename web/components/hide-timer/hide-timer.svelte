<script lang="ts">
  import TimerDisplay from "components/timer-display/timer-display.svelte";

  import "./hide-timer.less";

  var hidden:boolean=true;
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