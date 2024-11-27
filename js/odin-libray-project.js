

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

function displayNewBook() {
  for (const element of myLibrary) {
    console.log(element);
    const cont = document.querySelector(".main-cont");
    const bookline1 = document.createElement("div");
    bookline1.textContent = element.title + " by " + element.author;
    bookline1.setAttribute("class", "book");   
    cont.appendChild(bookline1);

    const bookline2 = document.createElement("div");
    bookline2.textContent = "Pages : " + element.pages + " Read: " + element.read;
    bookline2.setAttribute("class", "book");   
    cont.appendChild(bookline2);

    const bookline3 = document.createElement("div");
    bookline3.textContent = "-----------------------------------";
    bookline3.setAttribute("class", "book");   
    cont.appendChild(bookline3);
  }
}
function addNewBook(nbook)
{
  // let inTitle = "Giggy with it";
  // let inAuthor = "Ryan Giggs";
  // let inPages = "134";
  // let inRead = "N";
  // const nbook = new Book(inTitle, inAuthor, inPages, inRead);
  // myLibrary.push(nbook);

  

  const cont = document.querySelector(".main-cont");
  const bookline1 = document.createElement("div");
  bookline1.textContent = nbook.title + " by " + nbook.author;
  bookline1.setAttribute("class", "book");   
  cont.appendChild(bookline1);

  const bookline2 = document.createElement("div");
  bookline2.textContent = "Pages : " + nbook.pages + " Read: " + nbook.read;
  bookline2.setAttribute("class", "book");   
  cont.appendChild(bookline2);

  const bookline3 = document.createElement("div");
  bookline3.textContent = "-----------------------------------";
  bookline3.setAttribute("class", "book");   
  cont.appendChild(bookline3);
}

const book1 = new Book("big Nut", "Robyn Jones", "155", "N");
const book2 = new Book("big Nuttter", "Robyn Jonesop", "165", "N");
const book3 = new Book("big Nuts", "Robyn Joneser", "175", "N");

const myLibrary = [book1, book2, book3];


const sf = document.querySelector("#signform");
sf.addEventListener("submit", (event) => {
  
  let form = new FormData(document.getElementById("signform"));
  
  let inTitle = form.get("title");
  let inAuthor = form.get("author");
  let inPages = form.get("pages");
  let inRead = form.get("read");

  
  const nbook = new Book(inTitle, inAuthor, inPages, inRead);
  myLibrary.push(nbook);
  addNewBook(nbook);
  event.preventDefault();
});

displayNewBook();

// const btn = document.querySelector("#btn");
//   btn.addEventListener("click", function (e) {
    
//     e.target.style.background = "blue";
//     addNewBook();
    
//   });
// console.log(book1.title);




//const btn = document.querySelector("#btn");
//btn.onclick = () => alert("Hello World\!");




//const link = document.querySelector(".comm");
//link.textContent = "Mozilla Developer Network";
/*link.href = "https://developer.mozilla.org";*/
// const sect = document.querySelector("section");
// const para = document.createElement("div");
// para.textContent = "This is the new div";

// para.setAttribute("class", "secDiv");   
// sect.appendChild(para);

// const text = document.createTextNode(
//     " this is the created text node addition",
//   );
//   const linkPara = document.querySelector(".secDiv");
//   linkPara.appendChild(text);
//   sect.appendChild(linkPara);

//   const btn = document.querySelector("#btn");
//   btn.addEventListener("click", function (e) {
//     sect.removeChild(linkPara);
//     e.target.style.background = "blue";
//   });

//sect.removeChild(linkPara);   //Removing a node is pretty simple as well, at least when you have a reference to the node to be removed and its parent. In our current case, we just use Node.removeChild(), like this
//linkPara.remove();     //When you want to remove a node based only on a reference to itself, which is fairly common, you can use Element.remove()
//linkPara.parentNode.removeChild(linkPara);  //older browsers

//Inline styles
/*para.style.color = "white";
para.style.backgroundColor = "purple";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";*/
