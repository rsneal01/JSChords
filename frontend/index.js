function fetchArtists() {
    return fetch("http://127.0.0.1:3000/")
    // return fetch("https://anapioficeandfire.com/api/books")
      .then(resp => resp.json())
      .then(json => renderArtists(json))
      .catch(error => console.log(error) );
  }
  
  function renderArtists(artists){
    //   iterate through artists array, display artist.name as a link => artist show page
    // link to individual artist should have event listener to trigger artist show page function
    const main = document.querySelector('main')
    const h2 = document.createElement('h2')
    h2.innerText = "artists"
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


//   function showArtist(){
    // upon triggering event listener, this function will display this artists array of songs.  can also display a form to create a new song for this artist
// }




  
  document.addEventListener('DOMContentLoaded', function() {
    fetchArtists()
   
  })

//   NEED EVENT LISTENER!!
  