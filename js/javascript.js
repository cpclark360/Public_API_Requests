// Team TreeHouse - JavaScript FullStack
// Project 5
// Cedric Clark

/*--------------------------------------------------------------
Global Varibles
---------------------------------------------------------------*/
let cards = document.getElementsByClassName('card');
/*--------------------------------------------------------------
jQuery AJAX call to get 12 Random User Generator API
---------------------------------------------------------------*/
$(document).ready(function (){
    $.ajax({
        url: 'https://randomuser.me/api/?results=12',
        dataType: 'json',
        success: function (data) {
/*--------------------------------------------------------------
Dynamically generate html for the user profile gallery
---------------------------------------------------------------*/
for(let i = 0; i < data.results.length; i += 1){
    let galleryHTML = `<div class="card" id="${i}">
    <div class="card-img-container">
    <img class="card-img"  src="${data.results[i].picture.large}" alt="profile picture">
    </div>
    <div class="card-info-container">
    <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
    <p class="card-text">${data.results[i].email}</p>
    <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
    </div>
    </div>`;
    $('#gallery').append(galleryHTML);
} // end of for loop
/*--------------------------------------------------------------
Modal Window created with the user clicks a Profile
---------------------------------------------------------------*/
$('.card').click( function(evt){
    let modal = '';
   if(String(evt.currentTarget.id) === cards[evt.currentTarget.id].id ){    
        modal += `<div class="modal-container">
        <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
        <img class="modal-img" src="${data.results[evt.currentTarget.id].picture.large}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${data.results[evt.currentTarget.id].name.first} ${data.results[evt.currentTarget.id].name.last}</h3>
        <p class="modal-text">${data.results[evt.currentTarget.id].email}</p>
        <p class="modal-text cap">${data.results[evt.currentTarget.id].location.city}</p>
        <hr>
        <p class="modal-text">${data.results[evt.currentTarget.id].phone}</p>
        <p class="modal-text">${data.results[evt.currentTarget.id].location.street}, ${data.results[evt.currentTarget.id].location.city}, ${data.results[evt.currentTarget.id].location.state} ${data.results[evt.currentTarget.id].location.postcode}</p>
        <p class="modal-text">Birthday:${data.results[evt.currentTarget.id].dob.date}</p>
        </div>
        </div> `;
        $('body').append(modal);
        //console.log(evt.currentTarget.id)
}
/*--------------------------------------------------------------
Hides the modal-container when the user clicks the exit button
---------------------------------------------------------------*/
$('.modal-close-btn').click( function(evt){
    $('.modal-container').hide();        
               }); // end '.modal-close-btn' listner
            }); // end of '.card' listner
        } //end of success properly function
    }); // end of jQuery .ajax
}); // end of jQuery .ready
