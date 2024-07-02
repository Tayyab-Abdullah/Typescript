let sales = 200_600_700;

let course: string = "TypeScript";

let is_published = true;

let level;


// Arrays

let number = [1, 2, '3'];

let array1 = [];

let array2: number[] = [];
array2[0] = 1;
// array2[1] = 'abc'; We get error "String is passed."


// Tuple DataType : 1, Tayyab

let user: [number, string] = [1, 'abc'];
user.push(1);

console.log("Users: ", user);


// Enum Datatype


// const small = 1;  Old Way
// const medium = 2;
// const large = 3;

// Pascal Case
const enum Size { Small = 1, Medium, Large}; // if we set string value then we have to explicitly assign each value

//used const for generating more optimized js file

let mySize:Size = Size.Medium; 

console.log(mySize);


// Objects


let employee: {
    readonly id: number,  //Readonly can be used to only access value
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Tayyab',
    retire: (date: Date) => {
        console.log(date)
    } 
};

console.log("Employee Object: ", employee);