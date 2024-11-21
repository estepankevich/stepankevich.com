import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzComponent } from "./quartz/components/types"


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.LinksHeader()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "GitHub": "https://github.com/estepankevich",
      "LinkedIn": "https://linkedin.com/in/estepankevich",
      "Scroll to top ↑": "#"
    },
  }),
}

export const recentPosts: QuartzComponent = 
  Component.DesktopOnly(Component.RecentNotes({
  title: "Recent posts",
  limit: 3,
  showTags: false,
  filter: (file) => { 
    return !!file.slug?.includes("🌍-Blog/");
  }
}))

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.TableOfContents()
  ],
  left: [
    Component.PageTitle(),
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link"
    })),
    recentPosts
  ],
  right: [
    Component.Search(),
    Component.Darkmode(),
    Component.Graph({
      localGraph: {
        scale: 1.1,
        repelForce: 0.5, // how much nodes should repel each other
        centerForce: 0.8, // how much force to use when trying to center the nodes
        linkDistance: 50, // how long should the links be by default?
        fontSize: 0.8, // what size should the node labels be?
        showTags: false, // whether to show tags in the graph
      },
      globalGraph: {
        scale: 2,
        repelForce: 0.08,
        centerForce: 0.9,
        linkDistance: 200,
        fontSize: 0.4,
        showTags: false,
      },
    }),
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
    })),
    recentPosts
  ],
  right: [
    Component.Search(),
    Component.Darkmode()
  ]
}
