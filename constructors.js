function Book(){
    console.log("Book initialized");
    
}
//Instatiate an Object
const book = new Book()
const book2 = new Book()

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
const book1 = new Book('Book One', 'Tricia', '2025')
console.log(book1.getSummary())
