
export default class Methods {
    
    static shuffle(array) {
        var currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    static sortArtistsAlphabetical = ( artists, setArtists ) => {
        setArtists((artists) =>
            artists.sort((a, b) => a.name > b.name ? 1 : -1)
            .map((artist)=>{
                return artist;
            })
        )
    }

    static sortArtistsReverseAlphabetical = ( artists, setArtists ) => {
        setArtists((artists) =>
            artists.sort((a, b) => a.name < b.name ? 1 : -1)
            .map((artist)=>{
                return artist;
        })
        )
    }

    static sortArtistsRandom = ( artists, setArtists ) => {
        setArtists((artists) =>
            artists.sort((a, b) => Math.random() > 0.5 ? 1 : -1)
            .map((artist)=>{
                return artist;
            })
        )
    }

    /* Reloads the images sorted in the new order */
    static reloadImages = ( sortType, artists, setArtists ) =>{
        if(sortType === "sort_random")
            Methods.sortArtistsRandom(artists, setArtists);
        if(sortType === "sort_abc")
            Methods.sortArtistsAlphabetical(artists, setArtists);
        if(sortType === "sort_zyx")
            Methods.sortArtistsReverseAlphabetical(artists, setArtists);
    }
}