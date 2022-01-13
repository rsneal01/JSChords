class Song {
    constructor(song, songAttributes){
        this.id = song.id
        this.name = songAttributes.name
        Song.all.push(this)
    }
}

Song.all = [];