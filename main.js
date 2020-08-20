

function formattedPhone(phone) {
	let numberPhone = '';
	let phoneLength = phone.length;
	for (let i = 0; i < phoneLength; i++) {
		numberPhone += phone.charAt(i);
		if (i === 1) {
				numberPhone += ' (';
		}else if (i === 4) {
			numberPhone += ') ';
		}else if(i === 7 || i === 9){
			numberPhone += '-';
		}
	}
	return numberPhone;

}
console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90