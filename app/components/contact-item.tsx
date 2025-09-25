import { type FunctionComponent } from "react";
import { type IconType } from "~/constants/contactInfo";

interface Props {
  Icon: IconType;
  text: string;
  isLink?: boolean;
}

export const ContactItem: FunctionComponent<Props> = ({
  Icon,
  text,
  isLink,
}) => (
  <div className="flex items-center gap-4">
    <Icon className="h-6 w-6 text-green-400" />
    {isLink ? (
      <a
        href={text}
        className="text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    ) : (
      <div className="text-sm">{text}</div>
    )}
  </div>
);
