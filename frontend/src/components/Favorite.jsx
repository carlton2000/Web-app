import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import '../App.css';
import parse from 'html-react-parser';
// calls and imports the button from boostrap

class Favorite extends React.Component {
    constructor(){
        super()
        this.state = {
            favMusic: [],
            favBooks: []
        }
    }
    // This stores the info in theses json files so it will always display

    componentDidMount(){
        fetch('/favoritesMusic')
            .then(res => res.json())
            .then(music => this.setState({favMusic: music}, () => console.log('fetched...', music)))

            fetch('/favoritesBooks')
            .then(res => res.json())
            .then(books => this.setState({favBooks: books}, () => console.log('fetched...', books)))
    }
    // this creates a component where its values an info that are fetched from the api and displays in each catorgery

    deleteMusic = (i) => {
        let musicToDelete = {
            deleted: i.id
        }
        fetch('/favoritesMusic', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(musicToDelete)
        })
        document.location.reload()
    }
    // this function finds wherever theres a song that wants to be deleted an will then delete that specific 

    deleteBooks = (i) => {
        let booksToDelete = {
            deleted: i.id
        }
        fetch('/favoritesBooks', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booksToDelete)
        })
        document.location.reload()
    }
    // this function finds wherever theres a book that wants to be deleted an will then delete that specific 

    render(){
        return(
            <div className="head">
            <h1>My Favorites</h1>
                <fieldset>
                <h5 class="cat">Music-Catalogue</h5>
                    {this.state.favMusic.map(favM => <article key={favM.trackId}><p><b>{favM.artist}</b></p><p>{favM.trackId}
                        {favM.track}</p>
                        <Image src={favM.artwork} alt='artwork' thumbnail="true" /><br/><br/>
                    {/*Displays the image of the song*/}
                        <audio controls><source src={favM.sample}/></audio>
                    {/*shows the audio of the specific song which is clickable an can be played*/}
                        
                        <Button class="But" variant="danger" onClick={() => {this.deleteMusic(favM)}}>Remove</Button>
                    {/*this button is clickable an has function of removing anything in the favourites page*/}

                    </article>)}
                </fieldset>
                <fieldset>
                <h5 class="cat">Reading-Catalogue</h5>
                    {this.state.favBooks.map(favB => <article key={favB.artwork}><p><b>{favB.artist}</b></p>
                        <p><b>{favB.track}</b></p>
                        <Image src={favB.artwork} alt='artwork' thumbnail="true" /><br/><br/>
                    {/*Displays the image of the book*/}
                        {parse(`<p><i>${favB.description}</i></p>`)}
                    {/*Displays a short description of the book*/}
                        
                        <Button variant="danger" onClick={() => {this.deleteBooks(favB)}}>Remove</Button>
                        {/*this button is clickable an has function of removing anything in the favourites page*/}


                    </article>)}
                </fieldset>
            </div>
        )
    }
}

export default Favorite