//class constructor

class Book{
    constructor(BookName, Price){
        this.BookName = BookName;
        this.Price = Price;
    }
}
let BookDetails = new Book("chader pahar", "150 TK");
console.log(BookDetails);