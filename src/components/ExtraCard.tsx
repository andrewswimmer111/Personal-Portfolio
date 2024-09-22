interface ExtraCardProps {
    title: string,
    description: string,
}

const ExtraCard:React.FC<ExtraCardProps> = ( {title, description}) => {
    return (
        <div className="extra-card">
            <div className="extra-title"> {title} </div>
            <div className="extra-body" dangerouslySetInnerHTML={{__html: description}}></div>
        </div>
    )
}

export default ExtraCard;