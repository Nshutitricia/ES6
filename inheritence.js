function Book (title,author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSummary = function(){
    return `This ${this.title} was written by ${this.author} in ${this.year}`
}
//Magazine Constructor
function Magazine (title, author, year, month){
    Book.call(this,title,author,year)
    this.month = month;
}
//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype)

//Change Constructor to Magazine
Magazine.prototype.constructor = Magazine;
//Instatiate an Object
const mag1= new Magazine('Mag One', 'Tricia', '2013','jan')
console.log(mag1.getSummary())

