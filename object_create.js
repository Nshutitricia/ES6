//Object of Protos
 const bookProtos = {
    getSummary: function(){
        return `This ${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }
 }
//  const book1 = Object.create(bookProtos)
//  book1.title = 'Book One';
//  book1.author = 'Tricia';
//  book1.year = '2014';

const book1 = Object.create(bookProtos, {
    title: {value: 'Book One' },
    author: {value: 'Tricia' },
    year: {value:'2015'}
});
console.log(book1)