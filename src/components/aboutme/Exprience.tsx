interface ExprienceType {
  name: string;
  url?: { name: string; url: string };
  date: string;
  contents: string[];
}

const expriences: ExprienceType[] = [
  {
    name: "UMC 5th, 6th",
    date: "2023.09.07 ~",
    url: { name: "UMC", url: "https://www.makeus.in/umc" },
    contents: [
      "앱&웹 서비스 런칭 대학생 IT 연합 동아리",
      "5기 Web 파트(React) 참여",
      "5기 Map: 2 Zero 프로젝트 런칭",
      "6기 중앙대학교 Web 파트장",
      "6기 Server 파트(Spring) 참여",
    ],
  },
];

const educations: ExprienceType[] = [
  {
    name: "한국외국어대학교",
    date: "2018.03 ~ 2023.02",
    contents: ["컴퓨터공학 전공"],
  },
  {
    name: "중앙대학교",
    date: "2023.03 ~",
    contents: ["2023년도 편입학", "소프트웨어 전공"],
  },
];

export const Exprience = () => {
  return (
    <div className="w-full">
      <h1>🎈 Experiences</h1>
      <hr />
      {expriences.map((exprience, idx) => (
        <div key={idx}>
          <h2>{exprience.name}</h2>
          <div className="flex flex-row gap-4">
            <div className="w-2/3">
              {exprience.url && (
                <a href={exprience.url.url} target="_blank" rel="noreferrer">
                  {exprience.url.name} 홈페이지
                </a>
              )}
              <p>{exprience.date}</p>
            </div>
            <ul className="m-0 w-2/3">
              {exprience.contents.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <h1 className="mt-20">🎓 Education</h1>
      <hr />
      {educations.map((edu, idx) => (
        <div key={idx}>
          <h2>{edu.name}</h2>
          <div className="flex flex-row gap-4">
            <div className="w-2/3">
              {edu.url && (
                <a href={edu.url.url} target="_blank" rel="noreferrer">
                  {edu.url.name} 홈페이지
                </a>
              )}
              <p>{edu.date}</p>
            </div>
            <ul className="m-0 w-2/3">
              {edu.contents.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
