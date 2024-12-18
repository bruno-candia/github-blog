import { Link } from "react-router-dom";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderActions,
  CardProfileWrapper,
} from "./styles";
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react";

export function PostHeader() {
  return (
    <CardProfileWrapper>
      <CardContent>
        <CardHeader>
          <CardHeaderActions>
            <Link to={"/"}>
              <span>
                <CaretLeft size={12} weight="bold" />
                VOLTAR
              </span>
            </Link>
            <a href="#">
              <span>
                VER NO GITHUB
                <ArrowSquareOut size={12} weight="bold" />
              </span>
            </a>
          </CardHeaderActions>
          <h3>JavaScript data types and data structures</h3>
        </CardHeader>

        <CardFooter>
          <p>
            <GithubLogo size={18} weight="fill" />
            <span>fulanoDeTal</span>
          </p>
          <p>
            <Calendar size={18} weight="fill" />
            <span>Há 1 dia</span>
          </p>
          <p>
            <ChatCircle size={18} weight="fill" />
            <span>5 Comentários</span>
          </p>
        </CardFooter>
      </CardContent>
    </CardProfileWrapper>
  );
}
