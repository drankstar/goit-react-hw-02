import styles from "./Feedback.module.css"
const Feedback = ({ feedBack, totalFeedback, goodFeedback }) => {
  return (
    <ul className={styles.feedBackStyles}>
      <li>
        Good: <b>{feedBack.good}</b>
      </li>
      <li>
        Neutral: <b>{feedBack.neutral}</b>
      </li>
      <li>
        Bad: <b>{feedBack.bad}</b>
      </li>
      <li>
        Total: <b>{totalFeedback}</b>
      </li>
      <li>
        Positive: <b>{goodFeedback}&#37;</b>
      </li>
    </ul>
  )
}

export default Feedback
