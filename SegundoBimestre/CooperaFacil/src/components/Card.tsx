interface ICardProps {
    icon: string;
    iconAlt: string;
    title: string;
    text: string;
}

export default function Card({ icon, iconAlt, title, text }: ICardProps) {
    return (
        <div className="card">
            <span>
                <img src={icon} alt={iconAlt} width={64} height={64} />
            </span>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <hr />
            </div>
        </div>
    )
}