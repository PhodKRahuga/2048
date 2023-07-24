import left from './Left'

export default function Right(arr){
    var temp = left(reverse(arr))
    return {"ans": reverse(temp["ans"]) , "effect": reverseIndex(temp["effect"])}
}

function reverse(arr) {
    
    var bum = Array(16).fill(0)
    for(var i=0;i<4;i++)
    {
        for(var j=0;j<4;j++)
        {
            bum[i*4+j] = arr[i*4+(3-j)]
        }
    }
    return bum
}
function reverseIndex(effect) {
    var effects = []
    for(var i=0;i<4;i++) {
        for(var j=0;j<4;j++) {
            if (effect.includes(i*4+(3-j))) {
                effects.push(i*4+j)
            }
        }
    }
    return effects
}