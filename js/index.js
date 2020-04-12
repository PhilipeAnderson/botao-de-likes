numeroLikesFacebook = 0
numeroLikesPinterest = 0
numeroLikesYoutube = 0
numeroLikesInstagram = 0


function adicionarfacebook(){
  numeroLikesFacebook++
  if(numeroLikesFacebook)
    {botao1.innerHTML = numeroLikesFacebook + ' Likes'}
   if(numeroLikesFacebook == 1)
    {botao1.innerHTML = '1 Like'}
  }

  function adicionarpinterest(){
    numeroLikesPinterest++
    if(numeroLikesPinterest)
      {botao2.innerHTML = numeroLikesPinterest + ' Likes'}
     if(numeroLikesPinterest==1)
      {botao2.innerHTML='1 Like'}
    }

    function adicionarYoutube(){
      numeroLikesYoutube++
      if(numeroLikesYoutube)
        {botao3.innerHTML = numeroLikesYoutube + ' Likes'}
       if(numeroLikesYoutube==1)
        {botao3.innerHTML='1 Like'}
      }

      function adicionarInstagram(){
        numeroLikesInstagram++
        if(numeroLikesInstagram)
          {botao4.innerHTML = numeroLikesInstagram + ' Likes'}
         if(numeroLikesInstagram==1)
          {botao4.innerHTML='1 Like'}
        }