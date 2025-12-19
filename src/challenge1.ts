// 1. Type for book
type Book = {
  title: string;
  author: string;
  year: number;
};

// 2. Array to store books
const books: Book[] = [];

// 3. Function to add a new book
function addBook(title: string, author: string, year: number): void {
  books.push({ title, author, year });
  console.log(`Book added: "${title}" by ${author} (${year})`);
}

// 4. Function to display all books
function listBooks(): void {
  if (books.length === 0) {
    console.log('No books found.');
    return;
  }
  console.log('All Books:');
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// 5. Function to search books by title (optional parameter)
function searchBook(title?: string): void {
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }
  // CASE SENSITIVE search (no .toLowerCase())
  const found = books.filter((book) =>
    book.title.includes(title)
  );
  console.log(`Search Results for "${title}":`);
  if (found.length === 0) {
    console.log(`No books found with title containing "${title}".`);
  } else {
    found.forEach((book) => {
      console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
  }
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
