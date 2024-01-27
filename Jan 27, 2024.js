function friend(friends){
  let newFriends = []
  let friendsFinder= friends.map((item)=>{if(item.length==4){
    newFriends.push(item)
  }
  })
  return newFriends
}