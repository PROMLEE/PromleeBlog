import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { urlParams } from "@/config/types";
import { CategoryKo } from "@/config/koname";

export const BreadCrumb = ({ params }: { params: urlParams }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={`/blog/${params.category}`}
            className="hover:font-bold hover:text-text"
          >
            {CategoryKo[params.category].name.split("(")[0]}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            href={`/blog/${params.category}/${params.subject}`}
            className="hover:font-bold hover:text-text"
          >
            {CategoryKo[params.category].sub[params.subject].name.split("(")[0]}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />{" "}
        <BreadcrumbItem>
          <BreadcrumbLink
            href={`/blog/${params.category}/${params.subject}/${params.title}`}
            className="hover:font-bold hover:text-text"
          >
            {
              CategoryKo[params.category].sub[params.subject].title[
                params.title
              ].name.split("(")[0]
            }
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-bold text-text">
            {
              CategoryKo[params.category].sub[params.subject].title[
                params.title
              ].content[params.content].name.split("(")[0]
            }
          </BreadcrumbPage>
        </BreadcrumbItem>
        <div className={"ml-auto text-right"}>
          {"📅 " +
            CategoryKo[params.category].sub[params.subject].title[params.title]
              .content[params.content].date}
        </div>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
