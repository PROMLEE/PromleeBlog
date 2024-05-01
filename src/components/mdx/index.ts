import {
  h1tag,
  h2tag,
  h3tag,
  h4tag,
  h5tag,
  oltag,
  ultag,
  litag,
  btag,
  ptag,
  thtag,
  tdtag,
  // codetag,
  // spantag,
  // blockquotetag,
  atag,
  imgtag,
} from "@/components/mdx/defaulttags";
import {
  Answer,
  Math,
  Bbox,
  Rbox,
  Gbox,
  Ybox,
} from "@/components/mdx/customtags";

export const components = {
  h1: h1tag,
  h2: h2tag,
  h3: h3tag,
  h4: h4tag,
  h5: h5tag,
  ol: oltag,
  li: litag,
  ul: ultag,
  th: thtag,
  td: tdtag,
  strong: btag,
  b: btag,
  p: ptag,
  // code: codetag,
  // span: spantag,
  // blockquote: blockquotetag,
  a: atag,
  img: imgtag,
  Answer,
  Math,
  Bbox,
  Rbox,
  Gbox,
  Ybox,
};
