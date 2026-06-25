import "../styles/button.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
    onClick?: () => void;
}

export default function Button({ text, secondary }: IButtonProps) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"}>
            {text}
        </button>
    )
}