const people = ["gabrielle", "nicolas", "kulas", "mark", "tony", "spear"];


const inputEl = document.querySelector('.gabrielle');
const btn = document.querySelector('.btn');
const loremForm = document.querySelector('.lorem-form');
const result = document.querySelector('.result');
loremForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = parseInt(inputEl.value);
    result.textContent = people[inputEl.value];
    if (value > 7 || value === 7 || value === 6)  {
        result.textContent = "sorr no word";
    }
})