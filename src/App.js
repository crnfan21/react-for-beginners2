//import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

/* function Hello() {
  useEffect(function () {
    console.log("hi :)");
    return function () {
      //return은 component가 없어질 때 실행(유사하게 따로 함수를 만들어서 return 값으로 써줄 때, 함수명만 써주면 없어질 때 실행하고 함수명()로 써주면 component 생성 시 동시 실행)
      console.log("bye :(");
    };
  }, []); */
/* useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []); */
/*   return <h1>Hello</h1>;
} */

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );

  //coin 시세
  /* const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [coin, setCoin] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setCoin(json[0].quotes.USD.price);
      });
  }, []);
  const onChange = (event) => {
    setMoney(event.target.value);
  };
  const onChange2 = (event) => {
    setCoin(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChange2}>
            {coins.map((coin, index) => (
              <option value={coin.quotes.USD.price} key={index}>
                {index}. {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}{" "}
                USD
              </option>
            ))}
          </select>
          <div>
            <input type="number" value={money} onChange={onChange} /> :{" "}
            {(money / coin).toFixed(6)}
          </div>
        </div>
      )}
    </div>
  );
 */

  //to do list 만들기
  /* 
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
 */

  //useEffect Cleanup 기능
  /* const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  ); */

  //useEffect
  /* const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  ); */
}

export default App;
