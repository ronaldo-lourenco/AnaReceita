const caixaPrincipal = document.querySelector(".caixa-principal") ;
const caixaReceita   = document.getElementById("caixa-receita") ;

const receitas =[
    {
        titulo    : "Bolo de mandioca",
        ingredientes :[
            {   imagem: 'imagem/mandioca.jpg',
                descIngrediente: '3 xícaras de mandioca ralada grosso'
            },
            {   imagem: 'imagem/manteiga.jpg',
                descIngrediente: '3 colheres de manteiga'
            },            
            {   imagem: 'imagem/ovo.jpg',
                descIngrediente: '4 ovos'
            },            
            {   imagem: 'imagem/queijo-ralado.jpg',
                descIngrediente: '1 pacote 50 g de queijo ralado'
            },            
            {   imagem: 'imagem/acucar.jpg',
                descIngrediente: '1 e 1/2 xícara de açúcar'
            },            
            {   imagem: 'imagem/farinha-de-trigo.jpg',
                descIngrediente: '1 e 1/2 xícara de farinha de trigo'
            },            
            {   imagem: 'imagem/coco-ralado.jpg',
                descIngrediente: '1 pacote 50 g de coco ralado'
            },            
            {   imagem: 'imagem/fermento-em-po.jpg',
                descIngrediente: '1 colher (sopa) de fermento em pó'
            }
        ],
        descricao : "Bata a manteiga com o açúcar e os ovos. Misture a mandioca ralada. Junte a farinha e o fermento. Por último, acrescente o coco e o queijo ralado. Asse em forma untada em forno preaquecido por 40 minutos." 
    },
    {
        titulo    : "Receita2",
        ingredientes :[
            {   imagem: 'imagem/mandioca.jpg',
                descIngrediente: '3 xícaras de mandioca ralada grosso'
            }
        ],   
        descricao : "Descrição da Receita2" 
    }    
] ;

let atual = 0 ;
let receitaAtual ;

function mostraReceita(){
    caixaReceita.textContent = "" ;
    for (const receita of receitas){
        const sumarioReceita    = document.createElement("h2") ;
        const tituloIngrediente = document.createElement("h3") ;
        sumarioReceita.textContent  = receita.titulo ; 
        caixaReceita.appendChild(sumarioReceita) ;
        tituloIngrediente.textContent = 'Ingredientes' ; 
        caixaReceita.appendChild(tituloIngrediente) ;
        const descricaoIngrediente = document.createElement("ig") ;
        for (const desc_Ingrediente of receita.ingredientes){
            const novaImagem = document.createElement('img') ;
            novaImagem.src = desc_Ingrediente.imagem ;
	    const textNode = document.createElement('div') ;
            textNode.textContent = desc_Ingrediente.descIngrediente ;
            descricaoIngrediente.appendChild(novaImagem) ;
            descricaoIngrediente.appendChild(textNode) ;
        } ;   
        caixaReceita.appendChild(descricaoIngrediente) ;
        const descReceita = document.createElement("p") ;
        descReceita.textContent = 'Procedimento:' ; 
        caixaReceita.appendChild(descReceita) ;
        const descReceitaAux = document.createElement("r") ;
        descReceitaAux.textContent = receita.descricao ; 
        caixaReceita.appendChild(descReceitaAux) ;
    }
} ;

mostraReceita() ;
