import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-2">
            <Avatar className="mb-8 size-40 sm:hidden">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-base text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-sm text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-10"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-5" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-10"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-5" />
                  </a>
                </Button>
              ))}
              {/* {RESUME_DATA.contact.dj ? (
                <Button
                  key={RESUME_DATA.contact.dj.name}
                  className="size-10"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={RESUME_DATA.contact.dj.url}>
                    <Headphones className="size-5" />
                  </a>
                </Button>
              ) : null} */}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>
          <Avatar className="hidden size-40 sm:block">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          {RESUME_DATA.summary.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-pretty font-mono text-sm text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            View my{" "}
            <a
              className="resume-link underline"
              href={RESUME_DATA.resumeUrl}
              style={{ textUnderlineOffset: "6px" }}
            >
              resume
            </a>
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
                {education.gpa != null ? (
                  <CardContent className="mt-2 text-xs">
                    GPA: {education.gpa} / 4.0
                  </CardContent>
                ) : null}
                <CardContent className="mt-2 text-xs">
                  Relevant coursework: {education.coursework}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Avatar>
                    <AvatarImage alt={work.company} src={work.logo} />
                    <AvatarFallback>
                      {work.company?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>

                        <span className="inline-flex gap-x-2">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="mx-3 align-middle text-xs"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-sm tabular-nums">
                        {work.start} - {work.end}
                      </div>
                    </div>

                    <h4 className="font-mono text-sm leading-none">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs">
                    {work.description}
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </Section>

        <Section className=" croll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <p className="inline-flex items-center gap-2 font-mono text-xs text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="grey"
              className="bi bi-gear-fill hover:scale-110"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>{" "}
            = production app
          </p>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  isProject={true}
                />
              );
            })}
          </div>
        </Section>

        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">Papers for School</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.papers.map((paper) => {
              return (
                <ProjectCard
                  key={paper.title}
                  title={paper.title}
                  description={paper.description}
                  tags={paper.awards}
                  link={"link" in paper ? paper.link.href : undefined}
                  isProject={true}
                />
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Hobbies</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.topics.map((topic) => {
              return <Badge key={topic}>{topic}</Badge>;
            })}
          </div>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            Pick my brain about any of these things :)
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Contact me</h2>
          <div className="flex flex-col gap-2 text-pretty font-mono text-sm text-muted-foreground">
            <p>
              Want to chat? Just shoot me a dm{" "}
              <a
                href={RESUME_DATA.contact.social[2].url}
                className="underline hover:text-foreground"
              >
                on X
              </a>{" "}
              or email me directly at{" "}
              <span className="font-bold">
                ms [dot] 28 [at] dartmouth [dot] edu
              </span>
              .
            </p>
          </div>
        </Section>
      </section>

      {/* <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      /> */}
    </main>
  );
}
