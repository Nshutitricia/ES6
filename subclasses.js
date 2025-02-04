class Book{
    constructor(title, author, year){
        this.title = title;
        this.author= author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`  

    }    
}

//Magazine subclass

class Magazine extends Book{
    constructor(title,author, year,month){
        super(title, author,year); // call the Parent Constructor
        this.month = month;
    }
}

//Instantiate Magazine
const mag1 = new Magazine('Mag 1', 'Tricia', '2013', 'jan')
console.log(mag1.getSummary())