/**
знайдіть всі <h2> з класом head,
зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner
і поставте їм розмір шрифту 35px (не вносьте змін до html-файлу)
 */

$(document).ready(function () {
  // ваш код
  let h2 = $('h2.head');
  h2.css('background-color', 'green');
  let h2Inner = h2.find('.inner');
  h2Inner.css('font-size', '35px');
});
