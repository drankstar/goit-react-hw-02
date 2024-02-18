const feedBack = ({ feedBack, totalFeedback, goodFeedback }) => {
  return (
    <ul>
      <li>Good:{feedBack.good}</li>
      <li>Neutral:{feedBack.neutral}</li>
      <li>Bad:{feedBack.bad}</li>
      <li>Total:{totalFeedback}</li>
      <li>Positive:{goodFeedback}</li>
    </ul>
  )
}

export default feedBack
