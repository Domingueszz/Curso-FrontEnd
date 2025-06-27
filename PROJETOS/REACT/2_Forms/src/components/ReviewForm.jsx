import React from 'react'
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const ReviewForm = () => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio"
           value="unsatisfied" 
           name='review'
           required
           />
           <BsFillEmojiFrownFill />
           <p>Insastisfeito</p>
        </label>
      </div>

      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio"
           value="neutral" 
           name='review'
           required
           />
           <BsFillEmojiNeutralFill />
           <p>Poderia ser melhor</p>
        </label>
      </div>

      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio"
           value="satisfied" 
           name='review'
           required
           />
           <BsFillEmojiSmileFill />
           <p>Sastisfeito</p>
        </label>
      </div>

      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio"
           value="very_satisfied" 
           name='review'
           required
           />
           <BsFillEmojiHeartEyesFill />
           <p>Muito sastisfeito</p>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor=""></label>
      </div>
      
    </div>
  )
}

export default ReviewForm
