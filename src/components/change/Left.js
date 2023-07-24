export default function left(arr) {

    var bum = Array(16).fill(0)
    var effect = []
    for(var i=0;i<4;i++) {
        var row = []
        for(var j=0;j<4;j++) {
            row.push(arr[i*4+j])
        }
        var newRow = []
        for(var j=0;j<4;j++) {
            if (row[j]) {
                newRow.push(row[j]) 
            }
        }

        var newNewRow = []
        var index = 0
        var flag = true
        while(index<newRow.length-1) {
            if(newRow[index]==newRow[index+1]) {
                newNewRow.push(2*newRow[index])
                effect.push((newNewRow.length-1)+i*4)
                index++;
                flag = false
            }
            else{
                newNewRow.push(newRow[index])
                flag=true
            }
            index++;
        }
        if (flag) {
            if(newRow.length>0) {
                newNewRow.push(newRow[newRow.length-1])
            }
        }

        var l = newNewRow.length
        for(var j = 0;j<4-l;j++)
        {
            newNewRow.push(0);
        }       
        for(var j=0;j<4;j++) {
            bum[i*4+j] = newNewRow[j]
        }
    }

    return {"ans":bum,"effect":effect}
}