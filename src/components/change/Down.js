import Up from './Up';

export default function Down(arr) {  
    var temp = Up(reverse(arr))
    return {"ans": reverse(temp["ans"]) , "effect": reverseIndex(temp["effect"])}
} 
function reverse(arr) {
    var bum = Array(16).fill(0)
    for(var i=0;i<4;i++)
    {
        for(var j=0;j<4;j++)
        {
            bum[i*4+j] = arr[(3-i)*4+j]
        }
    }
    return bum
}
function reverseIndex(effect) {
    var effects = []
    for(var i=0;i<4;i++)
    {
        for(var j=0;j<4;j++)
        {
            if (effect.includes((3-i)*4+j)) {
                effects.push(i*4+j)
            }
        }
    }
    return effects
}