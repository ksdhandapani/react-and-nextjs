// string, number, boolean

let userName = 'Max';
// userName = 34; // It is invalid
let userAge = 30;
let isActive = true;

// Union Type
let userId: string | number = 'abc';
userId = 123; // It is valid

// Object Type
let user: {
    name: string;
    age: number;
    isActive: boolean;
    id: number;
};

user = {
    name: 'Max',
    age: 34,
    isActive: true,
    id: 123
}; // Valid

// Array Types
let hobbies: Array<String>; // Declaring an array of strings variable
hobbies = ['Sports', 'Cooking', 'Reading'];
let hobbiesV2: string[]; // Declaring an array of strings variable
let users: {id: number, name: string}[]; // Declaring an array of strings variable

// Constants
const API_KEY = 'abc'

// Functions
// Returns a number type
function add(a: number, b: number): number {
    let result = a + b;
    return result;
}

// Returns nothing
function addV2(a: number, b: number): void {
    let result = a + b;
    console.log(result);
}

// Function Types - Function as a value
// Function type is a type that describes the shape of a function, including its parameters and return type. It allows you to define the expected signature of a function, making it easier to work with functions as values and ensuring type safety.
// calFunc is a function that takes two numbers and returns a number
function calculate (a: number, b: number, calcFun: (a: number, b: number) => number){
    calcFun(a, b);
}

// Function as a value, here we are passing the add function as a value to the calculate function
calculate(2,5, add);

// Custom Types or Type Aliases
// Custom Types or Type Aliases allow you to create a new name for a type, making it easier to work with complex types and improving code readability. They can be used to define the shape of objects, function signatures, or any other type that you want to reuse throughout your codebase.

// Here we are creating a custom type for the function signature of the add function
type AddFunction = (a: number, b: number) => number;
// Now we can use the AddFunction type to define the shape of the calcFun parameter in the calculateV2 function
function calculateV2 (a: number, b: number, calcFun: AddFunction){
    calcFun(a, b);
}
// Function as a value, here we are passing the add function as a value to the calculateV2 function
calculateV2(2,5, add);

// Custom Types or Type Aliases for Union Types
// Here we are creating a custom type for the union type of string and number
type StringOrNumber = string | number;
let user_name: StringOrNumber = 'sudhad01';

// Custom Types or Type Aliases for Object Types
// Here we are creating a custom type for the object type of Employee
type Employee = {
    id: number;
    name: string;
    age: number;
    email: string;
}

let employee1: Employee = {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

// Interfaces
/**
 * interfaces are similar to type aliases, but they are more powerful and flexible. 
 * They can be extended and implemented by classes, making them a better choice for defining the shape of objects in many cases. 
 * Interfaces can also be merged, allowing you to add new properties to an existing interface without modifying its original definition. 
 * This makes interfaces a more versatile option for defining complex types in TypeScript.
 */

// Here we are creating an interface for the object type of Credentials
interface Credentials {
    username: string;
    password: string;
}

let userCredentials: Credentials;

userCredentials = {
    username: 'sudhad01',
    password: 'password123'
};

// Interface vs Custom Types or Type Aliases

// The class AuthCrdentials implements the Credentials interface, which means that it must have the same properties as the Credentials interface.
class AuthCrdentials implements Credentials {
    username: string;
    password: string;
    // The class AuthCrdentials has an additional property email, which is not part of the Credentials interface. 
    // This is allowed because the class can have additional properties beyond those defined in the interface.
    email: string;
    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

// Here we are creating a function that takes an object of type Credentials as a parameter
function login(credentials: Credentials) {
    console.log(credentials.username);
    console.log(credentials.password);
}

// Here we are creating an object of type AuthCrdentials and passing it to the login function
// This is valid because the AuthCrdentials class implements the Credentials interface, so it has the same properties as the Credentials interface.
login(new AuthCrdentials('sudhad01', 'password123', 'sudhad01@example.com')); // Valid

// Interface Merging or Declaration Merging
/**
 * In TypeScript, interfaces can be merged, allowing you to add new properties to an existing interface without modifying its original definition.
 * This is useful when you want to extend the functionality of an interface without changing its original definition, or when you want to add new properties to an interface that is defined in a third-party library.
 */

// Here we are creating an interface for the object type of Address
interface Address{
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
}

// Here we again creating an interface for the object type of Address, but this time we are adding a new property country to the interface. 
// This is allowed because interfaces can be merged, allowing you to add new properties to an existing interface without modifying its original definition.
interface Address{
    country: string;
    // Additional properties for the Address interface
}

// Merging Types

/**
 * In TypeScript, types can also be merged, allowing you to create a new type that combines the properties of multiple types.
 * This is useful when you want to create a new type that has the properties of multiple types, or when you want to create a new type that extends the functionality of an existing type.
 */

// Here we are creating a type for the object type of Admin
type Admin = {
    permissions: string[];
}
// Here we are creating a type for the object type of AppUser
type AppUser = {
    userName: string;
}
// Here we are creating a new type AppAdmin that combines the properties of the Admin and AppUser types using the intersection operator (&).
type AppAdmin = Admin & AppUser;
// Now we can create an object of type AppAdmin that has the properties of both the Admin and AppUser types.
let admin: AppAdmin;
// Here we are creating an object of type AppAdmin that has the properties of both the Admin and AppUser types.
admin = {
    permissions: ['read', 'write', 'delete'],
    userName: 'admin01'
}


// Merging more than one interfaces
/**
 * In TypeScript, interfaces can also be merged, allowing you to create a new interface that combines the properties of multiple interfaces.
 * This is useful when you want to create a new interface that has the properties of multiple interfaces, or when you want to create a new interface that extends the functionality of an existing interface.
 */
interface AdminInterface {
    permissions: string[];
}

interface AppUserInterface {
    userName: string;
}

// Here we are creating a new interface AppAdminInterface that combines the properties of the AdminInterface and AppUserInterface interfaces using the extends keyword.
interface AppAdminInterface extends AdminInterface, AppUserInterface {
    // Additional properties for the AppAdminInterface
}

let adminv2: AppAdminInterface;
adminv2 = {
    permissions: ['read', 'write', 'delete'],
    userName: 'admin01'
}

// Literal Types

/**
 * In TypeScript, literal types allow you to specify the exact value a variable can hold, rather than just its type. 
 * This can be useful for creating more specific types and ensuring that variables only take on certain values. 
 * Literal types can be used with strings, numbers, and booleans.
 * For example, you can create a literal type for a variable that can only hold the string values "success" or "error", or a variable that can only hold the number values 1, 2, or 3. 
 * This can help catch errors at compile time and make your code more robust.
 */

let role: 'admin' | 'user' | 'guest'; // role can only be one of the three string values
role = 'admin'; // It is valid
// role = 'receptionist'; // It is invalid

// Adding Type Guards

/**
 * Type guards are a way to narrow down the type of a variable within a conditional block.
 * They allow you to check the type of a variable at runtime and provide more specific type information to the TypeScript compiler.
 * This can help catch errors at compile time and make your code more robust.
 * Type guards can be used with primitive types, object types, and custom types.
 * For example, you can use the typeof operator to check if a variable is a string or a number, or you can use the instanceof operator to check if an object is an instance of a certain class.
 */

type UserRole = 'admin' | 'user' | 'guest';
let userRole: UserRole;
userRole = 'admin'; // It is valid
userRole = 'user'; // It is valid
// userRole = 'receptionist'; // It is invalid

// Here we are creating a function that takes an action and a role as parameters
function performAction(action: string | number, role: UserRole){
    // `role === 'admin'` is an equality check that narrows the literal-union type UserRole to 'admin'.
    // `typeof action === 'string'` is a typeof type guard that narrows action from string | number to string.
    if(role === 'admin' && typeof action === 'string'){
        //..
    }
}


// Generic Types

// TypeScript Generics are a powerful tool that allows you to create reusable, flexible, and type-safe components by passing types as arguments, similar to how you pass values into function parameters.

/**
 * In TypeScript, generic types allow you to create reusable components that can work with a variety of data types while still maintaining type safety. 
 * Generics enable you to define a function, class, or interface that can operate on different types without losing the benefits of static typing.
 * For example, you can create a generic function that takes an array of any type and returns the first element of that array. 
 * This allows you to use the same function for arrays of numbers, strings, or any other type, while still ensuring that the return type matches the input type.
 */

let userRoles: Array<UserRole>;
userRoles = ['admin', 'user', 'guest'];

// Here we are creating custom a generic type DataStorage that takes a type parameter T and defines an object with a storage property of type T[], and three methods: add, remove, and getAll.
type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
    remove: (data: T) => void;
    getAll: () => T[];
};

// Here we are creating an object textStorage of type DataStorage<string> that implements the DataStorage generic type for string data. 
// It has a storage property that is an array of strings, and three methods: add, remove, and getAll.
const textStorage: DataStorage<string> = {
    storage: [],
    add(data: string) {
        this.storage.push(data);
    },
    remove(data: string) {
        this.storage = this.storage.filter(item => item !== data);
    },
    getAll() {
        return this.storage;
    }
};

// Here we are creating an object numberStorage of type DataStorage<number> that implements the DataStorage generic type for number data.
const numberStorage: DataStorage<number> = {
    storage: [],
    add(data: number) {
        this.storage.push(data);
    },
    remove(data: number) {
        this.storage = this.storage.filter(item => item !== data);
    },
    getAll() {
        return this.storage;
    }
};

// Here we are creating a generic function merge that takes two arguments of types T and U and returns a new object that combines the properties of both arguments.
function merge<T, U>(a: T, b: U){
    return {
        // Spread the properties of object 'a'
        ...a,
        // Spread the properties of object 'b'
        ...b
    };
}

// Here we are using the generic function merge to create a new user object by merging two objects: one with a name property and another with an age property.
const newUser1 = merge<{name: string}, {age: number}>({name: 'Max'}, {age: 29}); 
newUser1.age = 67;
newUser1.name = 'Kavinesh R';

// Here we are using the generic function merge without explicitly specifying the types, allowing TypeScript to infer the types automatically.
const newUser2 = merge({name: 'Max'}, {age: 29}); 
