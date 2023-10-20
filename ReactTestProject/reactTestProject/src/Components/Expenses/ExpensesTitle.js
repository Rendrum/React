import "./ExpensesTitle.css";
import Card from "../UI/Card";
function ExpensesTitle(props) {
  return (
    <Card className="expensesTitle">
      <h1>{props.expensesTitle}</h1>
    </Card>
  );
}

export default ExpensesTitle;
