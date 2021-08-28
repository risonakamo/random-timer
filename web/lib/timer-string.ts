// timer string library

/** add a value to timer string, returning new timer string value. returns the same string if the
 *  input was invalid */
export function addInputToTimerStr(timerstring:string,input:string):string
{
    if (!isValidTimerStrInput(input))
    {
        return timerstring;
    }

    // limit to length 6 for now
    if (timerstring.length>=6)
    {
        return timerstring;
    }

    // if just a single 0 character, reset to empty string
    if (timerstring=="0")
    {
        return "";
    }

    return timerstring.concat(input);
}

/** perform backspace on timer str */
export function backspaceTimerStr(timerstring:string):string
{
    return timerstring.slice(0,-1);
}

/** check if input string is valid timer string input (can only be numbers) */
function isValidTimerStrInput(input:string):boolean
{
    return parseInt(input)!=NaN && input.length==1;
}