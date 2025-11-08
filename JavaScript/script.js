async function product() {
    let data = await fetch('https://dummyjson.com/products');
    let out = await data.json();
    let final = out.products;
    console.log(data);
    console.log(out);
    console.log(final);
    let output = final.map((a) => 
    `<div class="imgBox" id="align">
        <img src="${a.thumbnail}" alt="">
    
    <h3  >${a.price}</h2>
    <h2 id="align">${a.title}</h2>
    <br></br>
    <h3 id="align">${a.brand}</h3>
    <h4 id="align">${a.category}</h4>
    <br></br>
    <button id="btn">View More</button>
    </div>`
);
    document.getElementById("box").innerHTML = output;    

}product();