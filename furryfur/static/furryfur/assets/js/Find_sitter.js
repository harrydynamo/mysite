$(function(){
    
    let datePicker = document.getElementById('datePickerFrom');
    let picker = new Lightpick({
        field: datePicker,
        onSelect: function(date){
            datePicker.value = date.format('Do MMMM YYYY');
        }
    });
   
});

$(function(){
    
    let datePicker = document.getElementById('datePickerTo');
    let picker = new Lightpick({
        field: datePicker,
        onSelect: function(date){
            datePicker.value = date.format('Do MMMM YYYY');
        }
    });
   
});


function showPetSitter(pincode) {
    request = new XMLHttpRequest()
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            addSitters(JSON.parse(this.responseText));
        }
    }

    request.open("POST", "/findsitter", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("pincode=PO1")
}

function addSitters(petsitters) {
    var container = document.getElementsByClassName("grid-container")[0]
    for (petsitter in petsitters) {

        firstname = petsitters[petsitter]["firstname"]
        lastname = petsitters[petsitter]["lastname"]
        email = petsitters[petsitter]["email"]
        dist = petsitters[petsitter]["distance"]

        street = petsitters[petsitter]["street"]
        landmark = petsitters[petsitter]["landmark"]
        pincode = petsitters[petsitter]["pincode"]
        country = petsitters[petsitter]["country"]
        city = petsitters[petsitter]["city"]

        dog = petsitters[petsitter]["dog"]
        cat = petsitters[petsitter]["cat"]

        boarding = petsitters[petsitter]["boarding"]
        house_sitting = petsitters[petsitter]["house_sitting"]
        doggy_day_care = petsitters[petsitter]["doggy_day_care"]
        dog_walking = petsitters[petsitter]["dog_walking"]

        boarding_price = petsitters[petsitter]["boarding_price"]
        house_sitting_price = petsitters[petsitter]["house_sitting_price"]
        doggy_day_care_price = petsitters[petsitter]["doggy_day_care_price"]
        dog_walking_price = petsitters[petsitter]["dog_walking_price"]

        contact_info = petsitters[petsitter]["contact_info"]

        dog_size1 = petsitters[petsitter]["dog_size1"]
        dog_size2 = petsitters[petsitter]["dog_size2"]
        dog_size3 = petsitters[petsitter]["dog_size3"]
        dog_size4 = petsitters[petsitter]["dog_size4"]

        description = petsitters[petsitter]["description"]

        grid_item = document.createElement("div")
        grid_item.className = "grid-item";
        grid_item.appendChild(wrapper)

        wrapper = document.createElement("div")
        wrapper.className = "wrapper"
        wrapper.appendChild(card_container)

        card_container = document.createElement("div")
        card_container.className = "card-container"
        card_container.appendChild(flip_animation)

        flip_animation = document.createElement("div")
        flip_animation.className = "flip-animation"
        flip_animation.appendChild(item_card)

        item_card = document.createElement("div")
        item_card.className = "item-card"

        item_summary = document.createElement("div")
        item_summary.className = "item-summary"

        title = document.createElement("h2")
        title.className = "title"
        title = firstname + " " + lastname
        item_summary.appendChild(title)

        address = document.createElement("address")
        address.className = "address"
        address.innerHTML = street + ", " + pincode + ", " + country + ", " + city;
        item_summary.appendChild(address)

        pet_type = document.createElement("div")
        pet_type.className = "pet_type"
        pet_type_label = document.createElement("label")
        pet_type_label.appendChild(document.createTextNode("Pet Type :"))
        pet_type_label.appendChild(document.createElement("br"))        

        lable1 = document.createElement("label")
        lable1.style.fontSize = "16px";
        lable1.style.fontWeight = "bold";
        input8 = document.createElement("input")
        input8.className = "mr-1";
        input8.setAttribute("type", "checkbox")
        input8.checked = true;
        input8.disabled = true;
        label1.appendChild(input8)
        label1.innerHTML = "Dog"    

        label2 = document.createElement("label")
        label2.className = "ml-2 mr-1"
        input7 = document.createElement("input")
        input7.className = "mr-1";
        input7.setAttribute("type", "checkbox")
        input7.checked = true;
        input7.disabled = true;
        label2.appendChild(input7)
        label2.innerHTML = "Cat"

        pet_type.appendChild(label1)
        pet_type.appendChild(label2)
        item_summary.appendChild(pet_type)
        // label3 = document.createElement("label")
        // input6 = document.createElement("input")
        // input6.className = "mr-1";
        // input6.setAttribute("type", "checkbox")
        // input6.checked = true;
        // input6.disabled = true;
        // label3.appendChild(input6)
        // label3.innerHTML = "Boarding"

        service_type = document.createElement("div")
        service_type.className = "sevice_type"
        service_type_label = document.createElement("label")
        service_type_label.appendChild(document.createTextNode("Service Type :"))
        service_type_label.appendChild(document.createElement("br"))
        service_type.appendChild(service_type_label)

        ml_21 = document.createElement("div")
        ml_21.className = "ml-2"

        
        label4 = document.createElement("label")
        input5 = document.createElement("input")
        input5.className = "mr-1";
        input5.setAttribute("type", "checkbox")
        input5.checked = true;
        input5.disabled = true;
        label4.appendChild(input5)
        label4.innerHTML = "Boarding"

        label5 = document.createElement("label")
        input4 = document.createElement("input")
        input4.className = "mr-1";
        input4.setAttribute("type", "checkbox")
        input4.checked = true;
        input4.disabled = true;
        label5.appendChild(input4)
        label5.innerHTML = "House Sitting"
        ml_21.appendChild(label4)
        ml_21.appendChild(label5)

        ml_22 = document.createElement("div")
        ml_22.className = "ml-2"

        label6 = document.createElement("label")
        input3 = document.createElement("input")
        input3.className = "mr-1";
        input3.setAttribute("type", "checkbox")
        input3.checked = true;
        input3.disabled = true;
        label6.appendChild(input3)
        label6.innerHTML = "Day care"

        label7 = document.createElement("label")
        input2 = document.createElement("input")
        input2.className = "mr-1";
        input2.setAttribute("type", "checkbox")
        input2.checked = true;
        input2.disabled = true;
        label7.appendChild(input2)
        label7.innerHTML = "Dog walking"
        ml_22.appendChild(label6)
        ml_22.appendChild(label7)

        service_type.appendChild(ml_21)
        service_type.appendChild(ml_22)
        item_summary.appendChild(service_type)


        item_card.appendChild(item_summary)

        // IMAGE WRAPPER
        image_wrapper = document.createElement("div")
        image_wrapper.className = "image-wrapper"

        image = document.createElement("img")
        image.className = "featured-image"
        image.setAttribute("src", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg");
        image.setAttribute("alt", "Sitter's Name performing, overlooking a crowd")
        image_wrapper.appendChild(image);

        item_card.appendChild(image_wrapper)
        // ITEM-AVAILABLE
        item_availabe = document.createElement("div")
        item_availabe.className = "item-availabe"
        label8 = document.createElement("label")
        input1 = document.createElement("input")
        input1.className = "mr-1";
        input1.setAttribute("type", "checkbox")
        input1.checked = true;
        input1.disabled = true;
        item_availabe.appendChild(input1);
        label8.innerHTML = "Available"
        
        item_card.appendChild(item_availabe)
        
        
        // BUTTONS ==>> DETAILS & BOOK
        item_buttons = document.createElement("div")
        item_buttons.className = "item-buttons front-buttons";

        btn_details = document.createElement("button");
        btn_details.className = "btn-details grey";
        btn_details.setAttribute("aria-label", "Learn more about the Sitter");
        btn_details.innerHTML = "Details";

        btn_tickets = document.createElement("a");
        btn_tickets.className = "btn-tickets blue";
        btn_tickets.setAttribute("aria-label", "Purchase tickets for this event");
        btn_tickets.setAttribute("href", "#");
        btn_tickets.innerHTML = "Book";

        item_buttons.appendChild(btn_details);
        item_buttons.appendChild(btn_tickets);

        item_card.appendChild(item_buttons);

        container.appendChild(grid_item);
    }
}