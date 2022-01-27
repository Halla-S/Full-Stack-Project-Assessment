import React, { useState } from "react";
import Video from "./Video";
const Form =(props)=>{
  let firstVideo = {url:"https://www.youtube.com/embed/qw--VYLpxG4",title:"learn postgres"};
 const [video,setVideo] = useState([firstVideo]);
 const [addData, setAddData] = useState({
   url: "",
   title: ""
 });
 const ChangeHandler = (event) => {
   const inputName = event.target.getAttribute("name");
   const inputValue = event.target.value;
   const addedVideo = { ...addData };
    addedVideo[inputName] = inputValue;
   setAddData(addedVideo);
 };
 const submitHandler = event=>{
  event.preventDefault();
  console.log(addData);
  const newVideo = {
    url: addData.url,
    title: addData.title,
  };
  let videos = [...video, newVideo];
  setVideo(videos);
  setAddData({
    url: "",
    title: ""
  });

 }

 return (
   <div className="form-video">
     <div>
       <form onSubmit={submitHandler}>
         <p>Add Video </p>
         <div className="form-group ml-2">
           <label htmlFor="title">Title</label>
           <input
             type="text"
             id="title"
             name="title"
             onChange={ChangeHandler}
             value={addData.title}
             placeholder="Video Title"
           ></input>
         </div>
         <div className="form-group ml-2">
           <label htmlFor="video-link">URL</label>
           <input
             type="url"
             id="video-link"
             name="url"
             onChange={ChangeHandler}
             value={addData.url}
             placeholder="YouTube embed URL"
           ></input>
         </div>
         <button className="btn btn-primary ml-2">Add</button>
       </form>
     </div>
     <div className="video-container">
       {video.map((element, index) => {
         return <Video key={index} URL={element.url} Title={element.title} />;
       })}
     </div>
   </div>
 );
}
export default Form;