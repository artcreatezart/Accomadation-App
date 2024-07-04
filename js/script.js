/* jshint esversion: 6 */

const accomadation = [{
  id: 1,
  accomadationImage1: "./img/accomadation/wellington-hotel-1.webp",
  accomadationImage2: "./img/accomadation/wellington-hotel-2.webp",
  accomadationImage3: "./img/accomadation/wellington-hotel-3.webp",
  name: "Cippy Hotel",
  type: "Hotel",
  price: "$157",
  minGuests: "1",
  maxGuests: "2",
  minStay: "1",
  maxStay: "5",
  bedrooms: "2",
  bathrooms: "1",
  parking: "false",
  kidFriendly: "true",
  location: "Wellington",
  accomadationInfo: "Here at Cippy Hotel we pride ourselves on service and quality. A perfect location, for a perfect stay. At $157 a night you can get a cosy room with 2 bedrooms, a seperate bathroom, and a spacious lounge and Kitchen. Plus Free Wifi. <br> <br>We offer an inclusive breakfast buffet from 5am to 9am don't miss out.",


}, {
  id: 2,
  accomadationImage1: "./img/accomadation/christchurch-hostel-1.webp",
  accomadationImage2: "./img/accomadation/christchurch-hostel-2.webp",
  accomadationImage3: "./img/accomadation/christchurch-hostel-3.webp",
  name: "Bolas's Hostel",
  type: "Hostel",
  price: "$30",
  minGuests: "1",
  maxGuests: "1",
  minStay: "1",
  maxStay: "10",
  bedrooms: "1",
  bathrooms: "1",
  parking: "false",
  kidFriendly: "false",
  location: "Auckland",
  accomadationInfo: "Traveling alone and looking for accomadation thats both in the perfect location and afforable? Bolas's Hostle is the place for you. <br> <br> Here you share a space with other visitors, you are provided with a bed and space to store you items, and you share the rest of the space such as bathrooms, showers, kitchen and lounges with the others. A perfect place if your looking for somewhere afforable, love getting to know Guests and needing somewhere to stay in between adventures.",


}, {
  id: 3,
  accomadationImage1: "./img/accomadation/hawkes-motel-1.webp",
  accomadationImage2: "./img/accomadation/hawkes-motel-2.webp",
  accomadationImage3: "./img/accomadation/hawkes-motel-3.webp",
  name: "Hawkes Lane Motel",
  type: "Motel",
  price: "$90",
  minGuests: "2",
  maxGuests: "4",
  minStay: "3",
  maxStay: "10",
  bedrooms: "2",
  bathrooms: "2",
  parking: "true",
  kidFriendly: "false",
  location: "Napier",
  accomadationInfo: "Hawkes Lane Motel is in a supreme spot around shops and awesome senic outlooks. While your here you can easily walk to many cafes, resturants, shops and some of the most beautiful walks. <br> <br> Here you will get 2 bedrooms, with 3 beds, 2 bathrooms and common area. You will have access to the motels pool and pool tables which is a perfect place to pass time.",


}, {
  id: 4,
  accomadationImage1: "./img/accomadation/auckland-house-1.webp",
  accomadationImage2: "./img/accomadation/auckland-house-2.webp",
  accomadationImage3: "./img/accomadation/auckland-house-3.webp",
  name: "Jiolan House",
  type: "House",
  price: "$240",
  minGuests: "1",
  maxGuests: "4",
  minStay: "2",
  maxStay: "15",
  bedrooms: "3",
  bathrooms: "2",
  parking: "true",
  kidFriendly: "true",
  location: "Wellington",
  accomadationInfo: "This house if perfect for those looking for a private place to stay on your vacation where you can have the house to yourself and perfect for a family, friends or when multiple Guests are staying. <br><br> At the Jiolan House there are 3 bedrooms, 3 beds, a kitchen, 2 bathrooms, 2 common areas, a dining room, outdoor area and a kitchen.",


}, {
  id: 5,
  accomadationImage1: "./img/accomadation/napier-house-1.webp",
  accomadationImage2: "./img/accomadation/napier-house-2.webp",
  accomadationImage3: "./img/accomadation/napier-house-3.webp",
  name: "Dreamy Aquatic House",
  type: "House",
  price: "$240",
  minGuests: "2",
  maxGuests: "6",
  minStay: "3",
  maxStay: "18",
  bedrooms: "4",
  bathrooms: "2",
  parking: "false",
  kidFriendly: "true",
  location: "Napier",
  accomadationInfo: "This house is so convient for location with everything you could possibly need within walking distance. Dreamy Aquatic House is a 2 storey house with plenty of room and a beautifu view of the gorgeous water.<br><br> Includes 4 bedrooms, 5 beds, 2 bathrooms, 1 kitchen, 2 lounge areas, a garage, outdoor space and 1 parking space. Imagine youself waking up on a brisk cool morning with a hot coffee in your hands as you glance over the crisp clear blue water amongst Napier.",



}, {
  id: 6,
  accomadationImage1: "./img/accomadation/hamilton-hotel-1.webp",
  accomadationImage2: "./img/accomadation/hamilton-hotel-2.webp",
  accomadationImage3: "./img/accomadation/hamilton-hotel-3.webp",
  name: "Luxury Stay Motel",
  type: "Motel",
  price: "$90",
  minGuests: "2",
  maxGuests: "4",
  minStay: "3",
  maxStay: "10",
  bedrooms: "3",
  bathrooms: "2",
  parking: "false",
  kidFriendly: "false",
  location: "Christchurch",
  accomadationInfo: "Luxury Stay Motel is a a luxury experience without the overpriced aspect. Enjoy a magnificent view from our 3 story building, imagine waking up the the warmth of the beutiful morning sun to start off you adventure of the day. <br><br> This hotel room is spacious with 3 bedroom, 4 beds, 2 bathroom, 1 lounge area and a kitchen area. Perfect when looking for a place to stay on your adventure for 2-4 Guests.",

}];


$ ( document ) .ready ( function () {
  // Fullpage Init:
  new fullpage ( '#fullpage', {
    licenseKey: 'gplv3-license',
    controlArrows: false,
    fixedElements: "#navbar",
  });

  fullpage_api.setAllowScrolling ( true );

  // Swiper Init:
  let swiper = new Swiper ( '.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // populateLocationOptions();

  function validateFilters () {

    let isValid = true;
    let errorMessage = "";

    if ( $ ( "#location" ) .val () === "" ) {
      isValid = false;
      errorMessage += "Please Select a Location.<br>";
    }
    if ( $ ( "#guests" ) .val () === "" ) {
      isValid = false;
      errorMessage += "Please Select the Number of Guests.<br>";
    }
    if ( $ ( "#startDate" ) .val () === "" ) {
      isValid = false;
      errorMessage += "Please Select Start Date of Stay.<br>";
    }
    if ( $ ( "#endDate" ) .val () === "" ) {
      isValid = false;
      errorMessage += "Please Select End Date of Stay.<br>";
    }
    if ( $ ( "#endDate" ) .val () === "" ) {
      isValid = false;
      errorMessage += "Please Select End Date of Stay.<br>";
    }
    if ( !isValid ) {
      $ ( "#errorMessage" ) .html ( errorMessage ) .show();
    } else {
      $ ( "#errorMessage" ) .hide ();
    }
    return isValid;
  }


  function filterAndDisplayAccomadations() {
    const selectedLocation = $ ( "#location" ) .val ();
    const guests = parseInt( $ ( "#guests" ) .val (), 10 ) || 0;
    const selectedType = $ ( "#type" ) .val ();
    const diffDays = calculateDays();


    const filteredAccomadations = accomadation.filter( accomadation => {
      return ( accomadation.location === selectedLocation || selectedLocation === '' ) &&
        ( accomadation.minGuests <= guests ) &&
        ( accomadation.maxGuests >= guests ) &&
        ( accomadation.type === selectedType || selectedType === '' ) &&
        ( accomadation.minStay <= diffDays ) &&
        ( accomadation.maxStay >= diffDays );
    });

    console.log ( filteredAccomadations );
    displayAccomadations ( filteredAccomadations );
  }


  function calculateDays() {
    const startDate = $ ( "#startDate" ) .datepicker ( "getDate" );
    const endDate = $ ( "#endDate" ) .datepicker ( "getDate" );

    if ( startDate && endDate ) {
      const timeDiff = Math.abs ( endDate.getTime () - startDate.getTime () );
      const diffDays = Math.ceil( timeDiff / ( 1000 * 3600 * 24 ) );
      return diffDays;
    } else {
      return 0;
    }

  }

  function displayAccomadations ( filteredAccomadations ) {
    const accomadationsPerPageSmall = 1;
    const accomadationsPerPageMedium = 2;
    const accomadationsPerPageLarge = 3;

    function getAccomadationsPerPage() {
      if (window.matchMedia ( ' ( max-width: 768px ) ' ) .matches ) {
        return accomadationsPerPageSmall;
      } else if ( window.matchMedia ( ' ( max-width: 1200px ) ' ) .matches ) {
        return accomadationsPerPageMedium;
      } else {
        return accomadationsPerPageLarge;
      }
    }

    let accomadationsPerPage = getAccomadationsPerPage ();

    const swiperWrapper = $ ( '.swiper-wrapper' );
    swiperWrapper.empty ();

    for ( let i = 0; i < filteredAccomadations.length; i += accomadationsPerPage ) {
      const slide = $ ( '<div class="swiper-slide"></div>' );

      for ( let j = i; j < i + accomadationsPerPage && j < filteredAccomadations.length; j++ ) {
        const accomadation = filteredAccomadations [ j ];
        console.log(accomadation.id);
        const accomadationElement = `
                    <div class="card-container">

                      <div class="img-container"></div>

                        <div class="card-info-container">
                          <h2>${ accomadation.name }</h2>

                          <div class="location-info-container">
                            <h5>${ accomadation.type }</h5>
                            <i class="fa-solid fa-location-dot"></i>
                            <h4>${ accomadation.location }</h4>
                          </div>

                          <div class="card-info-left-container">

                            <div class="guests-info">
                              <i class="fa-solid fa-user"></i>
                              <h6>${ accomadation.minGuests } - ${ accomadation.maxGuests } Guests</h6>
                            </div>

                            <div class="nights-info">
                              <i class="fa-solid fa-moon"></i>
                              <h6>${ accomadation.minStay } - ${ accomadation.maxStay } Nights</h6>
                            </div>

                              <div class="ammenites-info">

                                <div class="bedroom-info">
                                  <h6>${ accomadation.bedrooms }</h6>
                                  <i class="fa-solid fa-bed"></i>
                                </div>

                                <div class="bathrooms-info">
                                  <h6>${ accomadation.bathrooms }</h6>
                                  <i class="fa-solid fa-toilet"></i>
                                </div>

                              </div>
                            
                          </div>

                            <div class="card-info-right-container">
                            
                              <div class="extra-info">
                                ${ accomadation.parking ? '<i class="fa-solid fa-car" id="carIcon"></i>' : '' }
                                ${ accomadation.kidFriendly ? '<i class="fa-solid fa-child" id="childIcon"></i>' : '' }
                              </div>

                              <h2>${ accomadation.price } / night</h2>
                              <button class="primary-button" id="seeMoreAccomadationButton" data-id="${accomadation.id}">See More<i class="fa-solid fa-arrow-right"></i></button>

                            </div>

                        </div>

                      </div>

                    </div>
                `;
        slide.append ( accomadationElement );
      }
      swiperWrapper.append ( slide );
    }

    

    // Destroy the swiper
    swiper.destroy ( true, true );

    swiper = new Swiper( '.swiper', {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
      }
    });

    // Rebuild Fullpage 
    fullpage_api.reBuild ();


    $( "#bookButton" ) .click ( function () {
      const selectedAccomadationId = $( this ) .data ( 'id');
      populateSelectedOutput ( filteredAccomadations [ selectedAccomadationId ] );
      fullpage_api.moveTo ( 2, 2 );
    });

    $( "#seeMoreAccomadationButton" ) .click ( function () {
      const accomadationId = $( this ) .data ( 'id');
      const selectedAccomadationId = (accomadationId - 1);
      populateSelectedOutput ( filteredAccomadations [ selectedAccomadationId ] );

      populateSelectedOutput ( filteredAccomadations [ selectedAccomadationId ] );
      fullpage_api.moveTo ( 2, 2 );
    });

    function populateSelectedOutput(accomadation) {
    const outputAccomadationSelected = $("#accomadationSelected");
    const slideOutputHtml = `
        <div class="left-accomadation-selected-container">
            <div class="accomadation-selected-img"></div>
            <div class="left-accomadation-selected-info">
                <div class="left-accomadation-selected-name-info">
                    <h1>${accomadation.name}</h1>
                    <div class="left-accomadation-selected-location-info">
                        <h5>${accomadation.type}</h5>
                        <i class="fa-solid fa-location-dot"></i>
                        <h4>${accomadation.location}</h4>
                    </div>
                </div>
                <p>${accomadation.accomadationInfo}</p>
                <div class="left-accomadation-selected-bottom-info-section">
                    <div class="left-accomadation-selected-ammenities">
                        <div class="left-left-accomadation-selected-ammenities">
                            <div class="guests-info">
                                <i class="fa-solid fa-user"></i>
                                <h6>${accomadation.minGuests} - ${accomadation.maxGuests} Guests</h6>
                            </div>
                            <div class="nights-info">
                                <i class="fa-solid fa-moon"></i>
                                <h6>${accomadation.minStay} - ${accomadation.maxStay} Nights</h6>
                            </div>
                            <div class="selected-accomadation-ammenites-info">
                                <div class="bedroom-info">
                                    <h6>${accomadation.bedrooms}</h6>
                                    <i class="fa-solid fa-bed"></i>
                                </div>
                                <div class="bathrooms-info">
                                    <h6>${accomadation.bathrooms}</h6>
                                    <i class="fa-solid fa-toilet"></i>
                                </div>
                            </div>
                        </div>
                        <div class="left-right-accomadation-selected-ammenities">
                            <div class="parking-info">
                                ${accomadation.parking ? '<i class="fa-solid fa-car" id="carIcon"></i>' : ''}
                                ${accomadation.parking ? '<h6>CarPark <br> Available</h6>' : ''}
                            </div>
                            <div class="kid-friendly-info">
                                ${accomadation.kidFriendly ? '<i class="fa-solid fa-child" id="childIcon"></i>' : ''}
                                ${accomadation.kidFriendly ? '<h6>Kid <br> Friendly</h6>' : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-accomadation-selected-bottom-info-section">
                    <h2>${accomadation.price} / night</h2>
                    <button class="primary-button" id="bookButton" data-id="${accomadation.id}">Book</button>
                </div>
            </div>
        </div>
        <div class="vertical-line"></div>
        <div class="meal-plan-container">
            <div class="meal-plan-header">
                <h1>Meal Plan</h1>
                <i class="fa-solid fa-utensils"></i>
            </div>
            <p>Here we provide multiple different meal options if you wish to have them. We can also
            cater to any dietery restrictions just give us a call for any inquires. <br> <span
            class="meal-highlight-comment">*Meals are priced per guest per night</span>
            </p>
            <div class="meal-plan-select">
                <div class="meal-plan-option">
                    <input type="checkbox" id="breakfastCheck" value="15">
                    <label for="breakfast">Breakfast - $15</label>
                </div>
                <div class="meal-plan-option">
                    <input type="checkbox" id="lunchCheck" value="20">
                    <label for="lunch">Lunch - $20</label>
                </div>
                <div class="meal-plan-option">
                    <input type="checkbox" id="dinnerCheck" value="30">
                    <label for="dinner">Dinner - $30</label>
                </div>
            </div>
        </div>
    `;

    outputAccomadationSelected.empty();
    outputAccomadationSelected.append(slideOutputHtml);

    function updateMealPrice() {
        let mealPrice = 0;
        if ($("#breakfastCheck").is(':checked')) mealPrice += parseFloat($("#breakfastCheck").val());
        if ($("#lunchCheck").is(':checked')) mealPrice += parseFloat($("#lunchCheck").val());
        if ($("#dinnerCheck").is(':checked')) mealPrice += parseFloat($("#dinnerCheck").val());
        return mealPrice;
    }

    $(document).on('change', '#breakfastCheck, #lunchCheck, #dinnerCheck', function () {
        const mealPrice = updateMealPrice();
        console.log("Updated meal price: " + mealPrice);
        // You may want to display the updated meal price somewhere on the UI
    });

    $(document).on('click', '#bookButton', function () {
        const selectedAccomadation = accomadation;
        const diffDays = calculateDays();
        const guests = parseInt($("#guests").val());

        const mealPrice = updateMealPrice();
        const accomadationPrice = parseFloat(selectedAccomadation.price.replace('$', ''));
        console.log("Meal price: " + mealPrice);

        const perPerson = (accomadationPrice * diffDays) + (mealPrice * diffDays);
        const totalPrice = perPerson * guests;
        console.log(totalPrice);
        const price = totalPrice;
        

        populateBookingInfoOutput(selectedAccomadation, price);
        fullpage_api.moveTo(2, 3);
    });
}


  }

  // Date picker formats
  $ ( "#startDate" ) .datepicker ( {
    dateFormat: "dd/mm/yy"
  });
  
  $ ( "#endDate" ) .datepicker ( {
    dateFormat: "dd/mm/yy"
  });

  // BUTTON FUCNTIONS
  $ ( "#findARoomButton" ) .click ( function ( e ) {
    e.preventDefault ();
    fullpage_api.moveTo ( 2, 0 );
  });

  $ ( "#searchButton" ) .click ( function ( e ) {
    e.preventDefault ();

    if ( validateFilters () ) {
      fullpage_api.moveTo ( 2, 1 );
      filterAndDisplayAccomadations ();
    }
  });

  $ ( "#backToFiltersButton" ) .click ( function ( e ) {
    e.preventDefault ();
    fullpage_api.moveTo ( 2, 0 );
  });

  $ ( "#backToFilteredAccomadationButton") .click ( function ( e ) {
    e.preventDefault ();
    fullpage_api.moveTo ( 2, 1 );
  });

  $ ( "#backToSelectedAccomadationButton" ) .click ( function ( e ) {
    e.preventDefault ();
    fullpage_api.moveTo ( 2, 2 );
  });
  
  $ ( document ) .on ( 'click', '#confirmButton', function ( e ) {
    e.preventDefault();
    fullpage_api.moveTo ( 2, 4 ); 
  });

  $ ( document ) .on ( 'click', '#backHomeButton', function ( e ) {
    e.preventDefault ();
    fullpage_api.moveTo ( 1, 0 ); 
  });

  $ ( "#startDate, #endDate" ) .datepicker ();




  // BOOKING INFO OUTPUT

  function populateBookingInfoOutput ( accomadation, price ) {
    console.log ( accomadation );
    const outputBookingAccomadationSelected = $ ( "#bookingInfoOutput" );
    const slideBookingOutputHtml = ` 
            <div class="booking-info-container">
            
              <h1>Booking Info</h1>

              <div class="booking-info-section">
                <h4>Accomadation:</h4>
                ${ accomadation && accomadation.name ? `<h3> ${ accomadation.name } </h3>` : ''}
              </div>

              <div class="booking-info-section">
                <h4>Location:</h4>
                <h3>${ accomadation.location }</h3>
              </div>

              <div class="booking-info-section">
                <h4>Guests:</h4>
                <h3>${ $ ( "#guests" ) .val() }</h3>
              </div>

              <div class="booking-info-section">
                <h4>Nights:</h4>
                <h3>${ calculateDays() }</h3>
              </div>

              <div class="booking-info-section">
                <h4>Meal Plan:</h4>
                ${ $ ( "#breakfastCheck" ) .is ( ':checked' ) ? '<h6>Breakfast</h6>' : '' }
                ${ $ ( "#lunchCheck" ) .is ( ':checked' ) ? '<h6>Lunch</h6>' : '' }
                ${ $ ( "#dinnerCheck" ) .is ( ':checked' ) ? '<h6>Dinner</h6>' : '' }
                ${$("#breakfastCheck").prop('checked') === false && $("#lunchCheck").prop('checked') === false && $("#dinnerCheck").prop('checked') === false ? '<h6>No Plan</h6>' : ''}


              </div>

            </div>

            <h2>Total Price: $${price}<span id="totalPrice"></span></h2>
            <button class="primary-button" id="confirmButton">Confirm</button>
        `;

    outputBookingAccomadationSelected .empty ();
    outputBookingAccomadationSelected .html ( slideBookingOutputHtml );
  }


  
});