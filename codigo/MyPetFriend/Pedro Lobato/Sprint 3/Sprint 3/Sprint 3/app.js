const dbMock = {
    pets: [ 
        { id: 1, 
          nome: 'Buck', 
          descricao: 'Cachorro Pug, Muito Docil', 
          estado: 'MG', 
          cidade: 'Belo Horizonte', 
          idEspecie: 2, 
          imagem: 'https://cdn.discordapp.com/attachments/1040364209931821126/1040364239736557578/cachorro-pug-1588098472110_v2_1x1.jpg' }, 

        { id: 2,
         nome: 'Bento',
         descricao: 'ICachorro Golden, Muito Agressivo ',
         estado: 'MG',
         cidade: 'Betim',
         idEspecie: 2,
         imagem: 'https://cdn.discordapp.com/attachments/1040364209931821126/1040364240000786442/golden-retriever-1.png' }, 

        { id: 3,
         nome: 'Garfield',
         descricao: 'Gato Siamês, Muito Dócil',
         estado: 'SP',
         cidade: 'São Paulo',
         idEspecie: 1,
         imagem: 'https://cdn.discordapp.com/attachments/1040364209931821126/1040364239442939954/2021-05-12-como-deixar-os-gatos-mais-tranquilos.webp' }, 

        { id: 4,
         nome: 'Biscoito',
         descricao: 'Esquilo Da Mongolia, Muito Docil',
         estado: 'RJ',
         cidade: 'Magé',
         idEspecie: 3,
         imagem: 'https://cdn.discordapp.com/attachments/1040364209931821126/1040364240302772286/Lindos-filhotes-de-esquilo-da-monglia-20180211200103.jpg' },

        { id: 5,
         nome: 'Donatello',
         descricao: 'Tartaruga Domestica, Muito Amavel',
         estado: 'SP',
         cidade: 'São Paulo',
         idEspecie: 4,
         imagem: 'https://cdn.discordapp.com/attachments/1040364209931821126/1040364239233228962/Tartarugas-de-estimacao-que-voce-pode-ter-em-casa-1140x641.jpg' }

    ],

    especies: [
        { id: 1, descricao: 'Gato' },
        { id: 2, descricao: 'Cachorro' },
        { id: 3, descricao: 'Roedores' },
        { id: 4, descricao: 'Silvestres' },
    ]
}
let db = JSON.parse (localStorage.getItem('dbPets'))
if (!db) {
    db = dbMock
}

let FILTRO_ESPECIE = 0
let FILTRO_ESTADO = ""

function getDescricaoEspecie (id) {
    let idx = db.especies.findIndex (elem => elem.id == id)
    if (idx != -1)
        return db.especies[idx].descricao
    else    
        return 'Não identificado'
}

function alteraImagem (event) {

}

function exibePets () {
    let str = ''
    for (let i=0; i < db.pets.length; i++) {
        let pet = db.pets[i]
        if (  ((FILTRO_ESPECIE == 0) || pet.idEspecie == FILTRO_ESPECIE) &&  
              ((FILTRO_ESTADO == "") || pet.estado == FILTRO_ESTADO)) {
            str += `<div class="card col-md-4" >
            <img src="${pet.imagem}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${pet.nome}</h5>
              <p class="card-text"><span class="text-danger">${getDescricaoEspecie(pet.idEspecie)}</span><br>
              ${pet.descricao}</p>
              <a href="exibe_pet.html?id=${pet.id}" class="btn btn-primary">Mais detalhes</a>
            </div>
          </div>`
        }
    }
    document.querySelector('#tela').innerHTML = str
}

function exibePet (id) {
    let idx = db.pets.findIndex (elem => elem.id == id)
    if (idx != -1) {
        let pet = db.pets[idx]
        let str = `<div class="card col-md-4" >
            <img src="${pet.imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pet.nome}</h5>
                <p class="card-text"><span class="text-danger">${getDescricaoEspecie(pet.idEspecie)}</span><br>
                ${pet.descricao}</p>
            </div>
            </div>`
    
        document.querySelector('#tela').innerHTML = str    
    }
    else {
        document.querySelector('#tela').innerHTML = '<h1>Pet não encontrado</h1>'    
    }

}

function alterarImagem (id, imageURI) {    
    let idx = db.pets.findIndex (elem => elem.id == id)
    if (idx != -1) {
        db.pets[idx].imagem = imageURI
        localStorage.setItem('dbPets', JSON.stringify (db))
    }
}