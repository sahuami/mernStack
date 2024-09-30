import { useState } from "react";

export default function LikeButton() {

   let [isliked, setIsLiked] = useState(false);
   let toggleLike = () => {
      setIsLiked(!isliked);
   };

   let likeStyle = { color: "rgb(170, 51, 106) " }
   return (

      <div>
         <p onClick={toggleLike}>
            {isliked ? (<i className="fa-solid fa-heart" style={likeStyle}></i>
            ) : (<i className="fa-regular fa-heart"></i>)}

         </p>
      </div>
   );
}