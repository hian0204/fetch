fetch('htpps://swapi.co/api/people/5')
  .then(function(result){
      return result.json()
  })
  .then(function(data){
      console.log(data)
  })


