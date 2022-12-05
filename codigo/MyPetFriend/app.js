// declara um conjunto inicial de animais
var dbMock = {
    "pets": [
        {
          "id": 1, 
          "nome": 'Baunilha', 
          "tipo": 'Cachorro', 
          "sexo": 'Fêmea', 
          "idade": '4 anos', 
          "porte": 'Porte pequeno', 
          "raca": 'Raça: Shih-tzu', 
          "estado": 'Minas Gerais', 
          "cidade": 'Belo Horizonte', 
          "historia": 'Olá humano! Sou a Baunilha, nasci em Belo Horizonte, Minas Gerais. Quando tinha 5 meses fui encontrada, pelo meu tutor, andando na rua sozinha, triste e com fome. Ele me acolheu e cuidou muito bem de mim durante esses 4 anos. Recentemente, ele recebeu uma proposta de trabalho em outro país e vai ter que se mudar para lá. Infelizmente, ele não vai conseguir me levar, pois sabe que não terá tempo para cuidar de mim. Por isso, ele está procurando alguém para me adotar e ser minha nova família!', 
          "topico1": 'Calma',
          "topico2": 'Vacinada',
          "topico3": 'Castrada',
          "telefone": 'Bryan - Celular: (31) 99857-4356',
          "imagem1": 'Imagens/Baunilha1.jpeg',
          "imagem2": 'Imagens/Baunilha2.jpeg',
          "imagem3": 'Imagens/Baunilha3.jpg', 
          "idEspecie": 1
        },
        {
            "id": 2,
            "nome": 'Caramelo',
            "tipo": 'Cachorro',
            "sexo": 'Macho',
            "idade": '2 anos',
            "porte": 'Porte médio',
            "raca": 'Raça: SRD',
            "estado": 'São Paulo',
            "cidade": 'Campinas',
            "historia": 'Oi, eu sou o Caramelo! Fui abandonado pelos meus antigos donos e atualmente moro em um canil de adoção cheio de Aumigos. Mesmo gostando da companhia desses meus amigos, quero encontrar alguém especial para me amar e cuidar! Se me adotar, vamos brincar muito e serei seu eterno companheiro!',
            "topico1": 'Brincalhão',
            "topico2": 'Castrado',
            "topico3": 'Vacinado',
            "telefone": 'Canil - Celular: (19) 98819-5634',
            "imagem1": 'Imagens/Caramelo1.jpg',
            "imagem2": 'Imagens/Caramelo2.jpg',
            "imagem3": 'Imagens/Caramelo3.jpg',
            "idEspecie": 1
        },
        {
            "id": 3,
            "nome": 'Bruce',
            "tipo": 'Cachorro',
            "sexo": 'Macho',
            "idade": '5 anos',
            "porte": 'Porte médio',
            "raca": 'Raça: SRD',
            "estado": 'Minas Gerais',
            "cidade": 'Lavras',
            "historia": 'Oi pessoal! Eu sou o Bruce, um cachorro muito dócil e companheiro! Fui encontrado na rua com muita fome por um anjo da guarda chamado Felipe, ele cuidou de mim até que eu ficasse bem novamente! Infelizmente, ele não pode ficar comigo por conta da falta de espaço em sua casa. Portanto, ele está procurando uma pessoa responsável para cuidar de mim tão bem quanto ele!',
            "topico1": 'Vacinado',
            "topico2": 'Castrado',
            "topico3": 'Fiel',
            "telefone": 'Felipe - Celular: (35) 99874-3210',
            "imagem1": 'Imagens/Bruce1.jpg',
            "imagem2": 'Imagens/Bruce2.jpg',
            "imagem3": 'Imagens/Bruce3.jpg',
            "idEspecie": 1
        },
        {
            "id": 4,
            "nome": 'Safira',
            "tipo": 'Gato',
            "sexo": 'Fêmea',
            "idade": '2 anos',
            "porte": 'Porte pequeno',
            "raca": 'Raça: Siamesa',
            "estado": 'Rio de Janeiro',
            "cidade": 'Rio de Janeiro',
            "historia": 'Oi galera! Me chamo Safira, sou uma gatinha que ama carinho e adoro ter um lugarzinho só para mim. Minha dona está passando por dificuldades financeiras e não tem mais condições de cuidar de mim. Por isso, ela está procurando um novo lar aconchegante e cheio de carinho para mim. Ela quer garantir que eu seja muito bem cuidada pela minha nova família!',
            "topico1": 'Vacinada',
            "topico2": 'Castrada',
            "topico3": 'Calma',
            "telefone": 'Fernanda - Celular: (21) 98805-9865',
            "imagem1": 'Imagens/Safira1.jpg',
            "imagem2": 'Imagens/Safira2.jpg',
            "imagem3": 'Imagens/Safira3.jpg',
            "idEspecie": 2
        },
    ]
}


// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse (localStorage.getItem('dbPets'))
if (!db) {
    db = dbMock
}


// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(pet) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.pets.length != 0) 
      novoId = db.pets[db.pets.length - 1].id + 1;
    let novoPet = {
        "id": novoId,
        "nome": pet.nome,
        "tipo" : pet.tipo,
        "telefone": pet.telefone,
        "cidade" : pet.cidade,
        "estado": pet.estado,
        "topico1": pet.topico1,
        "topico2": pet.topico2,
        "topico3": pet.topico3,
        "sexo": pet.sexo,
        "raca": pet.raca,
        "idade": pet.idade,
        "porte": pet.porte,
        "imagem1": 'Imagens/BaseCadastroPet.png',
        "historia": pet.historia,
    };

    // Insere o novo objeto no array
    db.pets.push(novoPet);
    displayMessage("Animal cadastrado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbPets', JSON.stringify(db));
}




function exibePets () {
    let str = ''
    for (let i=0; i < db.pets.length; i++) {
        let pet = db.pets[i]
        str += 
        `<div class="col-lg-4 col-md-4 col-sm-12 sep">
            <div class="card" style="width: 18rem;">
                <img src="${pet.imagem1}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${pet.nome} </h5>
                <p class="card-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    ${pet.estado}, ${pet.cidade} 
                </p>
                <p class="card-text">${pet.raca}, ${pet.porte} </p>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="#" class="card-link"> <a href="pagPet.html?id=${pet.id}"> Página do animal</a> </a></li>
            </ul>       
            </div>
        </div>`
    }
    document.querySelector('#tela').innerHTML = str
}


function exibePet (id) {
    let idx = db.pets.findIndex (elem => elem.id == id)
    if (idx != -1) {
        let pet = db.pets[idx]
        let str = `<main class="container">
        <section id="tela" class="row animal">
            <div class="col-12 col-md-6 col-lg-6 imagens">
                <img src="${pet.imagem1}" class="petImagem1">
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputImagem">Altere a foto de ${pet.nome}:</label>
                        <input type="file" class="form-control" id="inputImagem" onchange="previewFile()">
                    </div>
                </div>
                
                
            </div>


            <div class="col-12 col-lg-6">
                <h1 class="nome"> ${pet.nome} </h1>
                <p class="info"> ${pet.tipo} | ${pet.sexo} | ${pet.idade} | ${pet.porte} | ${pet.raca} </p>
                <p class="localizacao"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    Está em ${pet.cidade}, ${pet.estado}
                </p>
    
                <div>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Entrar em Contato
                    </button>
                </div>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                       ${pet.telefone}
                    </div>
                </div>
                
                <div class="historia">
                    <h4> A história de ${pet.nome}: </h4>
                    <p> ${pet.historia} </p>
                </div>
                
                <div class="tags">
                    <h5> Mais sobre ${pet.nome}: </h5>
                    <span class="badge badge-pill badge-primary"> ${pet.topico1} </span>
                    <span class="badge badge-pill badge-primary"> ${pet.topico2} </span>
                    <span class="badge badge-pill badge-primary"> ${pet.topico3} </span>
                </div>
                

            </div>


        </section>
    </main>`

        document.querySelector('#tela').innerHTML = str    
    }
    else {
        document.querySelector('#tela').innerHTML = '<h1>Pet não encontrado</h1>'    
    }


}

function alterarImagem (id, imageURI) {    
    let idx = db.pets.findIndex (elem => elem.id == id)
    if (idx != -1) {
        db.pets[idx].imagem1 = imageURI
        localStorage.setItem('dbPets', JSON.stringify (db))
    }
}







