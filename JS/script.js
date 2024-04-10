// JS FOR COUNTER SECTION 

document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(function(){
            current+=increment;
            obj.textContent = current;
            if( current == end){
                clearInterval(timer);
            }
    }, step);
}
counter("count1", 0, 1287, 3000);
counter("count2", 1000, 1200, 3000);
counter("count3", 0, 1487, 3000);
counter("count4", 0, 1570, 3000);
});