var usuarioAtual = "João";
let defaultThreads = [
    {
        id: 1,
        titulo: "Animal 1",
        autor: "João",
        content: "Thread content",
        comentarios: [
            {
                usuario: "Pedro",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, doloribus?"
            },
            {
                usuario: "Arthur",
                content: "Velit dolore natus qui quis nobis."
            }
        ]
    },
    {
        id: 2,
        titulo: "Animal 2",
        autor: "Pedro",
        content: "Thread content 2",
        comentarios: [
            {
                usuario: "Paulo",
                content: "Architecto at est harum fuga excepturi nisi facere velit"
            },
            {
                usuario: "Lucas",
                content: "inventore, eius facilis reiciendis voluptate numquam ipsam"
            }
        ]
    },
    {
        id: 3,
        titulo: "Animal 3",
        autor: "João",
        content: "Thread content",
        comentarios: [
            {
                usuario: "Pedro",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, doloribus?"
            },
            {
                usuario: "Arthur",
                content: "Velit dolore natus qui quis nobis."
            }
        ]
    }
]

let threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}