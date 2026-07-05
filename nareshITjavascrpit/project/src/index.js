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

    pic.src = 'public/images/img.jpg'
    fromControl.btn.innerText = "login"
    fromControl.btn.style.backgroundColor = "red"
    fromControl.btn.style.padding = "2px 10[x"



    // by using id

    document.getElementById('heading').style.fontSize = '45px';
    // by using css selector 
    document.querySelector('div img').width = 450;
    document.querySelector('div img').height = 450;

    // some out technique .

    // by using innerText , innerHtml , Alert , confirm, outerHtml , console methods , document.write()
    // document.querySelector('p').innerText = 'hello world form innerText';
    // NOTE  :- markup is not allowed in innerText
    // document.querySelector('p').innerHTML ='<b> hello world </b>'
    //! : - markup is allowed in innerText but few html tag don't support in innerText;
    // example :-  textbox , select , textarea , button etc.

    // alert('button click');

    // const res = confirm('do you want to dlt the record')

    // if (res) {
    //     document.write('dlt successfully')

    // } else {
    //     document.write('cancel the operation')
    // }

    // NOTE  : console.log or other method is used for developer to log the information in browser console .

    console.log('function loaded ')
}
// -->

