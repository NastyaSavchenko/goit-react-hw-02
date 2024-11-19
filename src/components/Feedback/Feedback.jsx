const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <ul>
      <li>{`Good: ${feedback.good}`}</li>
      <li>{`Neutral: ${feedback.neutral}`}</li>
      <li>{`Bad: ${feedback.bad}`}</li>
      <li>{`Total: ${totalFeedback}`}</li>
      <li>{`Positive Feedback: ${positivePercentage}%`}</li>
    </ul>
  );
};

export default Feedback;
