function displayCheckOut(productCost){
    document.getElementById("checkOutBtn").style.display = "block";
    document.getElementById("checkOutContainer").style.display = "block";
    document.getElementById("checkOutBtn").style.transform = "translateY(0)";
    checkVideo.style.transform = "translateY(0%)";
    itemPurchase.style.transform = "translateY(0%)";
    let inputSay = "Please fill up the form to place your order"
    let say = new SpeechSynthesisUtterance(inputSay)
    say.rate = 0.7;
    say.pitch = 5;
    say.volume = 1;
    speechSynthesis.speak(say)
    removeContent.style.display = "block"
    let shippingFee = 50
    let shippingDiscount = 30
    let voucher = 5000
    productCost = Number(productCost)
    document.getElementById("itemCost").innerHTML = String(productCost).slice(0, -3) + "," + String(productCost).slice(-3)
    let  totalCost = productCost + shippingFee - shippingDiscount - voucher
    document.getElementById("totalPayment").innerHTML = String(totalCost).slice(0, -3) + "," + String(totalCost).slice(-3);
}
function closeCheck(){
    document.getElementById("checkOutBtn").style.transform = "translateY(-120%)";
    document.getElementById("checkOutBtn").style.transitionDuration = "0.5s";
    checkVideo.style.transform = "translateY(-120%)";
    checkVideo.style.transitionDuration = "0.5s";
    itemPurchase.style.transform = "translateY(-1500%)";
    itemPurchase.style.transitionDuration = "0.5s";
    setTimeout(() => {
    document.getElementById("checkOutBtn").style.display = "none"
    document.getElementById("checkOutContainer").style.display = "none";
    checkVideo.style.display = "none"
    itemPurchase.style.display = "none"
}, 500)}
setInterval( () => {
    let colors = ["red", "blue", "yellow", "purple", "green"]
    let random = Math.floor(Math.random() * 4)
    let randomColors = colors[random]
    let newItem = document.getElementById("newItem")
    let highLight = document.getElementById("highLight")
    highLight.style.backgroundColor = randomColors
    highLight.style.borderColor = randomColors
    newItem.style.borderColor =  randomColors
}, 500)
window.onload = () => {
    let inputSay = "Please select the item you want to buy"
    let say = new SpeechSynthesisUtterance(inputSay)
    say.rate = 0.7;
    say.pitch = 5;
    say.volume = 1;
    speechSynthesis.speak(say)
}
const removeContent = document.getElementById("removeContent")
const checkVideo = document.getElementById("checkVideo")
const orderBtn = document.getElementsByClassName("placeOrder")
const itemPurchase = document.getElementById("itemPurchase")
orderBtn[0].addEventListener("click", () => {
    removeContent.style.display = "none"
    checkVideo.style.display = "block"
    itemPurchase.style.display = "block"
    checkVideo.play();
})
