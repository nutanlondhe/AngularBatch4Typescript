interface IExterior {
    bank : string;
    branch :string;
    pincode : number;
    area : string;
  }
  
  interface Iinterior {
  mark : string;
  landline : string;
  }
  interface IBank extends IExterior, IExterior {
    maker : string;
      bankname: string;
      year : number;
  }
  
  var international : IBank = {
      maker : "Housing Development Finance Corporation",
      bankname: "HDFC",
      year : 1995,
      bank : "Axis",
      branch :"MAHAPE",
      pincode : 400701,
      area : "Airoli",
      mark : "Bluepoint";
     landline : "Gandhi Nagar",
  
  
  }
  console.log(international);
