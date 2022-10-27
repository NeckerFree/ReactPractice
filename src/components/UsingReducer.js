import React, { useReducer } from 'react';

const randomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
const randomText = () => {
  const len = 50;
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = '';
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}
const redu = (state, action) => {
  switch (action.type) {
    case "INCREMENT": return { counter: state.counter + 1, textColor: state.textColor, bkColor: state.bkColor, generatedText: state.generatedText }
    case "CHANGE_COLOR": return { counter: state.counter, textColor: randomColor(), bkColor: state.bkColor, generatedText: state.generatedText }
    case "CHANGE_BK_COLOR": return { counter: state.counter, textColor: state.textColor, bkColor: randomColor(), generatedText: state.generatedText }
    case "CHANGE_TEXT": return { counter: state.counter, textColor: state.textColor, bkColor: state.bkColor, generatedText: randomText() }
    case "CHANGE_ALL": return { counter: state.counter + 1, textColor: randomColor(), bkColor: randomColor(), generatedText: randomText() }
    default: return state
  }
}
const UsingReducer = () => {
  const [reduceTextColor, dispatch] = useReducer(redu, { counter: 0, textColor: randomColor(), bkColor: randomColor(), generatedText: randomText() })
  return (
    <div className="board">
      <label style={{ backgroundColor: reduceTextColor.bkColor, color: reduceTextColor.textColor }} >{reduceTextColor.generatedText}</label>
      <label>{reduceTextColor.counter}</label>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment Count</button>
        <button onClick={() => dispatch({ type: "CHANGE_COLOR" })}>Change Text Color</button>
        <button onClick={() => dispatch({ type: "CHANGE_BK_COLOR" })}>Change Background Color</button>
        <button onClick={() => dispatch({ type: "CHANGE_TEXT" })}>Change Text</button>
        <button onClick={() => dispatch({ type: "CHANGE_ALL" })}>Change All</button>
      </div>
    </div>
  )
}

export default UsingReducer;
