import { CoverImage, HeaderWrapper, LogoImage } from "./styles";
import coverImage from "../../assets/cover.svg";
import logoImage from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderWrapper>
      <CoverImage src={coverImage} />
      <LogoImage src={logoImage} />
    </HeaderWrapper>
  );
}
