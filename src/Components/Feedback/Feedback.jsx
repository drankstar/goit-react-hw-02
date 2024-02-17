import React from "react"

const feedBack = ({ feedBack, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      <li>Good:{feedBack.good}</li>
      <li>Neutral:{feedBack.neutral}</li>
      <li>Bad:{feedBack.bad}</li>
      <li>Total:{totalFeedback}</li>
      <li>Positive:{positiveFeedback}</li>
    </ul>
  )
}

export default feedBack
