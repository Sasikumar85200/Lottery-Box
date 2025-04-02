const pickanumber=document.getElementById("pick");
const result=document.getElementById("result");
const boxcontainer=document.getElementById("box-container");
const ticksounnd=new Audio("tick.wav");
const winning=new Audio("winning.mp3");

const list=["₹100 Cash",
        " Toy Car",
       "Chocolate Box",
        "₹500 Cash",
        "Smartphone Cover",
        "Book",
        "Headphones",
        "₹50 Cash",
        "Gift Voucher",
        "Watch",
        "Teddy Bear",
        "Bluetooth Speaker",
        "Movie Ticket",
        "₹200 Cash",
        "Puzzle Game",
        "Perfume",
        "Sunglasses",
        "₹1000 Cash",
        "Board Game",
        "Fittness Band",
        "Digital Clock",
        "Lamp",
        "Shopping Voucher",
        "Laptop Bag",
        "Wirelss Mouse",
        "Travel Mug",
        "Notebook Set",
        "Gaming Mousepad",
        "₹250 Cash",
        "Key Chain",
        " Water Bottle", 
        "Portable Charger",
        "Desk Organizer",
        "Cooking Set",
        "Action Figure",
        "₹300 Cash",
        "Travel Pillow",
        "Mini Backpack",
        "Personalized Mug",
        "Gaming Controller",
        "Camera Strap",
        "Toy Robot",
        "₹750 Cash",
        "Sports Equipment",
        "Pen Set",
        "Bluetooth Earbuds",
        "Digital Photo Frame",
        "Wallet",
        "Backpack",
        " Gift Hamper"
];

console.log(list);
pickanumber.addEventListener("click",function(){
    for(let i=1; i<50;i++){
        document.getElementById(i).classList.remove("winning");
    }
    result.textContent="Please Wait...";
    // setTimeout(() => {
    
    // }, 5000);
    let secondcount=0;
   const intervalid= setInterval(function()  {
        ticksounnd.pause();
        ticksounnd.continue=0;
        ticksounnd.play();

        
        secondcount=secondcount+1;
        const randombox=Math.floor(Math.random()*50)+1;

        for(i=1; i<=50;i++){
            if(i===randombox){
                document.getElementById(i).classList.add("highlighted");
            }else{
                document.getElementById(i).classList.remove("highlighted");
            }
        }

        if(secondcount===5){
            let random=Math.random()*50;
            let round=(Math.floor(random))+1;
            const gift=(list[round-1]);
            result.textContent=` Congrats 🎉 You have got  ${round} , and you won ${gift}.`;
            document.getElementById(randombox).classList.remove("highlighted");
            document.getElementById(round).classList.add("winning");
            winning.pause();
            winning.currenttime=0;
            winning.play();
            clearInterval(intervalid);
            }
    }, 1000);
    
})

list.forEach(function(value,i){
    const boxelement=`<div class="lottery" id=${i+1}>${i+1}. ${value}</div>`;
    console.log(boxelement);
    boxcontainer.insertAdjacentHTML("beforeend",boxelement);
});