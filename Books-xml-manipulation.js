const xmlData = `
<books>
    <book id="1">
        <title>JavaScript: The Good Parts</title>
        <author>Douglas Crockford</author>
    </book>
    <book id="2">
        <title>Eloquent JavaScript</title>
        <author>Marijn Haverbeke</author>
    </book>
</books>`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

// Accessing elements
const books = xmlDoc.getElementsByTagName('book');
for (let i = 0; i < books.length; i++) {
    const title = books[i].getElementsByTagName('title')[0].textContent;
    const author = books[i].getElementsByTagName('author')[0].textContent;
    console.log(Book: ${title}, Author: ${author});
}

// Adding a new book
const newBook = xmlDoc.createElement('book');
newBook.setAttribute('id', '3');
const newTitle = xmlDoc.createElement('title');
newTitle.textContent = 'You Don’t Know JS';
const newAuthor = xmlDoc.createElement('author');
newAuthor.textContent = 'Kyle Simpson';
newBook.appendChild(newTitle);
newBook.appendChild(newAuthor);

xmlDoc.documentElement.appendChild(newBook);
console.log(new XMLSerializer().serializeToString(xmlDoc));
