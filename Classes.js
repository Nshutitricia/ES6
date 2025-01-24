class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`  
    }
    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }
    revise(newYear){
        this.year=newYear;
        this.revised = true;
    }
    static topBook(){ // You don't have to instantiate it you call it on the conlstructor
        return "This is my book"
    }

}
//Instantiate Object
const book1 = new Book('Book One', 'Tricia', '2020')
console.log(book1)
book1.revise('2023')
console.log(book1.getSummary())
console.log(Book.topBook())