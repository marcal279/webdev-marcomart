var users={
    'marc@gmail.com': 'admin@123',
    'david@hotmail.com': 'david@123',
};
var maxAttempts = 3;

function login(){
    if(maxAttempts>0){
        let email = document.getElementById("emailBox").value;
        let password = document.getElementById("passwordBox").value;

        if(users[email] == undefined){
            alert('Please check email entered!!');
            // append node saying same thing here
            maxAttempts--;
        }
        else{
            if(password == users[email]){
                alert('Login success!!');
                maxAttempts = 3;
                window.location.href = "./home.html";
                //redirect to next page here
            }
            else alert("Wrong password!!");
        }
    }
    else alert("You have exceeded maximum attempts!");
}

function createAccount(){
    let email = document.getElementById("emailBox").value;
    let password = document.getElementById("passwordBox").value;

    if(email=="" || password == ""){
        alert("Please enter details of new account in given textboxes!!");
    }
    else{
        users[email] = password;
        console.log(users);
        alert('Account creation Success!!');
        alert('Login success!!');
        window.location = "./home.html";
    }
}


var productList=[
    {name:'Default Product', desc:'a description about the product', price:'2999', oldPrice: '3499', picture:'images/not-found.jpg'},
    {name:'Apple Airpods - Ferrari Matte Red', desc:'Apple Apple Apple Apple', price:'12,499', oldPrice: '14,499', picture:'images/products/redAirpods-whiteBG.png'},
    {name:'H&M Mens Brown Suede Winter Jacket', desc:'A description about the product', price:'2,499', oldPrice: '3,999', picture:'images/products/mensBrownSuedeJacket.png'},
    {name:'Mens Navigator Sunglasses - Grey', desc:'A description about the product', price:'1,799', oldPrice: '2,499', picture:'https://th.bing.com/th?id=OPA.%2bXMMhOkjIGeewg474C474&w=248&h=248&o=5&pid=21.1'},
    {name:"Puma Slip-On Men's Shoes - Gray", desc:'A description about the product', price:'1,649', oldPrice: '3,299', picture:'https://th.bing.com/th?id=OPA.b8%2bjNWommwVzMA474C474&w=248&h=248&o=5&dpr=1.25&pid=21.1'},
    {name:"Wakefit L Shape Sofa Set (3 Seater + Left Aligned Chaise)", desc:'A description about the product', price:'29,893', oldPrice: '39,299', picture:'https://wakefit-co.s3.ap-south-1.amazonaws.com/img/sofa-sets/napper/sectional/lc/FOBL/2.jpg'},
    {name:"Allen Solly Woman's Pink Summer Dress", desc:'A description about the product', price:'1,149', oldPrice: '2,299', picture:'https://th.bing.com/th?id=OPA.b1uV5prAMYIorQ474C474&w=248&h=248&o=5&pid=21.1'},
    {name:"Children's Learning Science Lab Activity Kit", desc:'A description about the product', price:'1,649', oldPrice: '1,999', picture:'https://th.bing.com/th?id=OPA.3%2blffmfNgTgUZg474C474&w=248&h=248&o=5&dpr=1.25&pid=21.1'},
    {name:"Canon EOS 80D DSLR Camera | 18-135 mm Lens (Black)", desc:'A description about the product', price:'89,999', oldPrice: '1,11,995', picture:'https://rukminim1.flixcart.com/image/416/416/jefzonk0/dslr-camera/g/v/r/eos-80d-80d-canon-original-imaf329wfqqyawwx.jpeg?q=70'},
    {name:"OnePlus 8T | 5G Unlocked Android Smartphone", desc:'A description about the product', price:'39,302', oldPrice: '', picture:'https://m.media-amazon.com/images/I/71YRy9m7fVS._AC_SL1500_.jpg'},
    {name:"Indoor Water Fountain With LED Lights", desc:'A description about the product', price:'2,357', oldPrice: '4,074', picture:'https://m.media-amazon.com/images/I/81VIZePEg0L._AC_SL1500_.jpg'},
    {name:"Amazon Echo Dot (3rd Gen) with Alexa", desc:'A description about the product', price:'3,333', oldPrice: '4,999', picture:'https://vlebazaar.in/image/cache/catalog/B07PFFMP9P/Echo-Dot-3rd-Gen-New-and-improved-smart-speaker-with-Alexa-Black-B07PFFMP9P-1-550x550.jpg'},
    {name:"Housecret Pack of 12 Strong Scented Candles Gift Set", desc:'A description about the product', price:'1,571', oldPrice: '2,357', picture:'https://m.media-amazon.com/images/I/81ruA5e1p9L._AC_SL1500_.jpg'},
];

var placeholder = " Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//var prodID = 0;
window.prodID = 0;

function productPage(index){
        // prodID = index;
        // window.prodID = index;
    sessionStorage.setItem("prodID", index);
    // alert( "ProdID changed to "+ sessionStorage.getItem("prodID") );
    window.location = "./product.html";
}

function setProdDetails(){  
    let newID = Number(sessionStorage.getItem("prodID"))
    // alert("Product ID being used: "+newID);
    document.getElementById("prodName").innerHTML = productList[newID]['name'];
    document.getElementById("prodDesc").innerHTML = productList[newID]['desc'] + placeholder;
    document.getElementsByClassName("price-tag")[0].innerHTML = "₹"+productList[newID]['price'];
    document.getElementsByClassName("old-price")[0].innerHTML = "₹"+productList[newID]['oldPrice'];

    document.getElementById("prodImg").src = productList[newID]['picture'];

    document.title = productList[newID]['name'] + " | MarcoMart";
}

function productSquare(index){
    // no need for hardcoding the product squares, just put in index it'll change innerHTML
}

var cartItems = 0;

// function addToCart(index){
//     cartItems++;
//     let productSquare = document.getElementsByClassName("product-square")
//     let addToCartButton = productSquare.getElementsByClassName("add-to-cart")[index-1];
//     productSquare.addToCartButton.remove();
//     productSquare.
// }