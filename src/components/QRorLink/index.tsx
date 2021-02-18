import { Container, Link, QRCode } from "./qrorlink.styles";
import * as ROUTES from "../../constants/routes";

type SecretProp = {
  secret: string;
};

type QRorLinkComponent = React.FC & {
  Link: React.FC<SecretProp>;
  QRCode: React.FC<SecretProp>;
};

export const QRorLink: QRorLinkComponent = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

QRorLink.Link = ({ secret, ...restProps }) => (
  <Link to={`${ROUTES.FORM}/${secret}`}>{`${window.location.href}${ROUTES.FORM}/${secret}`}</Link>
);

QRorLink.QRCode = ({ secret, ...restProps }) => {
  return <QRCode>QR Code: {secret}</QRCode>;
};
