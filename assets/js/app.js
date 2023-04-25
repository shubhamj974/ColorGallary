let cl = console.log;
const bgColor = document.getElementById('bgColor');
const allDiv = document.querySelectorAll('.all');
 

const OnChange = (e) => {
    let value = e.target.value;
    allDiv.forEach(ele => ele.classList.add('d-none'));
    const select = [... document.querySelectorAll('.' + value)];
    select.forEach(ele => ele.classList.remove('d-none'))
}
bgColor.addEventListener('change' , OnChange);
