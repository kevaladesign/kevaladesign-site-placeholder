import { FixedObject } from 'gatsby-image';

type ChildImageSharp = { fixed: FixedObject };
type Node = { base: string; childImageSharp: ChildImageSharp };
type Edges = { node: Node };
type AllFile = { edges: Edges[] };

export type PageQueryData = {
  allFile: AllFile;
};
