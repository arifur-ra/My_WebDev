try {
    console.log(x);
} catch (error) { // interpreter through the error
    // console.log(error.stack);
}

//................MAke Self  error..............

sayMyName = name => {
    try {
        if (name != 'Arif') {

            let error = new Error('worng Name');
            error.name = 'Reference Name';
            throw error;
        }
        return name;
    } catch (err) {
        return err;
    }
};

//console.log(sayMyName('Safwan'));

addName = (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;

    try {
        if (name == '') throw new Error('Warning !!!! <br> <br>Empty Name is not Possible to add.');
    } catch (error) {
        // console.log(error);
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 3000);
        return error;
    }

    let nameOfList = JSON.parse(localStorage.getItem('ListName'));

    if (!nameOfList) {
        nameOfList = [name];
    } else {
        try {
            if (nameOfList.indexOf(name) >= 0) {
                throw new Error(' Warning !!!! <br> <br> Same Name is not Possible to add.');
            }

        } catch (error) {
            document.getElementById('message').innerHTML = `${error.message}`;
            document.getElementById('message').style.visibility = 'visible';

            setTimeout(() => {
                document.getElementById('message').style.visibility = 'hidden';
            }, 3000);
            return error;
        }
        nameOfList.push(name);
    }

    localStorage.setItem('ListName', JSON.stringify(nameOfList));


    let addName = document.getElementById('addingName');
    addName.innerHTML = ``;
    nameOfList = JSON.parse(localStorage.getItem("ListName"));

    nameOfList.forEach(element => {
        addName.innerHTML += `<li>${element}</li>`;
    });
    // sayMyName()

};


showItem = () => {
    let addName = document.getElementById('addingName');
    addName.innerHTML = ``;
    nameOfList = JSON.parse(localStorage.getItem("ListName"));

    nameOfList.forEach(element => {
        addName.innerHTML += `<li>${element}</li>`;
    });
}