import {
  CardContent,
  CardFooter,
  CardHeader,
  CardProfileWrapper,
  SkeletonText,
} from "./styles";
import {
  ArrowSquareOut,
  Building,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import { useProfile } from "../../../../hooks/useProfile";

export function Profile() {
  const { profile } = useProfile();

  if (!profile) {
    return <Skeleton />;
  }

  return (
    <CardProfileWrapper>
      <img src={profile?.avatar_url} alt="" />

      <CardContent>
        <CardHeader>
          <h3>{profile?.name}</h3>
          <a href={`https://github.com/${profile?.login}`}>
            <span>
              GITHUB
              <ArrowSquareOut size={12} weight="bold" />
            </span>
          </a>
        </CardHeader>

        <p>{profile?.bio}</p>

        <CardFooter>
          <p>
            <GithubLogo size={18} weight="fill" />
            <span>{profile?.login}</span>
          </p>
          <p>
            <Building size={18} weight="fill" />
            <span>{profile?.company}</span>
          </p>
          <p>
            <Users size={18} weight="fill" />
            <span>{profile?.followers} seguidores</span>
          </p>
        </CardFooter>
      </CardContent>
    </CardProfileWrapper>
  );
}

function Skeleton() {
  return (
    <CardProfileWrapper>
      <SkeletonText width="148px" height="148px" />

      <CardContent>
        <CardHeader>
          <SkeletonText width="200px" height="1.92rem" />
        </CardHeader>

        <SkeletonText
          width="400px"
          height="3.2rem"
          style={{ marginTop: "1rem" }}
        />

        <CardFooter>
          <p>
            <GithubLogo size={18} weight="fill" />
            <SkeletonText width="100px" height="1.6rem" />
          </p>
          <p>
            <Building size={18} weight="fill" />
            <SkeletonText width="100px" height="1.6rem" />
          </p>
          <p>
            <Users size={18} weight="fill" />
            <SkeletonText width="100px" height="1.6rem" />
          </p>
        </CardFooter>
      </CardContent>
    </CardProfileWrapper>
  );
}
