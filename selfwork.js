/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]


//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
function title(head) {
  console.log(`\n>---------------------${head}--------------------<`)
}
title("Ex . A")

let test = "Strive"
console.log(test)

/* Ex.B
  Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
title("Ex . B")

let sum = 10 + 20
console.log(sum)

/* Ex.C 
  Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
title("Ex . C")

function getRandom(min) {
  return Math.floor(Math.random() * 20) + min
}
console.log(getRandom(6))

/* Ex.D
  Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
title("Ex . D")

let me = {
  name: 'Alexander',
  surname: 'Egbedi',
  age: '27'
}
console.log(me)

/* Ex.E 
  Programmatically remove the age property from the previously create object.
*/
title("Ex . E")

delete me.age
console.log(me)

/* Ex.F 
 Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
title("Ex . F")

me.skills = ["Javascript", "HTML", "CSS"]
console.log(me)

/* Ex.G 
 Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
title("Ex . G")

delete me.skills.pop()
console.log(me)


// JS Functions
/* Ex.1
  Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
title("Ex .1")

function dice() {

   let random = Math.floor(Math.random() *6) + 1
   return random
}
console.log(dice(3))
/* Ex.2 
  Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
title("Ex .2")

function whoIsBigger(num1, num2) {
  return (num1 > num2) ? num1 : num2;
}
console.log(whoIsBigger(10, 8))

/* Ex.3
  Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
  Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
title("Ex .3")

function splitMe(str) {
  newArr = str.split(' ')
 return newArr
}
console.log(splitMe('I Love Coding'))
/* Ex.4
  Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
title("Ex .4")

function deleteOne(str, boolean) {

  if (boolean === true) {
      str = str.slice(1)
  }
  else {
      str = str.slice(0, str.length - 1)
  }
  return str
}
console.log(deleteOne("true"))

/* Ex.5
 Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
 Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
title("Ex .5")

function onlyLetters(x) {
  let str = x.replace(/\d+/g, "");
  console.log(str);
}
onlyLetters("I have 4 dogs")
/* Ex.6 
 Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
title("Ex .6")

function isThisAnEmail(x) {
  let emailexp = /\S+@\S+.\S+/;
  console.log(emailexp.test(x));
}
isThisAnEmail("am@ail.com");

/* Ex.7
 Write a function called "whatDayIsIt" that should return the current day of the week.
*/
title("Ex .7")

function whatDayIsIt() {
  let date = new Date().getDay();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(weekdays[date]);
}
whatDayIsIt();



/* Ex.8
  Write a function called "rollTheDices" which receives a number as a parameter.
  It should invoke the dice() function defined in Ex1 the specified amount of times,
  and return an object containing a "sum" property holding the sum of all values extracted
  and a "values" array containing the single values of the dicerolls themselves.
  Example: RollTheDices(3) => returns {
      sum: 10
      values: [3, 3, 4]
  }
*/
title("Ex .8")

function rollTheDices(num){
  let sum = 0
  let array = []

  for (let i = 0; i < num; i++){
      array.push(Math.floor(Math.random() * 6))
      array[i] += sum
  }
  let obj = {
      sum: sum,
      values: array,
  }
  return obj
}
console.log(rollTheDices(3))
/* Ex.9
 .Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date
*/
title("Ex .9")

function howManyDays(date) {

const today = new Date();

let difference =  today.getTime() - date.getTime();
difference = ((difference / 1000) / 3600) / 24

return Math.round(difference);
};

const randomDay = new Date('7/16/2020');

console.log(howManyDays(randomDay));

/* Ex.10
 Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
title("Ex .10")

function isTodayMyBirthday(x) {
  let bd = new Date(x).getDate();
  let bm = new Date(x).getMonth();
  let date = new Date().getDate();
  let month = new Date().getMonth();
  if (bd === date && bm === month) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isTodayMyBirthday("08/17/1994");

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
 Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
title("Ex . 11")

/* console.log("===================================================")
function deleteProp(_imObj , _imString) {
  delete _imObj[_imString]
  return _imObj
}
console.log(deleteProp(movies[0] , "Title")) */

/* Ex.12 
  Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
title("Ex . 12")

function olderMovie(_movie) {
   let oldMovie = []
   for (let i = 0; i < _movie.length; i++) {
      oldMovie.push(_movie[i].Year)
   }
      oldMovie.sort()
      return oldMovie
}
console.log(olderMovie(movies))

/* Ex.13
  Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
title("Ex . 13")

function countMovies(_movie){
  let count = 0
  for (let i = 0; i < _movie.length; i++){
      count++
  }
  return count
}
console.log(countMovies(movies))
/* Ex.14
  Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
title("Ex . 14")

function onlyTheTitles(_movie) {
  let titles = []
  for (let i = 0; i < _movie.length; i++) {
      titles.push(_movie[i].Title)
  }
  return titles
}

console.log(onlyTheTitles(movies))


/* Ex.15
 Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
title("Ex . 15")

function onlyInThisMillennium(_movies) {
  let newArr = []
  for (let i = 0; i < _movies.length; i++) {
    _movies[i].Year = parseInt(_movies[i].Year)
    if (_movies[i].Year >= 2000) {
      newArr.push(movies[i])
    }
  }
  return newArr
}

console.log(onlyInThisMillennium(movies))

/* Ex.16 
  Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
title("Ex . 16")

function getMovieById(_id) {
  for (let i = 0; i < movies.length; i++) {
    if (_id === movies[i].imdbID) {
      return movies[i]
    }
  }
}

console.log(getMovieById("tt1731697"))

/* Ex.17
  Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
title("Ex . 17")

function sumAllTheYears(_movies) {
  let sum = 0
  for (let i = 0; i < _movies.length; i++) {
    _movies[i].Year = parseInt(_movies[i].Year)
    sum += _movies[i].Year
  }
  return sum
}

console.log(sumAllTheYears(movies))

/* Ex.18
  Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
title("Ex . 18")

let newString = "Avengers"

function searchByTitle(_imHiddenInTheTitle) {
  let newArrayFullOfMovies = []
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(newString)) {
      newArrayFullOfMovies.push(movies[i])
    }
  }
  return newArrayFullOfMovies
}

console.log(searchByTitle(newString))

/* Ex.19
  Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
  this object should contain an array called "match", made by all the movies which contain the given string in the title,
  and another array "unmatch" with all the remaining ones.
*/
title("Ex . 19")

function searchAndDivide(_imString) {
  let match = []
  let unmatch = []
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(newString)) {
      match.push(movies[i])
    } else {
      unmatch.push(movies[i])
    }
  }
  var obj = {
    match:  match,
    unmatch: unmatch
  }
  return obj
}

console.log(searchAndDivide(newString))

/* Ex.20
 Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
title("Ex . 20")

function removeIndex (_index) {
  delete movies[_index]
  return movies
}

console.log(removeIndex(3))

// [EXTRAS] JS Advanced

/* Ex.21
Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
Example:
halfTree(3)
*
**
***
*/
title("Ex . 21")


/* Ex.22 
Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
Example: 
tree(3)
  *  
 *** 
*****
*/
title("Ex . 22")


/* Ex.23
Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
 */
title("Ex . 23")

function isItPrime(_number) {
  for(let i = 2; i < _number; i++)
    if(_number % i === 0) return false;
  return _number > 1;
}

console.log(isItPrime(7001))