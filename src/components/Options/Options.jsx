import s from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  const onBtnClick = (type) => {
    updateFeedback(type);
  };

  return (
    <div>
      <ul className={s.btnList}>
        <li>
          <button
            className={s.btn}
            type="button"
            onClick={() => onBtnClick("good")}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={s.btn}
            type="button"
            onClick={() => onBtnClick("neutral")}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={s.btn}
            type="button"
            onClick={() => onBtnClick("bad")}
          >
            Bad
          </button>
        </li>
      </ul>
      {totalFeedback > 0 && (
        <button className={s.btn} type="button" onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
