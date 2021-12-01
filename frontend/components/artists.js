class Artists {
    constructor(name){
        this.name = name
        this.recipes = [];
        this.adapter = new RecipesAdapter();
    }

    // createArtistCard(){
    //     const card = document.createElement('div')
    //     document.body.appendChild(card)
    //     card.innerText = "test card"
    // }
    // document.addEventListener('DOMContentLoaded', function() {
    //     createArtistCard()
    //   })

    }