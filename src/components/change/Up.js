export default function Up(arr) {
    var bum = Array(16).fill(0)
    var effect = []
    
    for(var i=0;i<4;i++)
    {

        var column = [];
        for(var j=0;j<4;j++) {
            column.push(arr[j*4+i])
        }
        var newColumn = [];


        for(var j=0;j<4;j++)
        {
            if (column[j]) {
                newColumn.push([ column[j] , j]);
            }
            else {

            }
        }

        var index = 0;
        var newNewColumn = [] ;
        var flag = true


        // console.log(realBoard)
        

        while(index<newColumn.length-1) {
            if(newColumn[index][0]===newColumn[index+1][0]) {
                newNewColumn.push(2*newColumn[index][0]) 
                effect.push((newNewColumn.length-1)*4+i)
                index++;
                flag = false
            }
            else{
                newNewColumn.push(newColumn[index][0]) ;
                flag = true
            }
            index++;
        }
        if (flag) {
            if (newColumn.length>0) {
                newNewColumn.push(newColumn[newColumn.length-1][0])
            }
        }
        
        var l = newNewColumn.length
        for(var j = 0;j<4-l;j++)
        {
            newNewColumn.push(0);
        }       

        for(var j=0;j<4;j++)
        {
            bum[j*4+i] = newNewColumn[j];
        }
    }
    // for(var i=0;i<4;i++) {
    //     console.log( realBoard[i*4],realBoard[i*4+1],realBoard[i*4+2],realBoard[i*4+3], )
    // }
    // console.log('fg',effect)
    return {"ans": bum,"effect": effect}
} 
