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
    formValidateAgree();
    formValidateProfession();
    formValidateAge();
    formValidateAddress();
    formValidateEmail();
    formValidateName();
}

/**
 * Name should not be empty and should be at least 3 characters.
 */
function formValidateName() {
    const nameInpt = $('#name');
    if(!nameInpt.val() || nameInpt.val().trim().length < 3) {
        nameInpt.addClass('invalid');
        nameInpt.trigger('focus');
        $('span', nameInpt.parent()).text('Name should not be empty and should be at least 3 characters.');
    } else {
        nameInpt.removeClass('invalid');
        $('span', nameInpt.parent()).text('');
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
    if(!ageInput.val()||parseInput(ageInput.val() < 18 )){
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
    const agreeInpt = $('#agree');
    if(agreeInpt.is(':not(:checked)')) {
        $('label', agreeInpt.parent()).addClass('invalid');
        agreeInpt.trigger('focus');
    } else {
        $('label', agreeInpt.parent()).removeClass('invalid');
    }
}