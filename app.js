function getDogImage (images) {
    fetch('https://dog.ceo/api/breeds/image/random/'+images)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson))
        .catch(error => alert ('Something went wrong. Try again later'));
}



function onSubmit () {
    $('form').on('submit', event => {
        event.preventDefault();   
        getDogImage();  
    })
}

function displayImages(responseJson) {
    $('.img-result').replaceWith(   
    '<img src="${responseJson}" class="img-result">'
    )
    $('.results').removeClass('hidden');

}

function handler() {
    onSubmit();
}

handler();


