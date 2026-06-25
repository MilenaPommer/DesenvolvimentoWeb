import Button from "./Button";

interface IPricingCardProps {
    name: string;
    price: string;
    period?: string;
    features: string[];
    premium?: boolean;
    badge?: string;
}

export default function PricingCard({ name, price, period, features, premium, badge }: IPricingCardProps) {
    return (
        <div className={premium ? "pricing-card premium" : "pricing-card"}>
            {premium && badge && (
                <span className="bonus">
                    <p>{badge}</p>
                </span>
            )}
            <span className="plan">
                <h3>{name}</h3>
            </span>
            <span className="price">
                <h2>{price}</h2>
                {period && <p>{period}</p>}
            </span>
            <Button text="Experimentar agora" secondary={!premium} key={name} />
            <span className="hr" />
            {features.map((feature, index) => (
                <span className="features" key={index}>
                    <p>{feature}</p>
                </span>
            ))}
        </div>
    )
}