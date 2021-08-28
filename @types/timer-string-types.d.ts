interface TimerStrDigit
{
    value:string
    style:TimerStrDigitStyle
    active:boolean
}

type TimerStrDigitStyle="number"|"text"|"space"