import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.LinksHeader()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "GitHub": "https://github.com/estepankevich",
      "LinkedIn": "https://linkedin.com/in/estepankevich"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents({ 
      showByDefault: false, 
      collapseByDefault: true
    }))
  ],
  left: [
    Component.PageTitle(),
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link"
    }))
  ],
  right: [
    Component.Search(),
    Component.Darkmode(),
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents({ 
      showByDefault: false, 
      collapseByDefault: true
    }))
  ],
  afterBody: [
    Component.BacklinksCustom()
  ]
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link"
    }))
  ],
  right: [
    Component.Search(),
    Component.Darkmode()
  ]
}
