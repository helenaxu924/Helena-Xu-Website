import"./WorkCardStyles.css"


const WorkCard = (props) => {
  return (
            <div className="project-card">
                <img src={props.imgsrc} alt="project"></img>
                <h2 className="project-title">{props.title}</h2>
                <div className="project-details">
                <p>{props.text}
                </p>
                
                <div className="project-buttons"> <a href={props.view} className="btn"> View Demo </a> 
                 <a href={props.source} className="btn"> View Code </a> </div>
                </div>
            </div>
  )
}
  
export default WorkCard