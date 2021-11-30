class Artists {
    constructor(name){
        this.name = name
        this.recipes = [];
        this.adapter = new RecipesAdapter();
    }
    createArtistCard(){
        const card = document.createElement('div')
        card.innerText = "test text"
    }
    createArtistCard()
}
