//Class Media
class Media{
    constructor(title){
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
    get title(){
      return this._title;
    }
    get ratings(){
      return this._ratings;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    set isCheckedOut(newisCheckedOut){
       this._isCheckedOut = newisCheckedOut;
    }
    toggleCheckOutStatus(){
      if(this._isCheckedOut === false){
        return this._isCheckedOut = true
      }
      else if(this._isCheckedOut === true){
        return this._isCheckedOut = false
      }
    }
    getAverageRating(){
      const ratingSum = this._ratings.reduce((accumulator,rating)=> accumulator + rating); // sum the array elements
      const ratingAverage = ratingSum / this._ratings.length;
      return ratingAverage;
    }
    addRating(value){
      return this._ratings.push(value)
    }
  
  
  }
  
  //Class Book inheriting properties and methods from Media
  class Book extends Media{
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author
    }
    get pages(){
      return this._pages
    }
  }
  
  //Class Movie inheriting properties and methods from Media
  class Movie extends Media{
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      return this._director
    }
    get runTime(){
      return this._runTime
    }
  }
  
//Uncomment the console.log statement to test the codes


  const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut)
  
  // pushing values into array rating in the Book class
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  
 console.log(historyOfEverything.ratings)
  
  historyOfEverything.getAverageRating()
  
  console.log(historyOfEverything.getAverageRating())
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut)
  
  // pushing values into array rating in the Movie class
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  
 console.log(speed.ratings)
  
  speed.getAverageRating()
  console.log(speed.getAverageRating())
  
