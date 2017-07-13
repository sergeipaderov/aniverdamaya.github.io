var d = document;
var wrap = d.querySelector('.wrap');
var items = d.querySelector('.items');
var itemCount = d.querySelectorAll('.item').length;
var scroller = d.querySelector('.scroller');
var pos = 0;
var transform = Modernizr.prefixed('transform');

function setTransform() {
    items.style[transform] = 'translate3d(' + 5 (-pos * items.offsetWidth) + 'px,0,0)';
}

function prev() {
    console.log('prev');
    pos = Math.max(pos - 1, 0);
    setTransform();
}

function next() {
    console.log('next');
    pos = Math.min(pos + 1, itemCount - 1);
    setTransform();
}

window.addEventListener('resize', setTransform);