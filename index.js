
//Criar um menu onde pode ser feito login e cadastro. 


//Objeto de usuários
const users = {
    nome: '',
    usuario: '',
    senha: '',
    logado: false,
}

//Array de objetos dos usuários
let usersArray = [];



function startApp() {
     let opcao = 999;
     let result;
  
    while(opcao !== 0){
        opcao = Number(prompt('Selecione a opção desejada: \n '+
        '1- Entrar\n' +
        '2- Cadastrar\n'+
        '3- Esqueci minhas credenciais\n '+
        '0- Sair'));
  
     switch (opcao) {
        case 1:
         result = login ();
         if(result){
            alert('acessar menu principal');
         }else
          alert('Usuário ou senha incorreto(s)')
            break;
        case 999:
        alert('Você precisa estar logado para acessar o menu principal!\n\n'+
        'Caso ainda não tenha usuário cadastrado, utilize a opção 2 do menu e faça seu registro.')    
            break;
        case 2:
          result = register();
          if (!result) {
            alert('Não foi possível realizer o cadastro :/')
          } else {
            alert('Usuário cadastrado com sucesso! ☺ ');
          }
           
        
            break;
        case 3:
        let esqueciSenha = prompt('Digite o e-mail para enviar código de redefinição:')
            break;
         default:
            alert('Opção não encontrada')
            break;
        }
    }
    
}

function login() {
    let user = prompt("Digite seu usuário:");
    let pass = prompt("Digite sua senha:");

 return validateLogin(user, pass);

}

function validateLogin(user,pass){
    let result = false;
    for(let i = 0; i < usersArray.length; i++) {
        //console.log(usersArray[i]);
        if(usersArray[i].usuario === user && usersArray[i].senha === pass)
          {
            result = true;
            usersArray[i].logado = true;
          }
          
    }
    return result;
}


function register() { 
    
    let result = false;

    users.nome = prompt('Digite seu Nome: ');
    users.usuario = prompt('Digite seu usuário:');
    users.senha = prompt('Digite sua senha: ');

    if (users.nome !== '' && users.senha !== '') {
        usersArray.push(users);
        result = true
    }
    return result 
    
}

 
//inicia o sistema
startApp();
