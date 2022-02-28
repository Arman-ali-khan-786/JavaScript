// Primitive DataTypes
   // Strings

    let  name = "Arman";
    console.log("My name is "+name);
    console.log("my datatype is "+(typeof name));

    // Numbers

    let num = 78 ; 
    console.log(num , "datatype is " + typeof num);

    // Booleans

    let yes = true ;
    console.log(yes , "datatype is " + typeof yes);

    // null 

    let nullVar = null ;
    console.log(nullVar , "datatype is " + typeof nullVar);  // it has bogus return value 

    // undefined

    let undef = undefined; 
    console.log(undef , "datatype is " + typeof undef)


//  Reference Datatypes
  
   // Arrays

    myar = [1,23,4,5,false,"str"]  // since js is dynamically typed programming language 
        //so let,var ,const is not needed but its good practice to give them
    console.log(myar , "datatype is " + typeof myar)

   // Objects Literals

     let marks = {
         aak : 99,
         hrk : 56,
         rattu : 100,
         Jharia : 99.55
     }
     console.log(marks , "datatype is " + typeof marks)

   // Functions 
    
      function greet() {
          console.log("hello fella")
      }
      console.log(greet , typeof greet)

   // Date 
      
      let date = new Date();
      console.log(date , "datatype is " + typeof date)


document.body.innerHTML = String(date).slice(0,25)

    