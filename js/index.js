numeroLikes=0
function adicionarLike(){
  numeroLikes=1+numeroLikes
  if(numeroLikes)
    {botao.innerHTML=numeroLikes+' Likes'}
   if(numeroLikes==1)
    {botao.innerHTML='1 Like'}
  }