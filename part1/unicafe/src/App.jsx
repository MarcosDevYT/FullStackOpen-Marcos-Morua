import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{text === "positive" ? value + " %" : value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, all }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <h3>No feedback given</h3>
      </>
    );
  }

  const promedio = () => (good - bad) / all;
  const porcentajePositivo = () => (good / all) * 100;

  const average = promedio();
  const positive = porcentajePositivo();

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={all} />
          <StatisticLine text={"average"} value={average} />
          <StatisticLine text={"positive"} value={positive} />
        </tbody>
      </table>
    </>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>

      <div>
        <Button onClick={handleGood} text="Good" />
        <Button onClick={handleNeutral} text="Neutral" />
        <Button onClick={handleBad} text="Bad" />
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} all={total} />
    </div>
  );
};

export default App;
