let btn = document.querySelector('button');
let age = document.querySelector('p');
let input = document.querySelector('input');

btn.addEventListener('click', function(){
    let todayDate = new Date();
    let birthDate = new Date(input.value);
    let y1 = todayDate.getFullYear();
    let m1 = todayDate.getMonth();
    let d1 = todayDate.getDate();
    let y2 = birthDate.getFullYear();
    let m2 = birthDate.getMonth();
    let d2 = birthDate.getDate();

    let y3 = y1 - y2;
    let m3 = m1 - m2;
    let d3 = d1 - d2;

    if (d3 < 0) {
        m3--;
        let lastMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0);
        d3 += lastMonth.getDate(); 
    }

    if (m3 < 0) {
        y3--;
        m3 += 12; 
    }
    if(y2 > y1){
            age.innerHTML = `You Are Not Born Yet buddy :)`;
    } else{
            age.innerHTML = `You Are <span> ${y3} </span> years <span> ${m3} </span> months and <span> ${d3} </span> days old`;
    }
    

});
