function *fibonacciGenerator(limit){
    let f1=0 , f2 = 1 , nextf;

    for(i=1;i<=limit;i++){
        yield f1;
        nextf = f1+f2;
        f1=f2;
        f2=nextf;
    }
}
const fn = fibonacciGenerator(10)
let Iter = fn.next() 

while(!Iter.done){
    console.log(Iter.value);
    Iter = fn.next()
}