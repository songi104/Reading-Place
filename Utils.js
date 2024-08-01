function nightDayHandler(self) {
    const Body = document.querySelector('body');
    const Titles = document.getElementById('Contents').querySelectorAll('a');

    if (self.value === 'night') {
        Body.style.backgroundColor = 'Green';
        Body.style.color = 'white';
        Titles.forEach(div => div.style.color ='pink');
        document.querySelector('.song').querySelector('i').style.color = 'pink';
        self.value = 'day';

    } 
    else if (self.value === 'day') 
    {
        Body.style.backgroundColor = 'white';
        Body.style.color = 'black';
        Titles.forEach(div => div.style.color ='black');
        self.value = 'night';
        document.querySelector('.song').querySelector('i').style.color = 'rgb(136,136,136)';
    }
}
