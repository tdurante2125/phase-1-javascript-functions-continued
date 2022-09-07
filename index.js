function saturdayFun(blades = "roller-skate") {
   return( `This Saturday, I want to ${blades}!`);
} 

const mondayWork = function(blades="go to the office") {
    return(`This Monday, I will ${blades}.`)
}


function wrapAdjective(first= "*" ) {
 return function(second='special') {
    return `You are ${first}${second}${first}!`
 }
}
