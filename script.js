// display
let display = document.querySelector(".display");

//pre-existing albums
let album1 = {
    image: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg",
    artist: "Tyler the Creator",
    albumName: "Igor",
    releaseYear: 2019
}

let album2 = {
    image: "https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png",
    artist: "Beyonce",
    albumName: "Lemonade",
    releaseYear: 2016
}

let album3 = {
    image: "https://upload.wikimedia.org/wikipedia/en/7/76/Adele_-_30.png",
    artist: "Adele",  
    albumName: "30",
    releaseYear: 2021
}

//array of albums
let albums = [album1, album2, album3];

//click event
let button = document.querySelector("button");

function emptyDisplay() {
    display.innerHTML = "";
};

function addToCollection() {
    let userImage = document.querySelector(".imageLink").value;
    let userArtist = document.querySelector(".artistName").value;
    let userAlbum = document.querySelector(".albumName").value;
    let userRelease = document.querySelector(".releaseDate").value;

    let newAlbum = {
        image: userImage,
        artist: userArtist,
        albumName: userAlbum,
        releaseYear: userRelease
    }

    albums.push(newAlbum);

    console.log(albums);
};

function displayCollection() {
    albums.forEach(function(album) {
        display.insertAdjacentHTML('beforeend', `<div class="displaySong"> <img src="${album.image}"> <div> <p>${album.artist}</p> <p>${album.albumName}</p> <p>${album.releaseYear}</p> </div> </div>`);
    });
};

button.onclick = function() {
    emptyDisplay();
    addToCollection();
    displayCollection();
};

displayCollection();