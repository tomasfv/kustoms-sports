import React, {useState} from "react"
import axios from "axios"



const Cloudinary = () => {
  
  const  [imageSelected , setImageSelected] = useState("")
  const  [image , setImage] = useState("")

  const uploadImage = async e => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "Kustoms-Sports")

    const res = await axios.post("https://api.cloudinary.com/v1_1/kustoms/image/upload", formData)
    const file = await res.data
    setImage(file.secure_url)
  }
    return (
    <div className="App">
      <input
      type="file"
      onChange={(e) => {setImageSelected(e.target.files[0])}}
      />
      <button onClick={uploadImage}>Upload Image</button>
      <a href={image}>
        <img src={image} width="300px" height="300px" />
      </a> 
    </div>
  );
}

export default Cloudinary;