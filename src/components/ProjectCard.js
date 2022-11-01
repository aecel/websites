const ProjectCard = ({ id, imageSrc, alt, link }) => {
  return (
    <a target="_blank" rel="noreferrer" className="card" id={id} href={link}>
      <img src={imageSrc} alt={alt} />
    </a>
  )
}

export default ProjectCard
