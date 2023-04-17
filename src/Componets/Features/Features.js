import React from 'react'
import "./Features.css"


const Features = ({ Data }) => {
    // console.log(Data);

    return (
        <>
            <div className="footer-Container">
            <div className="heading">
            <h1>Our Features</h1>

        </div>
                <div className="footer-Body">
                   
                   
                   
                    {
                        Data.map((item) => {
                            console.log(item);

                            return <div className="serviecs">
                                <div className='item-1'>
                                    <li>{item.image}</li>
                                    <div className="more">
                                    <h1>{item.name}</h1>
                                    <p className='para1'>Lcfacere nam aut et nulla temporibus velit molestias architecto impedit. Sunt minima harum quidem.</p>
                                    <p className='para2'>Red More</p>
                                    </div>
                                   
                                
                                </div>

                            </div>

                        })
                    }


                </div>
            </div>

        </>
    )
}

export default Features