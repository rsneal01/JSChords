const app = new App()

function fetchArtists() {
    return fetch("http://127.0.0.1:3000")
      .then(resp => resp.json())
      .then(json => renderArtists(json))
  }

  function renderArtists(artists) {
    const main = document.querySelector('main')
    artists.forEach(artist => {
      const h2 = document.createElement('h2')
      h2.innerHTML = artist.name
      main.appendChild(h2)
    })
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchArtists()
  })