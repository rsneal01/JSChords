function fetchArtists() {
    return fetch("http://127.0.0.1:3000/")
    // return fetch("https://anapioficeandfire.com/api/books")
      .then(resp => resp.json())
      .then(json => renderArtists(json))

  }
  
  function renderArtists(artists){
    const main = document.querySelector('main')
    const h2 = document.createElement('h2')
    h2.innerText = artists
    main.appendChild(h2)
  }

//   function renderArtists(artists) {
//     const main = document.querySelector('main')
//     artists.forEach(artist => {
//       const h2 = document.createElement('h2')
//       h2.innerHTML = artist.name
//       main.appendChild(h2)
//         let element = document.createElement('div')
//         document.body.appendChild(element)
//         element.innerText = "test"
//     })
//   }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchArtists()
   
  })

//   NEED EVENT LISTENER!!
  