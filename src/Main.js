import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./Card.css";
import footer from './Footer.PNG'

const Main = () => {
    const [videoItem, setvideoItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const proxyurl = "https://corsanywhere.herokuapp.com/";
    const videoData = async() => {
        try{
            const response = await axios.get(proxyurl + 'globalcyclingnetwork.com/api/devtask');
            setvideoItem(response.data);
            setLoading(true);
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        videoData();
      }, []);


    return (
        <>
            <main>
                <iframe className = "frame" src="https://www.youtube.com/embed/Mr3CTOdmny4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="mobile">
                    {loading && videoItem.map((item) => (
                        <div className="card">
                            <a style={{cursor:'pointer'}}>
                                <img src= {`https://img.youtube.com/vi/${item._id}/mqdefault.jpg`} style={{ width: "100%" }} />
                                <h3 style={{paddingTop:15, paddingLeft:20 }}>{(new Date(item.publishDate)).toLocaleDateString()}</h3>
                                <p className="title">{item.title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </main>
            <div>
                <img style={{width: "100%"}} src={footer} alt="Footer" />
            </div>
        </>
    )

};

export default Main
