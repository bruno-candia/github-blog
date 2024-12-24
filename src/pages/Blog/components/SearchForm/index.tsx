import { Control, Controller } from "react-hook-form";
import { SearchFormContainer } from "./styles";
interface SearchFormProps {
  control: Control<{
    search: string;
  }>;
}

export function SearchForm({ control }: SearchFormProps) {
  return (
    <SearchFormContainer>
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <input {...field} placeholder="Buscar conteúdo" />
        )}
      />
    </SearchFormContainer>
  );
}
