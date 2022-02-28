// Object literals for creating Objects

    let car = {
        name : 'Bucati',
        speed : 120,
        run : ()=>{
            console.log("car is running");
            
        }
    }
    console.log(car)
    console.log(car.run())

// creating a constructor for car
  function GeneralCar(givenName , givenSpeed){
      this.name = givenName ; 
      this.Speed = givenSpeed;
      this.run = ()=>{
          console.log(`${this.name} is running`);
          return "";
      }
  }
  Maruti = new GeneralCar('Maruti 800' , 40);
  Hundai = new GeneralCar('Hundai' , 130);
  console.log(Maruti.run());
  console.log(Hundai.run())