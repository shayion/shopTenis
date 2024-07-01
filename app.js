const tenis = document.getElementById('tenis');

const displayProducts = (products) => {
    const productsHTMLString = products.map(product => `
            <div class='product'>
                <img src="${product.image}" alt="${product.name}"/>
                <h2>${product.id}. ${product.name}</h2>
                <p><strong>Marca:</strong> ${product.brand}</p>
                <p><strong>Tamanho:</strong> ${product.size}</p>
            </div>
        `).join('');
    
        tenis.innerHTML = productsHTMLString;
};

const fetchProducts = () => {
    fetch('manifest.json')
        .then(response => response.json())
        .then(data => {
            const products = data.products.map(product => ({
                id: product.id,
                name: product.name,
                brand: product.brand,
                size: product.size,
                image: product.image
            }));
            displayProducts(products);
        })
        .catch(error => {
            console.error('Erro ao carregar produtos:', error);
        });
};

fetchProducts();

