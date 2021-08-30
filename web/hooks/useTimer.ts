import {writable,derived} from "svelte/store";

/** timer hook. provides a timer state that increments every second. provides some functions
 * to control the timer */
export default function useTimer()
{
    var timerValue=writable<number>(0);
    var timerTriggered=derived(timerValue,(timeValue:number):boolean=>{
        return timeValue==0;
    });

    var theTimer:number|undefined;

    /** stop timer below 0 */
    timerValue.subscribe((value:number):void=>{
        if (value<=0)
        {
            resetTimer();
        }
    });

    /** being the timer */
    function startTimer():void
    {
        theTimer=setInterval(()=>{
            timerValue.update((s:number):number=>{
                return s-1;
            });
        },1000);
    }

    /** stop timer without resetting value */
    function stopTimer():void
    {
        clearInterval(theTimer);
        theTimer=undefined;
    }

    /** stop timer and reset timer value */
    function resetTimer():void
    {
        stopTimer();
        timerValue.set(0);
    }

    return [
        timerValue,
        timerTriggered,
        startTimer,
        stopTimer,
        resetTimer
    ] as const;
}