function changedCost() {
    console.log(document.getElementById('quant').value);
    console.log(document.getElementById('gooey-bun-cost').innerText);
    let quantity = document.getElementById('quant').value;
    let currCost = document.getElementById('gooey-bun-cost').innerText;
    console.log('Current Cost is: ' + currCost);
    if(quantity === '1') {
        currCost = '3.00';
    } else if (quantity === '3') {
        currCost = '8.50';
    } else if (quantity === '6') {
        currCost = '14.00';
    } else {
        currCost = '25.00'
    };
    document.getElementById('gooey-bun-cost').innerText = currCost;
    console.log('Now your cost is: ' + currCost);
}