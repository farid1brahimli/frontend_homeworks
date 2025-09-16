let gender = prompt('What is your gender? M:Male or F:Female.');
IF-ELSE
if (gender === 'M') {
    alert('You are male.');
} else if (gender === 'F') {
    alert('You are female.');
} else {
    alert('There is no such option!');
}
SWITCH-CASE
switch (gender) {
    case 'M':
        alert('You are male.');
        break;
    case 'F':
        alert('You are female.');
        break;
    default:
        alert('There is no such option!');
}
TERNARY
gender === 'M' ? alert('You are female.') : ( gender === "F" ? alert('You are female.') : alert('There is no such option!') );
TERNARY PRO 
alert(gender === "M" ? 'You are male.' : (gender === "F" ? 'You are female.' : 'There is no such option!'));