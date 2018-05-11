var mysql = require('mysql');
let faker = require('faker')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'library_mgmt_db'
});
  
connection.connect();

let createBookTable = `
CREATE TABLE book (
  id int(11) UNSIGNED PRIMARY KEY, 
  price float NOT NULL,
  name VARCHAR(255) NOT NULL,
  author VARCHAR(255),
  isbn VARCHAR(255),
  available int(15)
)
`
let createPublisherTable = `
CREATE TABLE publisher (
  id int(11) UNSIGNED PRIMARY KEY, 
  book_id int(11),
  name VARCHAR(255),
  place_of_publication VARCHAR(255),
  year_of_publication VARCHAR(255)
)
`
let createSupplierTable = `
CREATE TABLE supplier (
  id int(11) UNSIGNED PRIMARY KEY, 
  book_id int(11),
  name VARCHAR(255),
  address VARCHAR(500)
)
`
let createStudentTable = `
CREATE TABLE student (
  id int(11) UNSIGNED PRIMARY KEY, 
  name VARCHAR(255),
  library_card_id int(11),
  phone VARCHAR(255),
  course VARCHAR(255),
  number_of_books_issued int(11)
)
`
let createDateTable = `
CREATE TABLE date (
  id int(11) UNSIGNED PRIMARY KEY, 
  date VARCHAR(255)
)
`
let createBookIssuedTable = `
CREATE TABLE book_issued (
  id int(11) UNSIGNED PRIMARY KEY, 
  book_id int(11),
  date_id int(11),
  student_id int(11)
)
`
let arr = [
  createBookTable,
  createPublisherTable,
  createSupplierTable,
  createStudentTable,
  createDateTable,
  createBookIssuedTable
]

//CREATE TABLE
// for(i of arr){
//   connection.query(i,function(error,results,fields){
//     if (error) throw error;
          
//               console.log('The solution is: ', results);
//   })
// }


for(let i=1;i<101;i++){
  // let insertBook = `insert into book VALUES (${i},${faker.random.number({min:300,max:1000})},'${faker.lorem.words()}','${faker.name.prefix()+" "+faker.name.firstName()}','${faker.random.number(999)+"-"+faker.random.number(999)+"-"+faker.random.number(99)+"-"+faker.random.number(999)}',${faker.random.number({min:4000,max:10000})})`;
  // let insertSupplier = `insert into supplier VALUES (${i},${faker.random.number(100)},'${faker.name.prefix()+" "+faker.name.firstName()}','${faker.address.streetAddress()}')`;
  // let insertPublisher = `insert into publisher VALUES (${i},${faker.random.number(100)},'${faker.name.prefix()+" "+faker.name.firstName()}','${faker.address.city()}','${faker.date.recent()}')`;
  // let insertStudent = `insert into student VALUES (${i},'${faker.name.prefix()+" "+faker.name.firstName()}',${faker.random.number({min:300,max:1000})},'${faker.phone.phoneNumber()}','${faker.lorem.word()}',${faker.random.number({min:300,max:1000})})`; 
  let insertBookIssued = `insert into book_issued VALUES (${i},${faker.random.number({min:10,max:26})},${faker.random.number({min:10,max:26})},${faker.random.number({min:10,max:26})})`; 
  // let month = faker.random.number({min:1,max:12})
  // let day = faker.random.number({min:1,max:30})
  // if(month < 10) month = "0"+String(month)
  // if(day < 10) day = "0"+String(day)
  // let date = "20"+faker.random.number({min:15,max:18})+"-"+month+"-"+day;
  // let insertDate = `insert into date VALUES (${i},'${date}')`; 
    connection.query(insertBookIssued, function (error, results, fields) {
      if (error) throw error;
          console.log('The solution is: ', results);
    });         
}

connection.end()