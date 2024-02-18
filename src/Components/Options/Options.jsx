import styles from "./Options.module.css"
const Options = ({ updateFeedback, resetFeedback, totalFeedback, options }) => {
  return (
    <div>
      <div className={styles.btncontainer}>
        {options.map((option) => (
          <button
            className={styles.btn}
            key={option}
            onClick={() => updateFeedback(option)}
            aria-label={option}
          >
            {option}
          </button>
        ))}
      </div>
      {totalFeedback !== 0 && (
        <button className={styles.resetBtn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  )
}

export default Options
