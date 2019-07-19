// document.querySelector('.autoComplete_input').addEventListener('keydown', e => {
//   console.log(e.target.value);
// });

document.querySelector('.autoComplete_input').addEventListener('keyup', e => {
  console.log(e.target.value);
});

// document.querySelector('.autoComplete_input').onkeydown = e => {
//   console.log(e.keyCode);
//   if (e.keyCode === 40)
//     document.querySelector('.autoComplete_result_item').focus();
//   document.querySelector('.autoComplete_result').style.display = 'block';
// };
// document.querySelector('.autoComplete_result').onkeydown = e => {
//   console.log(e.keyCode);
//   switch (e.keyCode) {
//     // Arrow Up
//     case 38:
//       if (e.target.previousElementSibling)
//         e.target.previousElementSibling.focus();
//       else document.querySelector('.autoComplete_input').focus();
//       break;
//     // Arrow Down
//     case 40:
//       if (!e.target.nextElementSibling) return;
//       else e.target.nextElementSibling.focus();
//       break;
//   }
// };
