var totalPrice = 0;
var count = 1;
var seatLeft = 39;
// if(seatLeft < 21){
//     alert("You cannot booked more than 4 seat");
// }

function scrollSection() {
    const section = document.getElementById('Select-seat');
    section.scrollIntoView();
    }

const btn = document.querySelectorAll(".btn");
   
// for(let i=0; i< btn.length; i++){
//     const button = btn[i];
    // console.log(button)
    // button.addEventListener("click", function(){
    //     // console.log("clicked")
    //      // get the seat
    //      var innerText = this.innerText;
    //      console.log(innerText);  
    // });
    btn.forEach(function(button) {
        button.addEventListener('click', function() {
           // button.style.backgroundColor = '#1DD100';
            const seat = this.innerText;
        //    console.log(seat);
            const seatTittle = document.getElementById('seat-tittle');
            const SelectedSeatCount = seatTittle.childElementCount;
            if(SelectedSeatCount < 4){
                const p = document.createElement("p");
                p.innerText =seat;
                seatTittle.appendChild(p);
                
                button.style.backgroundColor = '#1DD100';

                const price = document.getElementById('price');
                const h1 = document.createElement("h1");
                const prices = parseFloat(
                    h1.innerText ="550"
                
                )
                // console.log(typeof(prices))
                price.appendChild(h1);
            
            

                const seatClass = document.getElementById('seat-class');
                const h2 = document.createElement("h2");
                h2.innerText ="Economy";
                seatClass.appendChild(h2);
                    
                // price calculation
                totalPrice += prices;
                // console.log(totalPrice)
                document.getElementById('total').innerText=totalPrice
                document.getElementById('grand-total').innerText=totalPrice


                const seatCount = document.getElementById('seat-count').innerText=count;
                if(seatCount < 4){
                count ++;
                }

                const seatL = document.getElementById('seat-left').innerText=seatLeft;
                seatLeft --;
            }
            else {
                alert("You cannot booked more than 4 seat");
            }
            
            


        });
    });

// calculating the discount

const btnApply =document.getElementById('btn-apply');
btnApply.addEventListener('click', function(){
    // console.log("clicked")
const inputField = document.getElementById('input-field').value;
// console.log(inputField)
if( inputField === "NEW15" || inputField === "Couple 20"){
    // console.log("nice")
    const cuponInput = document.querySelector('.cupon-input').classList.add("hidden");
    const btnApply = document.querySelector('.btn-apply').classList.add("hidden");
   
// input field gayebul hawa
   if(inputField === "NEW15" ){
    const discountPrice = document.getElementById('grand-total');
    const discountAmount = totalPrice * 0.2;
    // console.log(discountAmount)
    discountPrice.innerText = discountAmount;
   }
   else if( inputField === "Couple 20"){
    const discountPrice = document.getElementById('grand-total');
    const discountAmount = totalPrice * 0.15;
    // console.log(discountAmount)
    discountPrice.innerText = discountAmount;
   }
}
else{
    alert("Invaild Code");
}


})
   