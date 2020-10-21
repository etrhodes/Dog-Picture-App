function getDogImage () {
    let numberOfImages= $('input[type="number"]').val();
    fetch('https://dog.ceo/api/breeds/image/random/')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => alert ('Something went wrong. Try again later'));
}



function onSubmit () {
    $('form').on('submit', event => {
        event.preventDefault();
        let numberOfImages = $('input[type="number"]').val();       
        getDogImage(numberOfImages);
    })
}

function displayImages(responseJson) {
    $('.img-result').replaceWith(   
    '<img src="${responseJson.message}" class="img-result">'
    )
    $('.results').removeClass('hidden');

}

function handler() {
    onSubmit();
    getDogImage();
}

handler();


