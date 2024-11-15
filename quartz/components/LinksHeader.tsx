import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div id="links-header-container">
        <div id="links-header">
            <a class="links-header-item" href="/🌍-Blog/">
            🌍 Blog</a>        
            <a class="links-header-item" href="/🌐-Topics/">
            🌐 Topics</a>    
            <a class="links-header-item" href="/📂-Areas/">
            📂 Areas</a>     
            <a class="links-header-item" href="/📚-Resources/">
            📚 Resources</a>
            <a class="links-header-item" href="/🔖-Tags/">
            🔖 Tags</a>
        </div>
        <hr></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor