import Link from "next/link";

type Props = {
  params: params;
};

interface params {
  category: string;
  subject: string;
}

function contentList(params: params) {
  const fs = require("fs");
  const path = `${process.cwd()}/src/posts/${params.category}/${params.subject}`;
  return fs.readdirSync(path);
}

const Subject = async ({ params }: Props) => {
  return (
    <div>
      <div className={"m-5 text-5xl text-white"}>{params.subject}</div>
      {contentList(params).map((title: string, idx: any) => (
        <div key={idx}>
          <Link
            href={`/blog/${params.category}/${params.subject}/${title}`}
            className={"m-5 text-2xl hover:text-amber-700"}
          >
            {title.replace("_", " ").replace(".mdx", "")}
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Subject;