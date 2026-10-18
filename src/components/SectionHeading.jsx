export default function SectionHeading({ eyebrow, title, description, titleId }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2 id={titleId}>{title}</h2>{description ? <p className="section-description">{description}</p> : null}</div>
}
