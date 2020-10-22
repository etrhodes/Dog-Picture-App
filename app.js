function getDogImage (images) {
    fetch('https://dog.ceo/api/breeds/image/random/'+images)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson))
        .catch(error => alert ('Something went wrong. Try again later'));
}

function onSubmit () {
    $('form').on('submit', event => {
        event.preventDefault();
        let numberOfImages = $('input[type="number"]').val();  
        console.log(numberOfImages); 
        getDogImage(numberOfImages);  
    });
}

function displayImages(responseJson) {
    console.log(responseJson);
    let i = 0;
    for (let i = 0; i <= responseJson.message.length; i++) {
        $('#target').append(`<img src="${responseJson.message[i]}" class="results-img">`)
        };
    $('.results').removeClass('hidden');
};

function handler() {
    onSubmit();
}

handler();


