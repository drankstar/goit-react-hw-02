import { useState, useEffect } from "react"
import Feedback from "./Components/Feedback/Feedback"
import Options from "./Components/Options/Options"
import Description from "./Components/Description/Description"
import Notification from "./Components/Notification/Notification"
import styles from "./App.module.css"

const initialFeedbackState = { good: 0, neutral: 0, bad: 0 }

const initialFeedback = () => {
  const localStorageFeedback = localStorage.getItem("feedBack")
  return localStorageFeedback !== null
    ? JSON.parse(localStorageFeedback)
    : initialFeedbackState
}

function App() {
  const [feedBack, setfeedBack] = useState(initialFeedback)

  useEffect(() => {
    localStorage.setItem("feedBack", JSON.stringify(feedBack))
  }, [feedBack])

  const updateFeedback = (feedbackType) => {
    setfeedBack((changeStatefeedBack) => ({
      ...changeStatefeedBack,
      [feedbackType]: changeStatefeedBack[feedbackType] + 1,
    }))
  }
  const totalFeedback = feedBack.good + feedBack.neutral + feedBack.bad

  const goodFeedback = Math.round(
    ((feedBack.good + feedBack.neutral) / totalFeedback) * 100
  )

  const resetFeedback = () => {
    setfeedBack(initialFeedbackState)
  }
  return (
    <div className={styles.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
        options={Object.keys(feedBack)}
      />

      {totalFeedback ? (
        <Feedback
          feedBack={feedBack}
          totalFeedback={totalFeedback}
          goodFeedback={goodFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  )
}

export default App
