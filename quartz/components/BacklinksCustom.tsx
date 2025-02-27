import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backlinks.scss"
import { resolveRelative, simplifySlug } from "../util/path"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const BacklinksCustom: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
  cfg,
}: QuartzComponentProps) => {
  const slug = simplifySlug(fileData.slug!)
  const backlinkFiles = allFiles.filter((file) => file.links?.includes(slug))

  // Only render if there are backlinks
  if (backlinkFiles.length === 0) {
    return null
  }

  return (
    <div class={classNames(displayClass, "backlinks")}>
      <h3>{i18n(cfg.locale).components.backlinks.title}</h3>
      <ul class="overflow">
        {backlinkFiles.map((f) => (
          <li key={f.slug}>
            <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
              {f.frontmatter?.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

BacklinksCustom.css = style
export default (() => BacklinksCustom) satisfies QuartzComponentConstructor
