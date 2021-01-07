
// JavaScript
 let count =1;
// document.querySelector('button').addEventListener('click',()=>{
//     const content=document.getElementById('content');

//     content.textContent=`Button clicked ${count++} times`;
// });

// JQuery

$('button').click(()=>{
        const content=$('#content');
        content.text(`Button clicked ${count++} times`);
       const h1= $('h1');
     if  (h1.addClass('red')){
         h1.removeClass('red');
     }
     else {
         h1.addClass('red')
        }
});

$('h1').mouseover(()=>{
    $('h1').addClass('green');
});
$('h1').mouseout(()=>{
    $('h1').removeClass('green');
})

// mouseover even element : green
//mouseover odd element :blue
// .....even List..........
// $('li:even').each(function(){

//     $(this).mouseover(function(){
//     $(this).addClass('green')

//     })
// })

// $('li:even').each(function(){
//     $(this).mouseout(function(){
//     $(this).removeClass('green')

//     })
// })
// // ......Odd list..............
// $('li:odd').each(function(){
//     $(this).mouseover(function(){
//     $(this).addClass('blue')
//     })
// })

// $('li:odd').each(function(){
//     $(this).mouseout(function(){
//     $(this).removeClass('blue')

//     })
// })



// 
$('li').each(function(idx,el){
    $(el).on('mouseover',function(){
        $(this).addClass('red');
    })
    .on('mouseout',function(){
        $(this).removeClass('red');
    })
});
 

// Using toggleClass
$('li').each(function(idx,el){
    const element =$(el)
    const color =idx%2 ? 'green':'blue'
    element.on('mouseover',function(){
        element.toggleClass(color);
    })
    .on('mouseout',function(){
        element.toggleClass(color);
    })
});


