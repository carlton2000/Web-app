import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import parse from 'html-react-parser';
// calls and imports the button from boostrap
// imports the styling 

class Reading extends React.Component{
    constructor(){
        super()
        this.state ={
            data: [],
            bookInput: ''
        }
    }
    //stores the music in this component 

    newSearch(){
        fetch('/books')
            .then(res => res.json())
            .then(data => this.setState({data}, () => console.log('info fetched...', data)))
    }
    // This has its own search bar so you can search whatever you want an it will display cause it fetches/gets it from the api 

    bookSearch = async () => {
        let search = this.state.bookInput.split(' ').join('+')
        const getBook = await fetch(`/book?search=${search}&type=${this.state.type}`)
        let res = await getBook.json()
        this.setState({
            data: res
        })
        console.log(res);
    }
    // After it has been searched the books will be displayed an therefore will always show

    favoriteBook= (i) => {
        let favPic = {
            id: i.trackId,
            artist: i.artistName,
            artwork: i.artworkUrl100,
            track: i.trackName,
            description: i.description
        }
        // This fucntion has a storing method and adds all your clickable favourites to a seperate page

        fetch('/favoritesBooks', {
            method: 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(favPic)
        })
        alert('The book has been Added')
        console.log(favPic);
        // This alert popups when the fav button is clicked
    }
    // This adds the books you selected to favourite
    render(){
        return (
            <div className="head">
                <h1>MP3-Reader</h1>
                <input type="text" onChange={(e) => this.setState({bookInput: e.target.value})}/>
            {/*you can input your info so whatever your want to search you can input*/}
                <Button variant="danger" onClick={() => this.bookSearch()}>Search</Button>
                {/*once search is clicked then it will display all the music*/}

                <fieldset>
                    {this.state.data.map(sort_data => <article key={sort_data.trackId}><b><h2>{sort_data.artistName}</h2></b><br/>
                    <b>{sort_data.trackName}</b><br/>
                {/*gives the name of the book*/}
                    {parse(`<p>${sort_data.description}</p>`)}<br/>
                {/*a small description of the book in a paragraph format*/}
                    <Image src={sort_data.artworkUrl100} alt='bookPic' thumbnail="true" /><br/>
                    <Button variant="danger" onClick={() => {this.favoriteBook(sort_data)}}>Favorite</Button><br/><br/>
                    {/*Gives you the option to add to favourite*/}
                    </article>)}
                </fieldset>
            </div>
        )
    }
}

export default Reading;