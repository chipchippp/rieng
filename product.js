
//--------------------product--------------------------
const description = document.querySelector(".description")
const details = document.querySelector(".details")
if(description){
    description.addEventListener("click", function(){
        document.querySelector(".product-content-right-product-bottom-content-details").style.display = "none"
        document.querySelector(".product-content-right-product-bottom-content-description").style.display = "block"
    })
}
if(details){
    details.addEventListener("click", function(){
        document.querySelector(".product-content-right-product-bottom-content-details").style.display = "block"
        document.querySelector(".product-content-right-product-bottom-content-description").style.display = "none"
    })
}
const button = document.querySelector (".product-content-right-product-bottom-top")
if(button){
    button.addEventListener("click", function(){
        document.querySelector(".product-content-right-product-bottom-content-big").classList.toggle("activeB")
    })
}