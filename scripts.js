const bookForm = document.querySelector("form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const statusInput = document.querySelector("#status");
const bookList = document.querySelector("#list-books");
let removeBtns = document.querySelectorAll(".card-remove");
let myLibrary = new Array();

class Book {
	constructor(title, author, status) {
		this.title = title;
		this.author = author;
		this.status = status;
	}
}

bookForm.addEventListener("submit", (e) => {
	e.preventDefault();
	addBookToLibrary();
	clearForm();
});

function clearForm() {
	titleInput.value = "";
	authorInput.value = "";
}

function addBookToLibrary() {
	if (titleInput.value.length === 0 || authorInput.value.length === 0) {
		alert("Please enter a title and an author...");
		return;
	}

	const newBook = new Book(
		titleInput.value,
		authorInput.value,
		statusInput.value
	);

	myLibrary.push(newBook);

	const bookCard = document.createElement("div");
	bookList.appendChild(bookCard);
	bookCard.classList.add("book-card");

	let removeBtn = document.createElement("button");
	removeBtn.classList.add("card-remove");
	removeBtn.textContent = `Remove`;

	bookCard.innerHTML = `
  <p>Title:<span class="card-title"> ${newBook.title}</span></p>
  <p>Author:<span class="card-author"> ${newBook.author}</span></p>
  <p>Status:<span class="card-status"> ${newBook.status}</span></p>
`;
	bookCard.appendChild(removeBtn);

	removeBtn.addEventListener("click", () => {
		bookList.removeChild(bookCard);
	});
}
