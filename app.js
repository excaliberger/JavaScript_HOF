console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function (plusNumber) {
        return number + plusNumber;
    }   
}

const plus15 = plus(15);

console.log(plus15(10));

// need help ^

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];


function printName(hobbitArray) {
    hobbitArray.forEach(element => {
        console.log(element.name);
    });
}

  printName(users);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function takeNameAndScore(hobbitArray) {
    return hobbitArray.map((hobbit) => {
        let nameAndScore = { 
                name: hobbit.name,
                score: hobbit.score            
                }
        return nameAndScore;
    })
  }

console.log(takeNameAndScore(users))


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

const filterIsActive = (hobbitArray) => hobbitArray.filter(hobbit => hobbit.isActive);

console.log(filterIsActive(users));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function sortHobbits(hobbitArray) {
    let hobbitsByScore = hobbitArray.sort((hobbitB, hobbitA) => {
        return hobbitA.score - hobbitB.score;
    })
    return hobbitsByScore;
}

console.log(sortHobbits(users));

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

function avgHobbitScore(hobbitArray) {
    let sumOfScores = hobbitArray.reduce((previousValue, hobbit) => {
        return previousValue + hobbit.score;
    }, 0)
    let avgScore = sumOfScores / hobbitArray.length;
    return avgScore
}

console.log(avgHobbitScore(users));