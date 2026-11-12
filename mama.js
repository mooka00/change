
const result = document.getElementById('result');
const movie = document.getElementById('movie');
const poster = document.getElementById('poster')
const title = document.getElementById('title')
const desc = document.getElementById('description')

movie.addEventListener('change', () => {
    if (movie.value === 'space') {
        poster.src = 'hh/cosmos.jpg';
        poster.alt = 'Обложка фильма «Космическая вишенка на торте»';
        title.innerHTML = 'Космическая вишенка на торте'
        desc.innerHTML = 'Идеальное дополнение.'
    } else if (movie.value === 'house') {
        poster.src = 'hh/house.jpg';
        poster.alt = 'Обложка фильма «Дом Апокалипсис»';
        title.innerHTML = 'Дом Апокалипсис'
        desc.innerHTML = 'Дом в котором творятся странные вещи.'
    } else {
        poster.src = 'hh/train.jpg';
        poster.alt = 'Обложка фильма «Поезд смерти»';
        title.innerHTML = 'Поезд смерти'
        desc.innerHTML = 'Я попал в поезд где меня хотели убить но я стал сильным и отомстил обидчикам.'
    }
});
