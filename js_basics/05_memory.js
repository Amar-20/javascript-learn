//++++++++++++++++++++++++++++++++++++++++++++++++++++    There are two types of memories +++++++++++++++++++++++++++++++++++

// 1)stack (primintive type) (copy)
 let name='amar'
 let anothername=name
 anothername='konan'
 console.log(anothername)
 console.log(name)

// 2)Heap  (Reference type) (reference) 
  let userOne={
    email: 'useremail@gmail.com',
    id: 1234
  }
  let userTwo=userOne
  //now we will change email in the object
  userOne.email='amar@google.com'
  console.log(userTwo.email)
  console.log(userTwo.email)