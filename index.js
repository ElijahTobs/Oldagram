const containerEl = document.getElementById("container")
// const sectionEl = document.getElementById("section")

const posts = [
  {
    name: "Cristiano Ronaldo",
    username: "elijahDev",
    location: "Lagos, Nigeria",
    my_avatar: "img/elijah-1.jpg",
    avatar: "img/c-ron1.jpg",
    post: "img/ronaldo1.jpg",
    comment: "You're the greatest football player alive. The G.O.A.T",
    likes: "14,382,195"
  },
  {
    name: "Cristiano Ronaldo",
    username: "elijahDev",
    location: "Lagos, Nigeria",
    my_avatar: "img/elijah-1.jpg",
    avatar: "img/c-ron1.jpg",
    post: "img/ronaldo2.jpg",
    comment: "You're the greatest football player alive. The G.O.A.T",
    likes: "15,496,335"
  },
  {
    name: "Cristiano Ronaldo",
    username: "elijahDEev",
    location: "Lagos, Nigeria",
    my_avatar: "img/elijah-1.jpg",
    avatar: "img/c-ron1.jpg",
    post: "img/ronaldo3.jpg",
    comment: "You're the greatest football player alive. The G.O.A.T",
    likes: "13,218,729"
  },

]

let getCards = ""

function renderCard() {
  for (let x in posts){
    const name = posts[x].name
    const username = posts[x].username
    const location = posts[x].location
    const my_avatar = posts[x].my_avatar
    const avatar = posts[x].avatar
    const post = posts[x].post
    const comment = posts[x].comment
    const likes = posts[x].likes

    let card = `
      <section class="bg-white">
        <div class="top flex align-center bg-white">
          <img class="small-img" src=${avatar} alt="">
          <div class="details">
            <p class="name bold">${name}</p>
            <p class="location">${location}</p>
          </div>
        </div>

        <div class="main-img">
          <img src=${post} alt="">
        </div>

        <div class="interaction">
          <div class="icons">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-share-from-square"></i>
          </div>

          <p class="likes bold">${likes} likes</p>
          
          <p class="comment"><span class="bold">${username}</span>${comment}</p>
        </div>
      </section>
    `
    getCards += card
  }
      
}

renderCard()

let cardEl = document.createElement("div")
cardEl.innerHTML = getCards

containerEl.append(cardEl)

// containerEl.innerHTML += getCards
