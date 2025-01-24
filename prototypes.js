function Book (title,author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSummary = function(){
    return `This ${this.title} was written by ${this.author} in ${this.year}`
}
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
}
//Manipulate data

Book.prototype.revise = function(newYear){
    this.year=newYear;
    this.revised = true;
}

//Instatiate an Object
const Book1 = new Book('Book One', 'Tricia', '2023')

console.log(Book1.getAge())
console.log(Book1)
Book1.revise('2025')
console.log(Book1)
