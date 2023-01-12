const Book = class {
  constructor(title, authors, yearPublished) {
    this.title = title;
    this.yearPublished = yearPublished;

    if (Array.isArray(authors)) {
      this.authors = authors;
    } else {
      this.authors.push(authors);
    }
  }

  editTitle(newTitle) {
    this.title = newTitle;
  }

  addAuthors(authors) {
    if (Array.isArray(authors)) {
      this.authors.concat(authors);
      return;
    }

    this.authors.push(authors);
  }

  removeAuthor(author) {
    const index = this.authors.indexOf(author);
    return `${this.authors.splice(index, 1)} is removed as author`;
  }

  editYearPublished(yearPublished) {
    this.yearPublished = yearPublished;
  }
};

export default Book;
