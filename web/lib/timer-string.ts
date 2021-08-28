// timer string library

import _ from "lodash";

const TIME_CHARS:string[]=["h","m","s"];

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

/** convert timer string to renderable array of single digits */
export function convertToArrayTimerStr(timerstr:string,full:boolean):TimerStrDigit[]
{
    timerstr=timerstr.padStart(6,"0");

    var timerparts:string[]=[
        timerstr.slice(0,2),
        timerstr.slice(2,4),
        timerstr.slice(4,6)
    ];

    return _.flatMap(timerparts,(x:string,i:number):TimerStrDigit[]=>{
        // if in minimal mode, remove any time parts that are all 0s
        if (x=="00" && !full)
        {
            return [];
        }

        // the end space at the end of a timer part. only if the timer char for this timer part
        // is not s (seconds)
        var endSpace:TimerStrDigit[]=[];

        if (TIME_CHARS[i]!="s")
        {
            endSpace=[
                {value:"",style:"space"}
            ];
        }

        return [
            {value:x[0],style:"number"},
            {value:x[1],style:"number"},
            {value:TIME_CHARS[i],style:"text"},
            ...endSpace
        ];
    });
}

/** check if input string is valid timer string input (can only be numbers) */
function isValidTimerStrInput(input:string):boolean
{
    return parseInt(input)!=NaN && input.length==1;
}