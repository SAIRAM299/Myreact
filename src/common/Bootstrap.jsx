import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Bootstrap() {

    const [title, settitle] = useState([
        {
            Title: "sai",
            Img: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
        },
        {
            Title: "suresh",
            Img: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
        },
        {
            Title: "saran",
            Img: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
        },
        {
            Title: "arun",
            Img: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
        }
        

    ])

    return (

        <div className='row'>
{title.map((dd,i)=>(
    <div className='col-3' key={i}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dd.Img} />
                <Card.Body>
                    <Card.Title>{dd.Title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

</div>
))}
        </div>

    );
}


