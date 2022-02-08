let elems = document.querySelectorAll('.menu-bar');
let is_active = false;
elems.forEach(element => {
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