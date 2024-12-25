import { PostHeader } from "./components/PostHeader";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/sunburst.css"; // Importar o tema de destaque desejado
import { PostContent } from "./styles";
import { useIssueInfo } from "../../hooks/useIssueInfo";

export function Post() {
  const { issue } = useIssueInfo();

  return (
    <>
      <PostHeader issue={issue} />
      <PostContent>
        <Markdown rehypePlugins={[rehypeHighlight]}>{issue?.body}</Markdown>
      </PostContent>
    </>
  );
}
