import "./ExpensesTitle.css";
function ExpensesTitle(props) {
  return (
    <div className="expensesTitle">
      <h1>{props.expensesTitle}</h1>
    </div>
  );
}

export default ExpensesTitle;
