class passenger {
    employeename : string;
    employeeid : number;
    education : string;
    subject : string ;


    

    constructor (firstName : string, idnumber : number , field : string , favsub : string) {
        this.employeename = firstName;
        this.employeeid = idnumber;
        this.education = field;
        this.subject = favsub;
    }

    display() {
      console.log(this.employeename + " " + this.employeeid + " " + this.education + " " + this.subject );
      
    }
}

    var pass = new passenger ("Yogesh" , 132, "Science" , "Chemistry");
    pass.display();


    console.log("****************Classes********************************");

    class hobby {
     hobby1 : string;
     hobby2 : string;
     favmovie : string;
     favnumber : number;
     favplace : string;

     constructor (Hobby1 : string , Hobby2 : string , movie : string , onumber : number , place : string){
     this.hobby1 = Hobby1 ; 
     this.hobby2 = Hobby2 ;
     this.favmovie = movie;
     this.favnumber = onumber;
     this.favplace = place ;


     }

     display (){
        console.log(this.hobby1 + " " + this.hobby2 + " " + this.favmovie + " " + this.favnumber + " " + this.favplace);
        
     }
     var hobby3 = new hobby ("Dancing" , "Games" , "KGF" , 111 , "Mumbai");
     hobby3.display();


     console.log("*************using clases  Event Management application**************************");

      class organizer {
        id : number ; 
        name : string ;

        constructor (num : number, firstname : string){
            this.id = num;
            this.name = firstname ;

        }
        display (){
            console.log(this.id + " " + this.name);
            
        }
        var org = new organizer (1222 , "Aarti");
        org.display();



        class Event {
            id : number ; 
            name : string ;
            description : string ;
            startime : number;
    
            constructor (employee : number, firstname : string , stength : string , time: number){
                this.id = employee;
                this.name = firstname ;
                this.description = stength;
                this.startime = time ;
    
            }
            display (){
                console.log(this.id + " " + this.name + " " + this.description  + " " + this.startime);
                
            }
            var funtime = new Event (2121 , "Zahra" , "I Have Positive Attitude" , 9);
        
            funtime.display();
    

            class Venue {
                id : number ; 
                name : string ;
                description : string ;
                address : string;
        
                constructor (id : number, name : string , description : string,  address : string){
                    this.id = id;
                    this.name = name ;
                    this.description = description;
                    this.address = address ;
        
                }
                display (){
                    console.log(this.id + " " + this.name + " " + this.description  + " " + this.address);
                    
                }

                
               var student1 = new Venue ( 6661 , "Zahra" , "I Love Dancing" , "Navi Mumbai");
               
                student1.display();
        
    
      
     



    
    

