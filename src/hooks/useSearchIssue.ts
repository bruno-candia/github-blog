import { useForm } from "react-hook-form";
import { getUserIssuesService } from "../services/github/getUserIssues";
import { useEffect, useRef, useState } from "react";
import { IGetUserIssuesResponse } from "../services/github/getUserIssues/model/getUserIssueResponse";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormValidationSchema = zod.object({
  search: zod.string().nonempty(),
});

type SearchFormFormData = zod.infer<typeof searchFormValidationSchema>;

export function useSearchIssue() {
  const { control, watch } = useForm<SearchFormFormData>({
    resolver: zodResolver(searchFormValidationSchema),
    defaultValues: {
      search: "",
    },
  });

  const [searchResult, setSearchResult] =
    useState<IGetUserIssuesResponse | null>(null);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const abortController = useRef<AbortController | null>(null);

  const watchedText = watch("search", "");

  useEffect(() => {
    if (typingTimeout.current) clearTimeout(typingTimeout.current);

    if (abortController.current) abortController.current.abort();

    typingTimeout.current = setTimeout(() => {
      abortController.current = new AbortController();
      getUserIssuesService({
        userName: "tailwindlabs",
        text: watchedText,
        repository: "tailwindcss",
        signal: abortController.current.signal,
      }).then((response) => {
        setSearchResult(response);
        console.log(response);
      });
    }, 500);

    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [watchedText]);

  return { control, searchResult };
}
