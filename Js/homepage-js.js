function cartQuantity(){
    let q1 = JSON.parse (document.querySelector('.quantity1').value);
    let q2 = JSON.parse ( document.querySelector('.quantity2').value);
    let q3 = JSON.parse ( document.querySelector('.quantity3').value);

    
    console.log(q2);
    console.log(q3);
    let total = (q1+q2+q3);
    console.log(typeof(total));
    document.querySelector('.cart-quantity-num').innerHTML = `${total}`;
}