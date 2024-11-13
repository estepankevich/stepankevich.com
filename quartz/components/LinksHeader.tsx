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
            <a class="links-header-item" href="/🌍-Areas/">
            🌍 Areas</a>    
            <a class="links-header-item" href="/📂-Projects/">
            📂 Projects</a>     
            <a class="links-header-item" href="/📚-Resources/">
            📚 Resources</a>
            <a class="links-header-item" href="/🔖-Tags/">
            🔖 Tags</a>
            <a class="links-header-item" href="/🗃️-Indexes/">
            🗃️ Indexes</a>    
            <a class="links-header-item" href="/🗄️-Archive/">
            🗄️ Archive</a>
        </div>
        <hr></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor