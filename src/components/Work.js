import"./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"


const Work = (props) => {
  return (
    <div className="work-container">
        <h1 className="project-heading">{props.first ? "View some featured projects:" : "Projects:"}</h1>
        <div className="project-container">
            {WorkCardData.filter((val, ind) => props.first ? ind <= props.first - 1 : true).map((val, ind) => {
                // in home we pass a prop, which here if there exists a prop then we filter through so that we only take the 
                // values with index 0-2 and then you do map which puts in the values for the card. if there is no props passed through
                // (if props.first ? ) is false or does not exist then you do the rest of ternary operator and so filter is just all true
                // so that you pass everything through to map and that's what happens on project page 
                return (<WorkCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}/>)
            })}
            </div>
        </div>
  )
}

export default Work