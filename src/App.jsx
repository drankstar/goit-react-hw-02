import { useState, useEffect } from "react"
import Feedback from "./Components/Feedback/Feedback"
import Options from "./Components/Options/Options"
import Description from "./Components/Description/Description"
import Notification from "./Components/Notification/Notification"

const State = { good: 0, neutral: 0, bad: 0 }

const InitialFeedback = () => {
  const localStorageFeedback = localStorage.getItem("feedBack")
  return localStorageFeedback !== null
    ? JSON.parse(localStorageFeedback)
    : State
}

function App() {
  const [feedBack, setfeedBack] = useState(InitialFeedback)

  useEffect(() => {
    localStorage.setItem("feedBack", JSON.stringify(feedBack))
  }, [feedBack])

  const updateFeedback = (feedbackType) => {
    setfeedBack((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }))
  }
  const totalFeedback = feedBack.good + feedBack.neutral + feedBack.bad
  console.log(totalFeedback)

  const positiveFeedback =
    Math.round(((feedBack.good + feedBack.neutral) / totalFeedback) * 100) + "%"

  const resetFeedback = () => {
    setfeedBack(State)
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
          feedback={feedBack}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  )
}

export default App
