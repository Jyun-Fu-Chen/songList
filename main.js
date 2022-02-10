// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://lyric-api-403c0.firebaseio.com/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////
let songTitle = ``
for (let i = 0; i < album.tracks.length; i++) {
  songTitle += `<li>
  <a class="nav-link" href="#" role="tab">${album.tracks[i]}</a>
  </li>`
}
songList.innerHTML = songTitle


//content

songList.addEventListener('click', function (event) {

  const activeOption = document.querySelector('#song-list .active')
  if (activeOption) {
    activeOption.classList.remove('active')
  }
  if (event.target.classList.contains('nav-link')) {
    event.target.classList.add('active')
    let title = event.target.innerText
    axios.get(`https://api.lyrics.ovh/v1/Adele/${title}`)
      .then(function (response) {
        // handle success
        let lyric = response.data.lyrics
        lyricsPanel.innerHTML = `
  <h3>${title}</h3>
  <pre>${lyric}</pre>
  `
      })
      .catch(function (error) {
        console.log(error);
      })
  }

})


// 本次作業大部分都可以完成，後面部分與active有關是需要看解答後才能完成。自己有嘗試理解，但還是有以下幾個問題
// 1.為什麼在定義變數activeOption的地方後面一定需要加 (空格).active？ 這有什麼特定格式嗎？
// 2.active本來在HTML上是沒有的，這樣定義變數不會導致錯誤嗎？
// 3.為什麼第一個if是刪除父元素ul的active，而第二個if卻是將active加在子元素il的class上？
// 4.我有用下面的方式寫過第一個if，可是出來的結果是籃框無法在我按其他項目時消失。
// const activeOption = songList.classList.contains('active')
// if(activeOption){
//   songList.classList.remove('active')
// }






