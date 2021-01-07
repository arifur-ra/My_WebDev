

$(function(){
    $('#others-profession').hide();
//     $('#button-sub').hide();

    // $('#button-sub').attr('disabled',true);

})

$('input[name="profession"]').on('change',function(){
    if(this.id=='others'){
        $('#others-profession').show('slow').trigger('focus');
    } else {
    $('#others-profession').hide('slow');
    }
})
// Checkbox & Button
// $(function(){
//     $('#button-sub').hide();
// })

// $('input[type="checkbox"]').on('checked',function(){
//     if(this.id=='check'){
//         // $('#button-sub').show('2000');
//          $('#button-sub').attr('');

//     } else {
//     $('#button-sub').hide('fast');
//     }
// });

$('#button-sub').on ('click',function(){
    const agreeInput=$('#check');
    if(agreeInput.is(':not(:checked)')){
      $('label', agreeInput.parent()).addClass('invalid') ; 
    }  
    else{
        $('label', agreeInput.parent()).removeClass('invalid') ; 

    }
})

$('#button-sub').on('click',function(){
    validateForm();
})
function validateForm(){
    formValidateName()
    formValidateEmail()
    formValidateAddress()
    formValidateAge()
    formValidateProfession()
    formValidateAgree()

}
/**Validation for Name
 * Name should be at least 3 character
*/
function formValidateName() {
    const nameInput=$('#name');

    if(!nameInput.val()|| nameInput.val().trim().length < 3){
        nameInput.addClass('invalid');
        nameInput.trigger('focus')
        $('span',nameInput.parent()).text('Should be at lest 3 character')
    }
    else{
    nameInput.removeClass('invalid');
    $('span',nameInput.parent()).text('')

}

/**
 * email:use any email regex and validation the input
 */
function formValidateEmail() {
    
}
/**
 * age: should be grater than 18
 */
function formValidateAge() {
    
}

/**
 * 
 */
function formValidateProfession() {
    
}
function formValidateAgree() {
    
}