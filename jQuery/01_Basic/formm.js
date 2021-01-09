$(function() {
    $('#others-profession').hide();
});

$('input[name="profession"]').on('change', function() {
    if(this.id == 'others') {
        $('#others-profession').fadeIn(600).trigger('focus');
    } else {
        $('#others-profession').fadeOut(600);
    }
});




$('#button-sub').on('click', function() {
    validateForm();
});

function validateForm() {
    formValidateName();
    formValidateEmail();
    formValidateAddress();
    formValidateAge();
    formValidateProfession();
    formValidateAgree();
}

/**
 * Name should not be empty and should be at least 3 characters.
 */
function formValidateName() {
    const nameInput = $('#name');
    if(!nameInput.val() || nameInput.val().trim().length < 3) {
        nameInput.addClass('invalid');
        nameInput.trigger('focus');
        $('span', nameInput.parent()).text('Name should not be empty and should be at least 3 characters.');
    } else {
        nameInput.removeClass('invalid');
        $('span', nameInput.parent()).text('');
    }
}

//1. email: use any email regex and validate the input
//2. address: not empty and at least 5 chars
//3. age: should be older than 18
//4. profession: should be selected. if 'other' is selected, 
//than the 'other-profession' input should not be empty and should have at 
//least 5 chars
//optional: add a span for each  ipt-box that will show to the user the error message

/**
 * Validate the email against a email regex pattern. it can be any
 */
function formValidateEmail() {
    const mailInput = $('#email');
    const rex = /^([A-Za-z0-9_\-\.]+)@([A-Za-z_\-]+)\.([a-zA-Z]{2,5})$/; 
    if(!mailInput.val() || re.text(mailInput.val())) {
        mailInput.addClass('invalid');
        mailInput.trigger('focus');
        $('span', mailInput.parent()).text('email should not be empty and should be at email format');
    } else {
        mailInput.removeClass('invalid');
        $('span', mailInput.parent()).text('');
    }

}


//2. address: not empty and at least 5 chars
// trim() using avoiding empty space

function formValidateAddress() {
    const addInput = $('#address');
    if(!addInput.val() || addInput.val().trim().length < 5) {
        addInput.addClass('invalid');
        addInput.trigger('focus');
        $('span', addInput.parent()).text('Address should not be empty and should be at least 5 characters.');
    } else {
        addInput.removeClass('invalid');
        $('span', addInput.parent()).text('');
    }
}

function formValidateAge() {
    const ageInput=('#age');
    if(!ageInput.val()||parseInt(ageInput.val() < 18 )){
        ageInput.addClass('invalid');
        ageInput.trigger('focus');
        $('span', addInput.parent()).text('age should not be empty and should be at least 18 years old.');


    }


}

function formValidateProfession() {
    const professionInput=$('input[name="profession"]');
    let selected;
    professionInput.each(function(){
        if ($(this).is(':selected')){
            selected=$(this);
       }
       if(!selected){
        $('span', professionInput.parent()).text('Profession should be selected');
       }else{
        $('span', professionInput.parent()).text('');
        if(selected.attr('id')==='others'){
            const othersPro=('#others-profession');
            if(!othersPro.val()|| othersPro.val().trim().length < 10){

                othersPro.addClass('invalid');
                othersPro.trigger('focus');
                $('span', othersPro.parent()).text('Write your profession');
            } else {
                othersPro.removeClass('invalid');
                $('span', othersPro.parent()).text('');
            }
        }

       }
    });

}

function formValidateAgree() {
    const agreeInput = $('#agree');
    if(agreeInput.is(':not(:checked)')) {
        $('label', agreeInput.parent()).addClass('invalid');
        agreeInput.trigger('focus');
        $('span', agreeInput.parent()).text('Check the term and conditions');

    } else {
        $('label', agreeInput.parent()).removeClass('invalid');
        $('span', agreeInput.parent()).text('');

    }
}