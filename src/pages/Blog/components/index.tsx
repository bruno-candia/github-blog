import { IssueCard } from "./components/IssueCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { IssueCardsList, SearchFormHeader, SearchFormWrapper } from "./styles";

export function Blog() {
  const mockDataArray = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Profile />
      <SearchFormWrapper>
        <SearchFormHeader>
          <h4>Publicações</h4>
          <p>6 Publicações</p>
        </SearchFormHeader>
        <SearchForm />
      </SearchFormWrapper>
      <IssueCardsList>
        {mockDataArray.map((item) => (
          <IssueCard key={item} />
        ))}
      </IssueCardsList>
    </>
  );
}
