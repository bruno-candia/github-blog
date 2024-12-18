import {
  CardContent,
  CardFooter,
  CardHeader,
  CardProfileWrapper,
} from "./styles";
import profilePhoto from "../../../../assets/profile.png";
import {
  ArrowSquareOut,
  Building,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";

export function Profile() {
  return (
    <CardProfileWrapper>
      <img src={profilePhoto} alt="" />

      <CardContent>
        <CardHeader>
          <h3>User name</h3>
          <a href="#">
            <span>
              GITHUB
              <ArrowSquareOut size={12} weight="bold" />
            </span>
          </a>
        </CardHeader>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <CardFooter>
          <a href="#Github">
            <GithubLogo size={18} weight="fill" />
            <span>bruncandia</span>
          </a>
          <a href="#Job">
            <Building size={18} weight="fill" />
            <span>Rocketseat</span>
          </a>
          <a href="#Followers">
            <Users size={18} weight="fill" />
            <span>1.5k seguidores</span>
          </a>
        </CardFooter>
      </CardContent>
    </CardProfileWrapper>
  );
}
