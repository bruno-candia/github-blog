import { useSearchIssue } from "../../hooks/useSearchIssue";
import { IssueCard } from "./components/IssueCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { IssueCardsList, SearchFormHeader, SearchFormWrapper } from "./styles";

export function Blog() {
  const { control, searchResult } = useSearchIssue();

  return (
    <>
      <Profile />
      <SearchFormWrapper>
        <SearchFormHeader>
          <h4>Publicações</h4>
          <p>
            {searchResult?.total_count ? searchResult.total_count : 0}{" "}
            Publicações
          </p>
        </SearchFormHeader>
        <SearchForm control={control} />
      </SearchFormWrapper>
      <IssueCardsList>
        {searchResult?.items.map((item) => (
          <IssueCard key={item.id} searchResult={item} />
        ))}
      </IssueCardsList>
    </>
  );
}
