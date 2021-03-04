class APIService{
    constructor(){
        this.apiURL="https://pixabay.com/api"
        this.apiKey="20214383-9bc90df61de4ad44b136b77bb"
    }

    onChange=(e,setQuery,setAmount)=>{
    switch (e.target.id) {
        case 'query':
            setQuery(e.target.value)
            break;
        case 'amount':
            setAmount(e.target.value)
            break;
    
        default:
            alert('error saving the change')
            break;
    }

    }

    onSubmit=(query,amount,setImages)=>{
        if(query===''){
            setImages([])
        }
        else{
            const url=`${this.apiURL}/?key=${this.apiKey}&q=${query}&per_page=${amount}`

            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                setImages(data.hits)
            })
            .catch(err=>console.log(err))
        }

    }

    openModal=(img,setImgModal)=>{
        setImgModal(img)
    }
    closeModal=(setImgModal)=>{
      setImgModal(null)
    }
}

const APIServicesInst=new APIService()

 export default APIServicesInst