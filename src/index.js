// import { initAnime } from '.plugins/init_anime'
import { default as anime } from 'animejs';
const initAnime => () = {
  const logo = document.querySelectorAll("g > path")

  const logoAnimation = () => {
    let tl = anime.timeline({
      easing: 'easeInOutSine',
      duration: 250,
      loop: true,
      autoplay: true
    });

    logo.forEach((letter) => {
      console.log(letter.getTotalLength())
      if (letter.getTotalLength() > 120) {
        tl.add({
        targets: letter,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'cubicBezier(1, .585, 1, 1.200)',
        duration: 500,
        })
      } else if (letter.getTotalLength() > 90) {
        tl.add({
        targets: letter,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 400,
        },'-=200')
      } else if (letter.getTotalLength() > 75) {
        tl.add({
        targets: letter,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 300,
        },'-=150')
      } else if (letter.getTotalLength() > 45) {
        tl.add({
        targets: letter,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 275,
        },'-=100')
      } else {
        tl.add({
        targets: letter,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 100,
        },'-=200')
      }
    })
  }
};
