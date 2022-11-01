import "./styles/style.css"
import getProjectArray from "./getProjectArray"
import ProjectCard from "./components/ProjectCard"

const App = () => {
  const projectArray = getProjectArray()

  return (
    <div className="App">
      <header></header>
      <main>
        <div class="cards-container">
          {projectArray.map((project) => {
            return (
              <ProjectCard
                id={project.id}
                key={project.id}
                imageSrc={project.imageSrc}
                alt={project.alt}
                link={project.link}
              />
            )
          })}
        </div>s
      </main>
      <footer>Copyright © aecel 2022</footer>
    </div>
  )
}

export default App
