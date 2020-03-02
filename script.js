document.getElementById("cart-total-price").innerText = 1278;
var numCount=1;
var numCount2=1;
//For Cart First Item
const plusOneBtn = document.getElementById("plusOne");
plusOneBtn.addEventListener("click", function () {
    numCount += 1;
    const singlePrice = 1219;
    const itemPrice = document.getElementById("item-price-one").innerText;
    const newPrice = parseFloat(itemPrice);
    document.getElementById("item-price-one").innerText = newPrice + singlePrice;
    increaseTotal(singlePrice);
    document.getElementById("cart-quantity-input-one").value=numCount;


});

const minusOneBtn = document.getElementById("minusOne");
minusOneBtn.addEventListener("click", function () {
    numCount =document.getElementById("cart-quantity-input-one").value;
    console.log(numCount);
    if(numCount<=0){
        numCount =1;
    }
    numCount -= 1;
    var singlePrice = 1219;
    const itemPrice = document.getElementById("item-price-one").innerText;
    const newPrice = parseFloat(itemPrice);
    if(numCount<=0) {
        document.getElementById("item-price-one").innerText = 0;
        document.getElementById("item-one").style.display = "none";

    }
    else{
        document.getElementById("item-price-one").innerText = newPrice - singlePrice;
    }
    document.getElementById("cart-quantity-input-one").value=numCount;
    decreaseTotal(singlePrice);

});

//For Cart Second Item
const plusTwoBtn = document.getElementById("plusTwo");
plusTwoBtn.addEventListener("click", function () {
    numCount2 += 1;
    var singlePrice = 59;
    const itemPrice = document.getElementById("item-price-two").innerText;
    const newPrice = parseFloat(itemPrice);
    increaseTotal(singlePrice);
    document.getElementById("cart-quantity-input-two").value=numCount2;

    document.getElementById("item-price-two").innerText = newPrice + singlePrice;

});

const minusTwoBtn = document.getElementById("minusTwo");
minusTwoBtn.addEventListener("click", function () {
    numCount2 =document.getElementById("cart-quantity-input-two").value;
    console.log(numCount);
    if(numCount2<=0){
        numCount2 =1;
    }
    numCount2 -= 1;
    var singlePrice = 59;
    const itemPrice = document.getElementById("item-price-two").innerText;
    const newPrice = parseFloat(itemPrice);
    if(numCount2<=0) {
        document.getElementById("item-price-two").innerText = 0;
        document.getElementById("item-two").style.display = "none";

    }
    else{
        document.getElementById("item-price-two").innerText = newPrice - singlePrice;
    }
    //document.getElementById("item-price-two").innerText = newPrice - singlePrice;
    decreaseTotal(singlePrice);
    document.getElementById("cart-quantity-input-two").value=numCount2;

});

//Cart Total Update Function
function increaseTotal(newAmount) {
    const current = document.getElementById("cart-subTotal-price").innerText;
    const taxPrice = document.getElementById("cart-tax-price").innerText;
    const currentAmount = parseInt(current);
    const taxPrice2 = parseInt(taxPrice);
    const subTotal = currentAmount + newAmount;
    document.getElementById("cart-subTotal-price").innerText = subTotal + taxPrice2;
    document.getElementById("cart-total-price").innerText = subTotal + taxPrice2;
}

function decreaseTotal(newAmount) {
    var current = document.getElementById("cart-subTotal-price").innerText;
    const taxPrice = document.getElementById("cart-tax-price").innerText;
    const taxPrice2 = parseInt(taxPrice);
    const currentAmount = parseFloat(current);
    const subTotal = currentAmount - newAmount;
    document.getElementById("cart-subTotal-price").innerText = subTotal + taxPrice2;
    document.getElementById("cart-total-price").innerText = subTotal + taxPrice2;
}

//Remove cart Item
const removeOneBtn = document.getElementById("removeOne");
removeOneBtn.addEventListener("click", function () {

    const itemPrice = document.getElementById("item-price-one").innerText;
    const newPrice = parseFloat(itemPrice);
    var current = document.getElementById("cart-subTotal-price").innerText;
    const newPrice2 = parseInt(current);
    document.getElementById("item-one").style.display = "none";

    document.getElementById("cart-subTotal-price").innerText =newPrice2 - newPrice;
    document.getElementById("cart-total-price").innerText =newPrice2 - newPrice;


});

const removeTwoBtn = document.getElementById("removeTwo");
removeTwoBtn.addEventListener("click", function () {

    const itemPrice = document.getElementById("item-price-two").innerText;
    const newPrice = parseFloat(itemPrice);
    var current = document.getElementById("cart-subTotal-price").innerText;
    const newPrice2 = parseInt(current);
    document.getElementById("item-two").style.display = "none";

    document.getElementById("cart-subTotal-price").innerText =newPrice2 - newPrice;
    document.getElementById("cart-total-price").innerText =newPrice2 - newPrice;


});