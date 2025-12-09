import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  isProject?: boolean;
  production?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  isProject,
  production,
}: Props) {
  const styles = `
  .glow {
    transition: box-shadow 0.3s ease-in-out;
  }

  .glow:hover {
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.15); /* Adjust the glow effect */
  }
`;

  return (
    <>
      {isProject && <style>{styles}</style>}
      <Card className="glow flex flex-col overflow-hidden border border-muted p-3">
        <CardHeader className="">
          <div className="items-center space-y-1">
            <div className="inline-flex w-full items-center gap-1">
              <CardTitle className="inline-flex w-full items-center text-base">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    {title}{" "}
                    <span className="size-1 rounded-full bg-green-500"></span>
                  </a>
                ) : (
                  title
                )}
              </CardTitle>
              {production && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-gear-fill -mr-0 hover:scale-110"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </>
              )}
            </div>
            <div className="hidden font-mono text-xs underline print:visible">
              {link
                ?.replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
            <CardDescription className="font-mono text-xs">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] hover:scale-105"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
