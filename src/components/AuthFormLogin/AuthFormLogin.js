// Компонент містить в собі форму з полями логінізації та кнопкою Login і елементом навігації Register
//  - кнопка Login - активізує перевірку на валідність введеної користувачем інформації. У разі їх валідності - відправляє запит на бекенд щодо авторизації користувача.  У разі введення користувачем невалідних значень - візуалізувати це йому у вигляді повідомлення
//  - елемент навігації Register - переадресовує користувача на сторінку RegisterPage

//  Всі поля форми валідуються і виводять користувачу відповідну інформацію у випадку, якщо введене значення не валідне

//  Після авторизації користувач повинен бути переадресований на сторінку UserPage. Якщо з бекенда було отримано помилку авторизації - користувачу необхідно вивести  відповідну інформацію і вигляді нотіфікації 