import { Link } from "react-router-dom";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderActions,
  CardPostWrapper,
} from "./styles";
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react";
import { IGetIssueInfoResponse } from "../../../../services/github/getIssueInfo/model/getUserIssueResponse";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface PostHeaderProps {
  issue: IGetIssueInfoResponse | undefined;
}

export function PostHeader({ issue }: PostHeaderProps) {
  return (
    <CardPostWrapper>
      <CardContent>
        <CardHeader>
          <CardHeaderActions>
            <Link to={"/"}>
              <span>
                <CaretLeft size={12} weight="bold" />
                VOLTAR
              </span>
            </Link>
            <a href={issue?.html_url} target="_blank" rel="noreferrer">
              <span>
                VER NO GITHUB
                <ArrowSquareOut size={12} weight="bold" />
              </span>
            </a>
          </CardHeaderActions>
          <h3>{issue?.title}</h3>
        </CardHeader>

        <CardFooter>
          <p>
            <GithubLogo size={18} weight="fill" />
            <span>{issue?.user.login}</span>
          </p>
          <p>
            <Calendar size={18} weight="fill" />
            <span>
              {" "}
              {issue?.created_at &&
                formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
            </span>
          </p>
          <p>
            <ChatCircle size={18} weight="fill" />
            <span>{issue?.comments} Comentários</span>
          </p>
        </CardFooter>
      </CardContent>
    </CardPostWrapper>
  );
}
