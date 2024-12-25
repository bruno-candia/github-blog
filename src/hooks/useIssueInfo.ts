import { useEffect, useState } from "react";
import { getIssueInfoService } from "../services/github/getIssueInfo";
import { useParams } from "react-router-dom";
import { IGetIssueInfoResponse } from "../services/github/getIssueInfo/model/getUserIssueResponse";

interface IUseProfile {
  issue: IGetIssueInfoResponse | undefined;
}

export function useIssueInfo(): IUseProfile {
  const [issue, setIssue] = useState<IGetIssueInfoResponse>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getIssueInfoService({
      userName: "tailwindlabs",
      repository: "tailwindcss",
      issueNumber: id ? parseInt(id) : 0,
    }).then((response) => {
      setIssue(response);
    });
  }, [id]);

  return { issue };
}
