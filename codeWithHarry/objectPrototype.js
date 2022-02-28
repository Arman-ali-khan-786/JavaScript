let obj = {
    name : 'arman',
    address : 'Jamshedpur'
}
console.log(obj);

function edu(cllgName , branch){
    this.college = cllgName;
    this.branch = branch;
}
edu.prototype.getName = function(){
    return this.college;
}

let me = new edu("ITER", "CSE");
console.log(me)

console.log(me.getName());