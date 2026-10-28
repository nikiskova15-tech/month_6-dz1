type Library = {
    books: Book[]
}

type Book = {
    name: string
    rating?: number
}

function addBook(library: Library, book: Book): Library {
    return {
        ...library, 
        books:  [...library.books, book],
    }
}

function getAverageRating(books: Book[]): number {
    const ratedBooks = books.filter(book => book.rating !== undefined   ) 
    if (ratedBooks.length === 0) return 0
    
    const total = ratedBooks.reduce((sum, book) => sum + (book.rating ?? 0), 0)
    return total / ratedBooks.length
}
