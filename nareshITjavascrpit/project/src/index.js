// < !-- "use strict"
function printDoc() {
    console.log('function is working')
    window.print()
}


function bodyLoad() {
    // accessing the html by dom
    // document.body.innerText="hello"                                      
    window.document.images[0].src = 'public/images/img.jpg';
    // by using name 

    pic.src= 'public/images/img.jpg'
    fromControl.btn.innerText="login"
    fromControl.btn.style.backgroundColor="red"
    fromControl.btn.style.padding="2px 10[x"


    
    // by using id

    document.getElementById('heading').style.fontSize='45px';
    // by using css selector 
    document.querySelector('div img').width = 450;
    document.querySelector('div img').height = 450;


}
// -->

