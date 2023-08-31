function calculateShipping(productNumber) {
    const quantityInput = document.getElementById(`quantity${productNumber}`);
    const resultElement = document.getElementById(`result${productNumber}`);
    const quantity = parseInt(quantityInput.value);
    
    // Preços dos skates
    const prices = [100, 120, 90];
    const shippingRate = 10; // Taxa de frete fixa por skate
    
    if (isNaN(quantity) || quantity <= 0) {
        resultElement.textContent = "Digite uma quantidade válida.";
    } else {
        const totalCost = prices[productNumber - 1] * quantity + shippingRate * quantity;
        resultElement.textContent = `Custo total: R$${totalCost}`;
    }
}