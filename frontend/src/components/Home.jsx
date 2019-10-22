import React from 'react';
import '../App.css';
import Image from 'react-bootstrap/Image';
// importing to make changes and installing 
class Home extends React.Component {
    render(){
        return(
            <div className="head">
                <h1>Welcome</h1>
                <h2>MP3-Tunes...</h2>
					      <Image src="https://gameapks.com/wp-content/uploads/1080091_featured.png" roundedCircle />
					  {/*This calls the image and making it display */}

            </div>
        )
    }
}

export default Home;