class Artist {
    constructor(artist, artistAttributes){
        this.id = artist.id
        this.name = artistAttributes.name
        Artist.all.push(this)
    }
}

Artist.all = [];
    // createArtistCard(){
    //     const card = document.createElement('div')
    //     document.body.appendChild(card)
    //     card.innerText = "test card"
    // }
    // document.addEventListener('DOMContentLoaded', function() {
    //     createArtistCard()
    //   })

