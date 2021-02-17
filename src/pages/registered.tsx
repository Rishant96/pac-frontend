import { useParams } from "react-router-dom";
import { HeaderContainer } from "../containers";
import { QRorLink } from "../components";

export const Registered: React.FC = () => {
  const { secret } = useParams<{ secret: string }>();
  let content = <p>No secret found!</p>;

  if (secret) {
    content = (
      <QRorLink>
        <div>
          <QRorLink.Link secret={secret} />
          <span>Or,</span>
        </div>
        <QRorLink.QRCode secret={secret} />
      </QRorLink>
    );
  }

  return <HeaderContainer>{content}</HeaderContainer>;
};
