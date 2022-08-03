// Function que retorna objeto
function descreverAlbum(artista, album, numeroFaixas, estiloMusical){
    return {
        artista: artista,
        album: album,
        numeroFaixas: numeroFaixas,
        estiloMusical: estiloMusical,
        mostrarDescricao: function(){
            console.log("Artista:", artista, 
            "Album:",album, 
            "Faixas:",numeroFaixas, 
            "Estilo musical:",estiloMusical)
        },
    }
}

let album = new descreverAlbum("ROSALÍA", "Motomami", 16, "Reggaeton, Pop experimental")
album.mostrarDescricao();