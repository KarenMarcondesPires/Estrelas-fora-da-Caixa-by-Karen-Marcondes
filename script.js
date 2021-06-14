const numeroMaximoDePersonagem = 671;
const generateRandomNumber = () => Math.floor(Math.random() * numeroMaximoDePersonagem);

const getCharacter = () => {
    for(let i = 0; i < 4; i++){
        const id = generateRandomNumber();
        fetch (`https://rickandmortyapi.com/api/character/${id}`, 
            {
                method: 'GET', 
                Headers: {
                accept: 'application/json',
                'content Type': 'application/json',
                }  
            }
        ).then((response) => response.json()).then(
            (data => {

                const imgSrc = data.image;
                const imgAlt = 'Imagem do personagem: ' + data.name;
                const nomeDoPersonagem = data.name;
                //console.log(data.name)
               /* this.nomeDoPersonagem = (nomeDoPersonagem)=>{
                    nome.innerHTML = nomeDoPersonagem;
                    document.getElementsByName("nome")
                }*/
                //img.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`; 
                document.getElementById("img" + i).src = imgSrc; 
                document.getElementById("img" + i).alt = imgAlt; 
                document.getElementById("nome" + i).innerHTML = nomeDoPersonagem; 

            })
        );
    };
}
