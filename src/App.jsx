import { useState, useEffect } from "react"
import Feedback from "./Components/Feedback/Feedback"
import Options from "./Components/Options/Options"
import Description from "./Components/Description/Description"
import Notification from "./Components/Notification/Notification"

const stateType = { good: 0, neutral: 0, bad: 0 }

const initialFeedback = () => {
  const localStorageFeedback = localStorage.getItem("feedBack")
  return localStorageFeedback !== null
    ? JSON.parse(localStorageFeedback)
    : stateType
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

  const goodFeedback =
    Math.round(((feedBack.good + feedBack.neutral) / totalFeedback) * 100) + "%"

  const resetFeedback = () => {
    setfeedBack(stateType)
  }
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
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
    </>
  )
}

export default App
