import { Tooltip } from "../../../../components/Tooltip";
import { IGithubUserIssues } from "../../../../services/github/getUserIssues/model/getUserIssueResponse";
import { IssueCardContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface IssueCardProps {
  searchResult: IGithubUserIssues;
}

export function IssueCard({ searchResult }: IssueCardProps) {
  return (
    <IssueCardContainer to={`/post/${searchResult?.id}`}>
      <div>
        <Tooltip label={searchResult?.title}>
          <h5>{searchResult?.title}</h5>
        </Tooltip>
        <span>
          {formatDistanceToNow(new Date(searchResult?.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>

      <p>{searchResult?.body}</p>
    </IssueCardContainer>
  );
}
