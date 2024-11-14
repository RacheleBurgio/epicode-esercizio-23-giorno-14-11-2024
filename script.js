const loadBtn = document.getElementById('loadBtn')
const secondLoadBtn = document.getElementById('secondLoadBtn')
const imgNew = document.getElementsByClassName(
  'bd-placeholder-img card-img-top'
)
const cards = document.querySelectorAll('.card')
const ids = document.querySelectorAll('.text-muted')
const API_KEY = '5rOfqg3sEG6IqSidyB26BBiZVwur4nqaCvrhpCS2IcI6TA26RWkIzEY1'
const URLKittens = 'https://api.pexels.com/v1/search?query=Kittens'
const URLBooks = 'https://api.pexels.com/v1/search?query=Books'

const fetchImg1 = () => {
  fetch(URLKittens, {
    method: 'GET',
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((result) => {
      console.log('result', result)
      console.log('fetch terminata correttamente')
      if (result.ok) {
        return result.json()
      } else {
        throw new Error('404- not found')
      }
    })
    .then((photo) => {
      for (
        let i = 0;
        i < photo.photos.length && i < imgNew.length && i < ids.length;
        i++
      ) {
        imgNew[i].setAttribute('src', photo.photos[i].src.landscape)

        if (ids[i]) {
          ids[i].textContent = photo.photos[i].id
        } else {
          console.log(
            `Elemento con nome 'text-muted' non trovato per l'indice ${i}`
          )
        }
      }
    })
    .catch((errore) => {
      console.log(errore)
    })
}
const fetchImg2 = () => {
  fetch(URLBooks, {
    method: 'GET',
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((result) => {
      console.log('result', result)
      console.log('fetch terminata correttamente')
      if (result.ok) {
        return result.json()
      } else {
        throw new Error('404- not found')
      }
    })
    .then((photo) => {
      for (
        let i = 0;
        i < photo.photos.length && i < imgNew.length && i < ids.length;
        i++
      ) {
        imgNew[i].setAttribute('src', photo.photos[i].src.landscape)

        if (ids[i]) {
          ids[i].textContent = photo.photos[i].id
        } else {
          console.log(
            `Elemento con nome 'text-muted' non trovato per l'indice ${i}`
          )
        }
      }
    })
    .catch((errore) => {
      console.log(errore)
    })
}

const load = function () {
  loadBtn.onclick = fetchImg1
  secondLoadBtn.onclick = fetchImg2
}

const hideCards = function () {
  cards.forEach((card) => {
    const hideBtn = card.querySelector('.hide')
    if (hideBtn) {
      hideBtn.addEventListener('click', () => {
        card.classList.add('d-none')
      })
    }
  })
}

hideCards()
load()
