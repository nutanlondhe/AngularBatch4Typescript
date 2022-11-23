interface IExterior {
colour : string;
numberOfDoor : number;

}

interface Iinterior {
    auto : boolean;
    seats : number;
}

interface ICar extends  IExterior, Iinterior {
    make : string ;
    model : string ;
    year : number;

}


var myCar : ICar = {
        make : "Honda",
        model : "City",
        year : 2022,
        colour : "White",
        numberOfDoor : 4,
        seats : 4,
        auto : false,
        
}
console.log(myCar);



