import './errorMessage.scss';
import {FC} from "react";
interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="error-message">
            {message}
        </div>
    );
};
