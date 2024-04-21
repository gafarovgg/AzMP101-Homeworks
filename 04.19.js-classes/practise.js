// class Animal {
//   constructor(name, birthdate, gender) {
//     this.name = name;
//     this.birthdate = birthdate;
//     this.gender = gender;
//   }
//   getAge() {
//     return new Date().getFullYear() - this.birthdate;
//   }
// }

// class Cat extends Animal {
//   constructor(name, birthdate, gender, weight, color) {
//     super(name, birthdate, gender);
//     this.weight = weight;
//     this.color = color;
//   }
//   getInfo() {
//     return `name is ${this.name}, birthdate is ${this.birthdate}`;
//   }
// }

// let cat = new Cat("Alina", 2003, "male", "6.5kq", "orange");
// const animal = new Animal("Cat", 20, "Male");
// console.log(animal);
// console.log(cat);
// console.log(cat.getAge());
// console.log(cat.getInfo());

class Human {
  constructor(name, surname, gender, nationality, age = 0) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.nationality = nationality;
    this.age = age;
  }
  getFullName() {
    return `Full name is ${this.name}${this.surname}`;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}
// const Riad = new Human("Riad", "Gafarzada", "male", "Azerbaijan", 20);
// console.log(Riad.getBirthYear);

class User extends Human {
  isLogged = false;
  constructor(
    name,
    surname,
    gender,
    nationality,
    username,
    email,
    isAdmin,
    password,
    bio,
    age
  ) {
    super(name, surname, gender, nationality, age);
    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;
    if (password.length < 5) {
      throw new Error("password at least 5 chars!");
    } else {
      this.password = password;
    }
    if (bio.length > 100) {
      throw new Error("Bio shoult at max 100 chars!");
    } else {
      this.bio = bio;
    }
  }
  changePassword(currentPassword, newPassword) {
    if (this.password === currentPassword) {
      if (currentPassword === newPassword) {
        window.alert("current password and new password are same!");
      } else {
        this.password = newPassword;
      }
    } else {
      window.alert("current password incorrect");
    }
  }
  changeEmail(arr, newEmail) {
    let found = arr.find((user) => user.email === newEmail);
    if (found) {
      window.alert("Parolun sehvdi");
    } else {
      this.email = newEmail;
    }
  }
}
let users = [
  new User(
    "John",
    "Doe",
    "Male",
    "American",
    "johndoe",
    "john.doe@example.com",
    false,
    "password123",
    "A bit about John.",
    30
  ),
  new User(
    "Jane",
    "Doe",
    "Female",
    "British",
    "janedoe",
    "jane.doe@example.com",
    true,
    "securepassword",
    "Jane's bio goes here.",
    28
  ),
  new User(
    "Alex",
    "Smith",
    "Non-binary",
    "Canadian",
    "alexsmith",
    "alex.smith@example.com",
    false,
    "alexspassword",
    "All about Alex.",
    35
  ),
  new User(
    "Emily",
    "Clark",
    "Female",
    "Australian",
    "emilyclark",
    "emily.clark@example.com",
    false,
    "emilyspassword",
    "Explorer and photographer.",
    26
  ),
  new User(
    "Michael",
    "Brown",
    "Male",
    "German",
    "michaelbrown",
    "michael.brown@example.com",
    true,
    "michaelspass",
    "Coffee enthusiast. Avid reader.",
    32
  ),
  new User(
    "Luis",
    "Gomez",
    "Male",
    "Spanish",
    "luisgomez",
    "luis.gomez@example.com",
    false,
    "luispassword",
    "Music lover, Guitar player.",
    29
  ),
  new User(
    "Sophia",
    "Lopez",
    "Female",
    "Mexican",
    "sophialopez",
    "sophia.lopez@example.com",
    true,
    "sophiaspassword",
    "Digital marketer and content creator.",
    31
  ),
];

function sortUsersByUsername(array) {
  return [...array].sort((a, b) => a.username.localeCompare(b.username));
}
// console.log(sortUsersByUsername(users));

function filterByBirthYear(array, year) {
  return array.filter((user) => user.getBirthYear() > year);
}
console.log(filterByBirthYear(users, 1900));
// const Riad = new User(
//   "Riad",
//   "Gafarzada",
//   "Male",
//   "Azerbaijanian",
//   "gafarovgg",
//   "riad.qafarzade@bk.ru",
//   true,
//   "riad2003",
//   "WHAT`S THATT",
//   20
// );
// console.log(Riad);
// console.log(Riad.changePassword("riad2003", "gafarzade2003"));
