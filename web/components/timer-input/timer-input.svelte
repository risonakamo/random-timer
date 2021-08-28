<script lang="ts">
  import "./timer-input.less";
  import cx from "classnames";

  var inEditing:boolean=false;
  var topClass:Object;
  var timeValue:string="000000";

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

  $:{
    topClass={
      editing:inEditing
    };
  }
</script>

<div class={cx("timer-input",topClass)} on:focus={h_focus} on:blur={h_blur} tabindex="0">
  <span>5</span>
  <span class="small-digit">m</span>
  <div class="digit-spacer"></div>
  <span>00</span>
  <span class="small-digit">s</span>
</div>