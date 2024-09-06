const titulo = document.querySelector('.titulo')
const imagemPerfil = document.querySelector('.imagem-perfil')
const loginPerfil = document.querySelector('.login-perfil')
const segPerfil = document.querySelector('.seg-perfil')
const reposPerfil = document.querySelector('.repos-perfil')
const bioPerfil = document.querySelector('.bio-perfil')
const localidadePerfil = document.querySelector('.localidade-perfil')


const getInfos = async () =>{
    const response = await fetch('https://api.github.com/users/MarcioAlex-x')
    const data = await response.json()
    if(!data){
        titulo.innerHTML = 'Alex Freitas'
        reposPerfil.innerHTML = '60'
        imagemPerfil.setAttribute('src','https://via.placeholder.com/100x100')
        bioPerfil.innerHTML = 'Sou Alex Freitas desenvolvedor da web'
        segPerfil.innerHTML=`Seguidores 123 e seguindo 123 perfis`
        localidadePerfil.innerHTML = 'João Pessoa'
    }else{
        titulo.innerHTML = data.name
        reposPerfil.innerHTML = data.public_repos
        imagemPerfil.setAttribute('src',data.avatar_url)
        bioPerfil.innerHTML = data.bio
        segPerfil.innerHTML=`Seguidores ${data.followers} e seguindo ${data.following} perfis`
        localidadePerfil.innerHTML = data.location   
    }   
}
getInfos()

