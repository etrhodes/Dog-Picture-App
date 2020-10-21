function getDogImage (images) {
    fetch('https://dog.ceo/api/breeds/image/random/'+images)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson))
        .catch(error => alert ('Something went wrong. Try again later'));
}



function onSubmit () {
    $('form').on('submit', event => {
        event.preventDefault();
        let images = $('input [type="radio"]').val();   
        getDogImage(images);  
    })
}

function displayImages(responseJson) {
    console.log(responseJson);
    $('.results').removeClass('hidden');

}

function handler() {
    onSubmit();
}

handler();


