function isNum(...param){
    if(param.length < 1) {
        throw Error("plz input argument")
    }else{
        param.map(function(v){
            if(typeof v !== "number") {
                throw Error("plz input Number type")
            }
        })
    }
  
    return true
}

function checkParamCount(count, ...param) {
    if(isNum(count)) {
        if(!(count === param.length)){
            throw Error(`input ${count} argument, your argument count is ${param.length}`)
        }else{
            return true
        }
    }   
}


