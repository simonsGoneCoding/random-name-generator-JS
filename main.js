const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ["Nadia", "Kira", "Jenefer", "Triss", "Marry", "Negrita", "Esperanza"];

const prefixes = ["I think that", "I've got a feeling that", "To be honest I think that,", "I'm 100% sure that"];

const nameGenerator = () => {
    const randomNameIndex = Math.floor(Math.random() * names.length);
    const randomPrefixIndex = Math.floor(Math.random() * prefixes.length);
    div.textContent = `${prefixes[randomPrefixIndex]}, best name would be ${names[randomNameIndex]}`
}




btn.addEventListener('click', nameGenerator)