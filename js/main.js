let elems = document.querySelectorAll('.menu-bar');
let elems2 = document.querySelectorAll('.text-left');
console.log(elems);
let is_active = false;
Array.prototype.forEach.call(elems, function (element) {
    element.addEventListener('click', function(){
        is_active = !is_active;
        console.log("pressed", is_active);
        document.querySelector('.menu').classList.toggle('animate');
        if (!is_active) {
            document.querySelector('.menu').classList.toggle('transition-ease');
            setTimeout(() => {
                document.querySelector('.menu').classList.toggle('transition-ease');
            }, 0.5);
        }
    })
});

Array.prototype.forEach.call(elems2, function (element) {
    element.addEventListener('click', function(){
        is_active = !is_active;
        console.log("pressed", is_active);
        document.querySelector('.menu').classList.toggle('animate');
        if (!is_active) {
            document.querySelector('.menu').classList.toggle('transition-ease');
            setTimeout(() => {
                document.querySelector('.menu').classList.toggle('transition-ease');
            }, 0.5);
        }
    })
});

let button1 = document.querySelectorAll('.button1');
let button2 = document.querySelectorAll('.button2');
let button3 = document.querySelectorAll('.button3');

Array.prototype.forEach.call(button1, function (element) {
    element.addEventListener('click', function(){    
        allDisabled();
        clearDisabled();
    })
});
Array.prototype.forEach.call(button2, function (element) {
    element.addEventListener('click', function(){    
        allDisabled();
        clearDisabled();
    })
});
Array.prototype.forEach.call(button3, function (element) {
    element.addEventListener('click', function(){    
        allDisabled();
        clearDisabled();
    })
});

const allDisabled = () => {
    
    document.querySelector('.button1').classList.toggle('disabled', true);
    document.querySelector('.button2').classList.toggle('disabled', true);
    document.querySelector('.button3').classList.toggle('disabled', true);
  
}

const clearDisabled = () => {
    setTimeout(()=>{
        document.querySelector('.button1').classList.toggle('disabled', false);
        document.querySelector('.button2').classList.toggle('disabled', false);
        document.querySelector('.button3').classList.toggle('disabled', false);
    }, 1100)
}