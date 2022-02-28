let name = "Arman Ali Khan"
name = undefined;
if (name != undefined) {
    throw new Error('This is not undefined'); // throwing a custom error
} else {
    console.log('This is undefined');
}
try {
    // nsoosos
    console.log('we are inside try block');
    // HArrr();
    null.console
    
} catch (error) {
    console.log('Are you Okay??');
    console.log(error.name);
    console.log(error.message);   
}finally{
    console.log('Finally is always executed ');
    
}