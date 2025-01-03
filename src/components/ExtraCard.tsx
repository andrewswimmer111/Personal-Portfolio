import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface ExtraCardProps {
    title: string,
    description: string,
    link: string,
}



const ExtraCard:React.FC<ExtraCardProps> = ( {title, description, link}) => {

    return (
        <div className="extra-card">
            {
                link === "" ? 
                <div className="extra-title"> {title} </div> :
                <a href={link} 
                    className="extra-title link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                > 
                    {title} 
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: "0.7em", marginBottom: "0.1em" }}/> 
                </a> 
            }
            <div className="extra-body" dangerouslySetInnerHTML={{__html: description}}></div>
        </div>
    )
}

export default ExtraCard;