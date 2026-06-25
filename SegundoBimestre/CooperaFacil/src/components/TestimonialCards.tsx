import Star from "../assets/star.svg";
import emptyStar from "../assets/emptyStar.svg";

interface ITestimonialCardProps {
    image: string;
    text: string;
    name: string;
    role: string;
    rating: number;
}

export default function TestimonialCard({ image, text, name, role, rating }: ITestimonialCardProps) {
    return (
        <div className="carousel-card">
            <img src={image} alt="Avatar do depoente" />
            <span className="testimony">
                <p>{text}</p>
            </span>
            <span className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                    <img
                        key={star}
                        src={star <= rating ? Star : emptyStar}
                        alt="Ícone estrela"
                        width={22}
                        height={20}
                    />
                ))}
            </span>
            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    )
}