// SEARCH BOX

var search_box = document.getElementsByClassName("search_box")[0];

var dog_service_type_div = document.getElementsByClassName("dog-service-type")[0];
var cat_service_type_div = document.getElementsByClassName("cat-service-type")[0];

var dog_service_details = document.getElementsByClassName("dog-service-details")[0];
var cat_service_details = document.getElementsByClassName("cat-service-details")[0];

var dog_boarding = document.getElementsByClassName("dog-boarding")[0];
var dog_house_sitting = document.getElementsByClassName("dog-house-sitting")[0];
var doggy_day_care = document.getElementsByClassName("doggy-day-care")[0];
var dog_walking = document.getElementsByClassName("dog-walking")[0];

var cat_boarding_details = document.getElementsByClassName("cat-boarding-details")[0];
var cat_house_sitting_details = document.getElementsByClassName("cat-house-sitting-details")[0];

var dog_one_time_doggy_day_care = document.getElementsByClassName("dog-one-time-doggy-day-care")[0];
var dog_repeat_weekly_doggy_day_care = document.getElementsByClassName("dog-repeat-weekly-doggy-day-care")[0];

var one_time_dog_walking =  document.getElementsByClassName("one-time-dog-walking")[0];
var repeat_weekly_dog_walking =  document.getElementsByClassName("repeat-weekly-dog-walking")[0];

var cat_boarding = document.getElementsByClassName("cat-boarding")[0];
var cat_house_sitting = document.getElementsByClassName("cat-house-sitting")[0];
var dog_weight_container = document.getElementsByClassName("dog-weight-container")[0];


// INPUT VALIDATION

var dog  = undefined;
var cat  = undefined;

var dog_boarding_var = undefined;
var dog_house_sitting_var = undefined;
var dog_day_care_var = undefined;
var dog_walking_var = undefined;

var cat_boarding_var = undefined;
var cat_house_sitting_var = undefined;

var postcode_var = undefined;
var date_from_var = undefined;
var date_to_var = undefined;

var one_time_var = undefined;
var repeated_weekly_var = undefined;

var week_days_var = undefined;

var dog_weight_var = undefined;


// search_box.style.display = "none";

// repeat_weekly_dog_walking.style.display = "none";

dog_repeat_weekly_doggy_day_care.style.display = "none";

cat_service_type_div.style.display = "none";
cat_service_details.style.display = "none";


var prev_dog_service_type_selected = undefined;
var prev_cat_service_type_selected = undefined;
toggleDogServiceType("block", "none", "none", "none")



if (window.innerWidth < 768) {
    search_box.style.display = "none";
}

function toggleSearchBox() {
    if (search_box.style.display == "none") {
        search_box.style.display = "block";
    } else {
        search_box.style.display = "none";
    }
}

function togglePetSelectType(type) {
    if (type == "dog") {
        dog_service_type_div.style.display = "block";
        cat_service_type_div.style.display = "none";
        dog_service_details.style.display = "block";
        cat_service_details.style.display = "none";

        dog = true;
        cat = false;

        toggleDogServiceType("dog-boarding");
        toggleDoggyDayServiceType('one-time');
        toggleDogWalkingServiceType('one-time');
        dog_weight_container.style.display = "block";

    } else if (type == "cat"){
        dog_service_type_div.style.display = "none";
        cat_service_type_div.style.display = "block";
        dog_service_details.style.display = "none";
        cat_service_details.style.display = "block";

        dog = false;
        cat = true;

        dog_weight_container.style.display = "none";
        toggleCatServiceType("cat-boarding");
        toggleSelectedCatServiceType(cat_boarding);
    }
}


function setServiceTypeVar(a, b, c, d) {
    dog_boarding_var = a;
    dog_house_sitting_var = b;
    dog_day_care_var = c;
    dog_walking_var = d;
}

function toggleDogServiceType(type) {
    switch(type) {
        case "dog-boarding":
            setDoggyServiceType("block", "none", "none", "none");
            toggleSelectedDogServiceType(dog_boarding);
            setServiceTypeVar(true, false, false, false);
            break;
        case "house-sitting":
            setDoggyServiceType("none", "block", "none", "none");
            toggleSelectedDogServiceType(dog_house_sitting);
            setServiceTypeVar(false, true, false, false);
            break;
        case "doggy-day-care":
            setDoggyServiceType("none", "none", "block", "none");
            toggleSelectedDogServiceType(doggy_day_care);
            setServiceTypeVar(false, false, true, false);
            break;
        case "dog-walking":
            setDoggyServiceType("none", "none", "none", "block");
            toggleSelectedDogServiceType(dog_walking);
            setServiceTypeVar(false, false, false, true);
            break;
        default:
            setDoggyServiceType("block", "none", "none", "none");
            toggleSelectedDogServiceType(dog_boarding);
            setServiceTypeVar(true, false, false, false);
            break;
    }
}



function setDoggyServiceType(a, b, c, d) {
    document.getElementsByClassName('dog-boarding-details')[0].style.display = a;
    document.getElementsByClassName('dog-house-sitting-details')[0].style.display  = b;
    document.getElementsByClassName('doggy-day-care-details')[0].style.display  = c;
    document.getElementsByClassName('dog-walking-details')[0].style.display  = d;
}

function toggleCatServiceType(type) {
    if (type == "cat-boarding") {
        setCatServiceType("block", "none");
        toggleSelectedCatServiceType(cat_boarding);
        cat_boarding_var = true;
        cat_house_sitting_var = false;
    } else {
        setCatServiceType("none", "block");
        toggleSelectedCatServiceType(cat_house_sitting);
        cat_boarding_var = false;
        cat_house_sitting_var = true;
    }
}

function setCatServiceType(x, y) {
    cat_boarding_details.style.display = x;
    cat_house_sitting_details.style.display = y;
}

function toggleDoggyDayServiceType(type) {
    if (type == "one-time") {
        setDoggyDayServiceType("block", "none")
        one_time_var = true;
        repeated_weekly_var = false;
    } else {
        setDoggyDayServiceType("none", "block")
        one_time_var = false;
        repeated_weekly_var = true;
    }
}

function setDoggyDayServiceType(x, y) {
    dog_one_time_doggy_day_care.style.display = x;
    dog_repeat_weekly_doggy_day_care.style.display = y;
}

function toggleDogWalkingServiceType(type) {
    if (type == "one-time") {
        one_time_dog_walking.style.display = "block";
        // repeat_weekly_dog_walking.style.display = "none";
    } else {
        one_time_dog_walking.style.display = "none";
        // repeat_weekly_dog_walking.style.display = "block";
    }
}

function toggleSelectedDogServiceType(current) {
    
    if (prev_dog_service_type_selected == undefined) {
        if (current.className.search("selected") == -1) {
            current.className += " selected";
        }
        prev_dog_service_type_selected = current;
        console.log(prev_dog_service_type_selected.className);
    } else {
        console.log(prev_dog_service_type_selected.className);    
        if (prev_dog_service_type_selected.className.search("selected") != -1) {
            prev_dog_service_type_selected.className = prev_dog_service_type_selected.className.replace("selected", "");
        }
        console.log(prev_dog_service_type_selected.className);
        if (current.className.search("selected") == -1) {
            current.className += " selected";
        }
        prev_dog_service_type_selected = current;
    }
    console.log(current.className);
    
}


function toggleSelectedCatServiceType(current) {
    
    if (prev_cat_service_type_selected == undefined) {
        if (current.className.search("selected") == -1) {
            current.className += " selected";
        }
        prev_cat_service_type_selected = current;
        console.log(prev_cat_service_type_selected.className);
    } else {
        console.log(prev_cat_service_type_selected.className);    
        if (prev_cat_service_type_selected.className.search("selected") != -1) {
            prev_cat_service_type_selected.className = prev_cat_service_type_selected.className.replace("selected", "");
        }
        console.log(prev_cat_service_type_selected.className);
        if (current.className.search("selected") == -1) {
            current.className += " selected";
        }
        prev_cat_service_type_selected = current;
    }
    console.log(current.className);
    
}


var mon = document.getElementsByClassName("day-care-select-week")[0].value;
var tue = document.getElementsByClassName("day-care-select-week")[1].value;
var wed = document.getElementsByClassName("day-care-select-week")[2].value;
var thrs = document.getElementsByClassName("day-care-select-week")[3].value;
var fri = document.getElementsByClassName("day-care-select-week")[4].value;
var sat = document.getElementsByClassName("day-care-select-week")[5].value;
var sun = document.getElementsByClassName("day-care-select-week")[6].value;


var mon = document.getElementsByClassName("dog-walking-select-week")[0].value;
var tue = document.getElementsByClassName("dog-walking-select-week")[1].value;
var wed = document.getElementsByClassName("dog-walking-select-week")[2].value;
var thrs = document.getElementsByClassName("dog-walking-select-week")[3].value;
var fri = document.getElementsByClassName("dog-walking-select-week")[4].value;
var sat = document.getElementsByClassName("dog-walking-select-week")[5].value;
var sun = document.getElementsByClassName("dog-walking-select-week")[6].value;
function dayCareCheckbox() {

}



function search() {
    console.log(dog + "\t" + cat  + "\t" + dog_boarding_var + "\t" + dog_house_sitting_var + "\t" + dog_day_care_var + "\t" +dog_walking_var + "\t" + cat_boarding_var +"\t"+ cat_house_sitting_var + "\t" + postcode_var + "\t" + date_from_var + "\t" + date_to_var +"\t"+one_time_var+"\t"+repeated_weekly_var+"\t"+"\t"+dog_weight_var
    );
}