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