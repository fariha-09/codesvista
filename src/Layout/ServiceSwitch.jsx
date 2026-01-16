import { useParams } from "react-router-dom";
import SelectedService from "./WebdevelopmentDetail";
import DigitalmarketingDetail from "./DigitalmarketingDetail";


export default function ServiceSwitch() {
  const { slug } = useParams();

  switch (slug) {
    case "web-development":
      return <SelectedService />;
    case "seo":
      return <SEODetail />;
      case "digital-marketing":
      return <DigitalmarketingDetail />;
      
    default:
      return <WebDevDetail />; 
  }
}