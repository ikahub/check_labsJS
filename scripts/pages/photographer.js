//Mettre le code JavaScript lié à la page photographer.html
class PhotographerApp {
    constructor(){
        this.$personnalDetails = document.querySelector('.photographer_detail')
        //console.log(this.$personnalDetails)
        //this.$personnalGaleries = document.querySelector('#personnal_galerie')
        const params = new URLSearchParams(window.location.search)
        this.id = params.get("id")
        console.log(this.id)
        this.usersApi = new userApi('data/photographers.json')
    }
    async main(){
        ////////Récupération du photographe via son ID/////////
        this.photographer = await this.usersApi.getPhotographer(this.id);
        this.photographerId = parseInt(this.id)
        ////////Tentative de display de la div et de son contenu///////
        this.$personnalDetails.innerHTML = "";
        console.log(this.photographerId)
        const photoDetails = new mediaFactory(this.photographerId)
        //console.log(this.id)
        console.log(photoDetails)
        this.$personnalDetails.appendChild(photoDetails.getPhotoDetailsCardDOM(this.photographerId))
        console.log(this.$personnalDetails)
    }
}

        

const photographerApp = new PhotographerApp()
photographerApp.main()

/*displayPhotographersPages(){
    this.$personnalDetails.innerHTML = "";
    this.filteredDetails = this.photographersDetails;
    console.log(this.filteredDetails)



    const photoDetails = new mediaFactory(this.id)
    this.$personnalDetails.appendChild(photoDetails.getPhotographerDetailsCardDOM())
    console.log(this.id)

    displayRigthPhotographer(){
        this.$personnalDetails.innerHTML = "";
        this.photographer.for(user => {
            const photographerS = new mediaFactory(user)
            this.$personnalDetails.appendChild(photographerS.getPhotographerDetailsCardDOM())        
        })
    }
}*/