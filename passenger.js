var passenger = /** @class */ (function () {
    function passenger(firstName, idnumber, field, favsub) {
        this.employeename = firstName;
        this.employeeid = idnumber;
        this.education = field;
        this.subject = favsub;
    }
    passenger.prototype.display = function () {
        console.log(this.employeename + " " + this.employeeid + " " + this.education + " " + this.subject);
    };
    return passenger;
}());
var pass = new passenger("Yogesh", 132, "Science", "Chemistry");
pass.display();
console.log("****************Classes********************************");
var hobby = /** @class */ (function () {
    function hobby(Hobby1, Hobby2, movie, onumber, place) {
        this.hobby1 = Hobby1;
        this.hobby2 = Hobby2;
        this.favmovie = movie;
        this.favnumber = onumber;
        this.favplace = place;
    }
    hobby.prototype.display = function () {
        console.log(this.hobby1 + " " + this.hobby2 + " " + this.favmovie + " " + this.favnumber + " " + this.favplace);
    };
    return hobby;
}());
var hobby3 = new hobby("Dancing", "Games", "KGF", 111, "Mumbai");
hobby3.display();
console.log("*************using clases  Event Management application**************************");
var organizer = /** @class */ (function () {
    function organizer(num, firstname) {
        this.id = num;
        this.name = firstname;
    }
    organizer.prototype.display = function () {
        console.log(this.id + " " + this.name);
    };
    return organizer;
}());
var org = new organizer(1222, "Aarti");
org.display();
var Event = /** @class */ (function () {
    function Event(employee, firstname, stength, time) {
        this.id = employee;
        this.name = firstname;
        this.description = stength;
        this.startime = time;
    }
    Event.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.description + " " + this.startime);
    };
    return Event;
}());
var funtime = new Event(2121, "Zahra", "I Have Positive Attitude", 9);
funtime.display();
var Venue = /** @class */ (function () {
    function Venue(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.description + " " + this.address);
    };
    return Venue;
}());
var student1 = new Venue(6661, "Zahra", "I Love Dancing", "Navi Mumbai");
student1.display();
