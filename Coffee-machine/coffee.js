
let opt = document.getElementsByClassName('options');

for (let i = 0; i < opt.length; i++) {
    opt[i].addEventListener("click", function () {
        document.getElementById("pay").style.display = 'grid';
    });
};


let price = document.getElementById('money');
document.getElementById('enter').addEventListener("click", function () {
    console.log(price.value)

    if(price.value==''){
        document.getElementById('rem').innerHTML = 'Please Enter Your Money';
        document.getElementById('img').style.display='none'
        document.getElementById('remaining').style.display = 'none';
    }
    else{
        if (document.getElementById('option1').checked == true) {
            document.getElementById('img').src = 'images/milk.png';
            document.getElementById('img').style.display = 'inline-block';
        }
        else if (document.getElementById('option2').checked == true) {
            document.getElementById('img').src = 'images/original.png';
            document.getElementById('img').style.display = 'inline-block';
        }
        else if (document.getElementById('option3').checked == true) {
            document.getElementById('img').src = 'images/black.png';
            document.getElementById('img').style.display = 'inline-block';
        }
        if (price.value > 1) {
            document.getElementById('remaining').style.display = 'grid';
            let rem = price.value - 1;
            document.getElementById('rem').innerHTML = rem + ' JD';
        };
    }

    

    // document.getElementById('option1').disabled= true;
    // document.getElementById('option2').disabled= true;
    // document.getElementById('option3').disabled= true;
});
