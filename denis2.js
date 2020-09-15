let cereais = [
  {
    nome: "Novo arroz do sul",
    valor: 25,
    tipo: "Arroz Branco",
    lojas: [
      {
        nome: "Loja do marcos",
        endereco: "rua alvorada 123",
        donos: [
          { nome: "Joao", idade: 28 }
        ]
      },
      {
        nome: "supermercado carrefour",
        endereco: "avenida dos autonomistas 3444",
        donos: [
          { nome: "Mario oliveira", idade: 45 },
        ]
      }
    ]
  },
  {
    nome: "Sucrilhos Kellogs",
    valor: 32.50,
    tipo: "Cereal",
    lojas: [
      {
        nome: "mercado do joão",
        endereco: "rua brás de bina 233",
        donos: [
          { nome: "carla souza", idade: 38 }
        ]
      },
      {
        nome: "extra ipiranga",
        endereco: "rua ipiranga 544",
        donos: [
          { nome: "kleber carlos", idade: 60 },
        ]
      }
    ]
  }
]

for (i = 0; i < cereais.length; i++) {
  console.log(`O produto ${cereais[i].nome} do tipo ${cereais[i].tipo} custa ${cereais[i].valor}. `)

  // // `O produto ${ cereais[i].nome } do tipo ${ cereais[i].tipo } custa ${ cereais[i].valor }.Você pode encontrá - lo nas lojas ${ cereais[i].lojas.nome }, localizadas no endereço ${ cereais[i].lojas.endereco }, pertencente ao dono ${ cereais[i].lojas[i].donos.nome } de ${ cereais[i].lojas[i].donos.idade } `

}