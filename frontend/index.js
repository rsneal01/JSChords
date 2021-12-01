function fetchBooks() {
    return fetch("http://127.0.0.1:3000/")
      .then(resp => resp.json())
      .then(json => renderBooks(json))
  }
  
  function renderBooks(books) {
    const main = document.querySelector('main')
    books.forEach(book => {
      const h2 = document.createElement('h2')
      h2.innerHTML = book.name
      main.appendChild(h2)
        let element = document.createElement('div')
        document.body.appendChild(element)
        element.innerText = "test"
    })
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchBooks()
  })

//   NEED EVENT LISTENER!!
  