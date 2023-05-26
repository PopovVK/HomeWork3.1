const numberHours = prompt('Яку кількість годин бажаєте перевести?')

const x = 60 * 60
const y=+numberHours*x
switch (+numberHours) {
    case +numberHours:
        alert('У ' + +numberHours + ' годинах ' + y + ' секунд');
        break;
    default:
        alert('Error!');
}


