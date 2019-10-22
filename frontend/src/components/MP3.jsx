// Import react
import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
// calls and imports the button from boostrap

class MP3 extends React.Component{
    constructor(){
        super()
        this.state ={
            data: [],
            musicInput: ''
        }
    }
    //stores the music in this component  

    newSearch(){
        fetch('/music')
            .then(res => res.json())
            .then(data => this.setState({data}, () => console.log('info fetched...', data)))
    }
// This has its own search bar so you can search whatever you want an it will display cause it fetches/gets it from the api 

    musicSearch = async () => {
        let search = this.state.musicInput.split(' ').join('+')
        const getMusic = await fetch(`/music?search=${search}&type=${this.state.type}`)
        let res = await getMusic.json()
        this.setState({
            data: res
        })
    }
    // After it has been searched the music will be displayed an therefore will always show

    favoriteMusic= (i) => {
        let favPic = {
            id: i.trackId,
            artist: i.artistName,
            artwork: i.artworkUrl100,
            track: i.trackName,
            sample: i.previewUrl
        }
// This fucntion has a storing method and adds all your clickable favourites to a seperate page

        fetch('/favoritesMusic', {
            method: 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(favPic)
        })
        alert('The song has been Added')
        console.log(favPic)
        // This alert popups when the fav button is clicked
    }
    // this post the music in favourites 
    render(){
        return (
            <div class="head">
                <h1>MP3 Music</h1>
                <input type="text" onChange={(e) => this.setState({musicInput: e.target.value})}/>
            {/*can input the music */}
                <Button variant="danger" onClick={() => this.musicSearch()}>Search</Button>
            {/*once search is clicked then it will display all the music*/}
                <fieldset>
                    {this.state.data.map(sort_data => <article key={sort_data.trackId}><b>{sort_data.artistName}</b><br/>
                    <b>{sort_data.trackName}</b><br/><br/><Image src={sort_data.artworkUrl100} alt={sort_data.trackId} thumbnail="true"/>
                    {console.log(sort_data)}<br/><br/><audio controls><source src={sort_data.previewUrl}type='audio/mpeg'></source></audio>
                {/*plays the track a short version of the song and displays the image*/}
                    <Button variant="danger" onClick={() =>this.favoriteMusic(sort_data)}>Favorite</Button>
                {/*Gives you the option to add to favourite*/}
                    </article>)}
                </fieldset>
            </div>
        )
    }
}

export default MP3;