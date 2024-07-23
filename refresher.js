/* const user = {
    name : ' Tom',
    age : 34,
 greet(){
    console.log('Hello, '+ this.name);
 }
};



user.greet();

class User {
   constructor(name,age){
    this.name = name ;
    this.age = age;
   }

   greet(){
    console.log('Hello, '+ this.name + '!');
   }
}

const user1 = new User ('Manuel',41);
console.log(user1);
user1.greet(); */

/* const hobbies = ['Sports','Cooking','Traveling'];
console.log(hobbies[0]);

hobbies.push('Programming');
hobbies.shift();
console.log(hobbies);

const  index = hobbies.findIndex((item) => item === "Cooking"
)

console.log(index);

const upperHobbies = hobbies.map ((item) => item.toUpperCase());
console.log(upperHobbies);

const hobbies1 = hobbies.map((item) => ({hobbies : item}))
console.log(hobbies1);

function transformToObjects(numberArray){
    return numberArray.map((item) => ({value : item}))
} */


/* 
    const [firstName , lastName ] = ['Max','Schwarz'];

    console.log(firstName, lastName);

    const user = {
        name :'Tom',
        age : 34
    };

    const {name, age} = user;

    console.log(name, age); */

/*     const hobbies = ['Sports','Cooking','Traveling'];
    const user = {
        name :'Tom',
        age : 41
    };


    const newHobbies = ['Developing'];

    const mergeHobbies = [...hobbies, ...newHobbies];

    console.log(mergeHobbies);

    const extendedUser = {
        isAdmin : true ,
        ...user
    }

    console.log(extendedUser); */

  /*   const password = prompt ('Enter your password'); */


/*   const hobbies = ['Sports','Cooking','Traveling'];

  for (const hobby of hobbies){
      console.log(hobby);
  } */

/*       function handleTimeout(){
        console.log('Time is up!');
      };

      function handleStop(){
        console.log('Stop!');
      };

      setTimeout(handleTimeout, 2000);
        const timer = setTimeout(handleStop, 3000);
        clearTimeout(timer);
        console.log('Hello!');

        const interval = setInterval(handleTimeout, 2000);

        clearInterval(interval);
        console.log('Hello!'); */

/* 
        function init () {

            function greet () {
                console.log ('Mike')
            }
            greet();

        }

        init(); */

/*         const arr1 = [1,2,3,4,5];

        const doubleArr = arr1.map((item)=> item * 2);

        console.log(doubleArr); */

/*         const kvArray = [
            { key: 1, value: 10 },
            { key: 2, value: 20 },
            { key: 3, value: 30 },
          ];
          
          const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
          
          console.log(reformattedArray);  */
/* const arr = ["1", "2", "3"];
const numArr = arr.map(Number);
console.log(numArr); */

/*  const arr = [1, 2, 3, 4, 5];
const fint = arr.find(item => item % 2 === 0);
console.log(fint); 

const findIndex = arr.findIndex(item => item % 2 === 0);
console.log(findIndex); */

/* const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((item) => item.length > 6);

console.log(result); */

/* const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, item) => acc + item, 0);

console.log(sum); */

/* const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const newArr = arr.concat(arr2);

console.log(newArr); */

/* const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
console.log(animals.slice(2, 4)); */

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);