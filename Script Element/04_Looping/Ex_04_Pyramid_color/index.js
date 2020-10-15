/**
 * Color Pyramid Task :slightly_smiling_face:
1- use a loop through the colors array .
2- every iteration use document.write to create a div element
3-  use the iterator value to have several width values
`<div style='width:${i+10}px; background:${colors[i]}>${colors[i]}</div>`
4- backgroundColor for every div would be colors[i]
5- the text inside the div would be the color[i]
 */


let colors = ['red', 'blue', 'green', 'darkblue', 'salmon', 'black'];
let div = ``;


for (let i = 0; i < colors.length; i++) {

    div = (`<div style="width: ${i*150+80}px; 
background-color: ${colors[i]};
margin:0 auto;
height:50px;
color:gold;
font-weight:bold; 
text-align:center; 
border-radius:.25rem;">${colors[i]}</div>`)
    document.write(div);

}