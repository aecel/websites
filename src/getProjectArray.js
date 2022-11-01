const getProjectArray = () => {
  const importAll = (r) => {
    return r.keys().map(r)
  }

  // Imports all images on the path
  // "./images/projects"
  const imageArray = importAll(
    require.context("./images/projects", false, /\.(png|jpe?g|svg)$/)
  )

  // Gets the name of each image
  const nameArray = imageArray.map((imageSrc) => {
    return imageSrc.slice(24, imageSrc.indexOf("."))
  })

  let projectArray = []
  for (let i = 0; i < nameArray.length; i++) {
    projectArray.push({
      id: nameArray[i],
      imageSrc: imageArray[i],
      link: `https://aecel.github.io/${nameArray[i]}/`,
      githubLink: `https://github.com/aecel/${nameArray[i]}`,
      alt: `Link to ${nameArray[i]}`,
    })
  }

  return projectArray
}

export default getProjectArray
