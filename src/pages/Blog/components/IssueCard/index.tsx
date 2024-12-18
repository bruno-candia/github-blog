import { IssueCardContainer } from "./styles";

export function IssueCard() {
  return (
    <IssueCardContainer to="/post">
      <div>
        <h5>JavaScript data types and data structures</h5>
        <span>Há 1 dia</span>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, erat ut commodo tincidunt, nisl justo varius nunc, eget
        tempor
      </p>
    </IssueCardContainer>
  );
}
