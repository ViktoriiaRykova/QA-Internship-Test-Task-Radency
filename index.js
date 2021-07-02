const changeWords = (str) => {
    let substringArray = str.split(" "); 
    let finalString = '';

	for (var i = 0; i < substringArray.length; i++){
        let elem = substringArray[i];
        
        if (elem.length > 4) {
            elem = elem.split('').reverse().join('');
           
        } 

        finalString += `${elem} `;
    };
    console.log(finalString.trimEnd());
	return '';
};

changeWords( "Hey fellow interns" ); //=> returns Hey wollef snretni
changeWords( "This is a test"); //This is a test
changeWords( "This is another test" ); //This is rehtona test
