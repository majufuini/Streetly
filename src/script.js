const produtos = [
    {
        nome: "Blusa Aurora",
        categoria: "Blusas",
        descricao: "Blusa de manga curta com modelagem confortável e tecido leve, perfeita para looks casuais e modernos.",
        preco: "R$ 59,90",
    },
    {
        nome: "Calça Serena",
        categoria: "Calças",
        descricao: "Calça de cintura alta com corte reto, confortável e versátil, ideal para combinar com diferentes tipos de blusas e calçados.",
        preco: "R$ 119,90",
    },
    {
        nome: "Vestido Luna",
        categoria: "Vestidos",
        descricao: "Vestido curto de tecido leve, com design delicado e moderno. Uma ótima opção para passeios e ocasiões especiais.",
        preco: "R$ 129,90",
    },
    {
        nome: "Jaqueta Bella",
        categoria: "Jaquetas",
        descricao: "Jaqueta jeans de modelagem clássica, perfeita para complementar produções casuais e dar um toque estiloso ao visual.",
        preco: "R$ 149,90",
    },
    {
        nome: "Saia Florença",
        categoria: "Saias",
        descricao: "Saia de cintura alta com caimento soltinho e acabamento delicado. Pode ser usada tanto em looks casuais quanto em produções mais arrumadas.",
        preco: "R$ 89,90",
    }
]

const catalogo = document.getElementById("catalogo");

produtos.forEach(produto => {
    catalogo.innerHTML += `
    <div class="produto">
        <h3>${produto.nome}</h3>
        <p>${produto.categoria}</p>
        <p>${produto.descricao}</p>
        <p>${produto.preco}</p>
    </div>`
});
