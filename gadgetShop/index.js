window.onload = () => {
    let inputSay = "Welcome to Our Gadget Shop.   Get Ready to upgrade your tech game"
    let say = new SpeechSynthesisUtterance(inputSay)
    say.rate = 0.7;
    say.pitch = 5;
    say.volume = 1;
    speechSynthesis.speak(say)
}