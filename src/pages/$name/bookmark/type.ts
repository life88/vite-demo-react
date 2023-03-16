export interface BookmarkItem {
  key: string;
  title: string | JSX.Element;
  href?: string;
  isLeaf?: boolean;
  children?: BookmarkItem[];
}
