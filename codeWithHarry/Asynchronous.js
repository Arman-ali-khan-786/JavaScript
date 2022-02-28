//------>> Synchronous call
    for (let index = 0; index < 4005 ; index++) {
        const element = index;
        console.log(element)
        
    }
    console.log("done printing") // this will be printed last after for loop

//----->> Asynchronous call
    setTimeout(()=>{
        for (let index = 0; index < 45 ; index++) {
            const element = index;
            console.log(element) 
        }        
    },100)
    console.log("done printing 2") // this will  be printed before the loop
   