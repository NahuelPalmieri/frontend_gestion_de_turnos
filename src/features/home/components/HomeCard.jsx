export default function HomeCard({
    color,
    icon,
    title,
    description,
}) {
    return (
        <div className={`card ${color}`}>

            <i className={icon}></i>

            <h2>{title}</h2>

            <p>{description}</p>

        </div>
    );
}