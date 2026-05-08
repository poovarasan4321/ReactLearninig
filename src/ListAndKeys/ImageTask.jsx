import React from 'react'

const ImageTask = () => {
    let pathStore = [

        "../../public/flower.png",
        "../../public/monkey.png",
        "../../public/shock.png",
    ]

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Image task</h1>
            {pathStore.map((Image, index) => {

                return <div>
                    <img key={index} height={"100px"} width={"200px"} src={Image} style={{ margin: "20px" }} alt="" />

                </div>


            })}

        </div>
    )
}

export default ImageTask
