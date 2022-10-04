import React, {Component} from 'react'
import SumupFeatures from '../../components/Sumup-Features/SumupFeatures'
import ImgToText from '../../components/SumupDetailsFeat/ImgToText/ImgToText'
import TextToImg from '../../components/SumupDetailsFeat/TestToImg/TextToImg'
import Layout1 from '../../layout/Layout1';
import AiChatIcon from "../../assests/sub-banner-icons/ai icon.svg";
import CoBrowsingIcon from "../../assests/sub-banner-icons/co browsing icon.svg";
import NudgesIcon from "../../assests/sub-banner-icons/nudges icon.svg";
import VideoChatIcon from "../../assests/sub-banner-icons/video chat icon.svg";
import VideoReviewIcon from "../../assests/sub-banner-icons/video review icon.svg";
import QRCodeIcon from "../../assests/sub-banner-icons/qr icon.svg";
import AIChatImage from "../../assests/sumup-details/AI Conv.png";
import VideoReviewImage from "../../assests/sumup-details/Video Review.png";
import QRCodeImage from "../../assests/sumup-details/QR Code.png";
import NudgesImage from "../../assests/sumup-details/Nudges.png";
import VideoChatImage from "../../assests/sumup-details/Video Chat.png";
import CoBrowsingImage from "../../assests/sumup-details/Co Browsing.png";
import TrySaleAssist from '../../components/Try-Saleassist/TrySaleAssist';

export default class Features extends Component {
  render() {
    const AiConv = ["Improves customer retention", "Delivers unified customer experience", "Boosts sales conversion", "Reduces workload of the customer support team"];
    const VideoReview = ["Helps on knowing more about customers", "Get amazing feedbacks from them", "Highlights the loopholes present in your services", "More convenient for the customers"];
    const QRCode = ["Very easy to use", "Boosts the ‘call to action rates’", "Promotes sharing and networking", "Best for non-tech savvy customers"];
    const Nudges = ["Improves the impression and click-through rate", "Helps in boosting conversions", "Attracts new customers", "Helps in getting valuable feedback from customers"];
    const VideoChat = ["Helps agent in understanding customer query in a better way", "Improves customer engagement", "Offers customer-friendly experience", "Enhances overall brand experience"];
    const CoBrowsing = ["Promotes better collaboration", "Leads to higher customer satisfaction", "Best way to address technical customer query", "Higher conversion rate"];
    return (
      <React.Fragment>
        <Layout1>
          <SumupFeatures/>
          <ImgToText
            title="AI Conversation"
            subtitle="AI Chat built on world's most powerful NLP engine"
            details="Leverage the power of conversational AI to upgrade the customer service experience, drive conversions and save a lot on your operational costs. AI conversations give life and a magical human touch to your customer engagements.
"
            id="ai-chat"
            link="/ai-chat"
            points={AiConv}
            Image={AIChatImage}
            logo={AiChatIcon}/>
          <div className='safemeet-container'>
            <hr className="safemeet-sumup-hr"></hr>
          </div>
          <TextToImg
            title="Video Review"
            subtitle="Capture Video Reviews via Button, QR & Link"
            details="Redefine the modern video workflow with our video review solutions. SaleAssist optimizes the video review and approval proofing process for creative teams all around the world.Unorganized client feedback might hamper your entire production. SaleAssist’s video review is the solution."
            link="/video-review"
            points={VideoReview}
            Image={VideoReviewImage}
            logo={VideoReviewIcon}/>
            <div className='safemeet-container'>
            <hr className="safemeet-sumup-hr"></hr>
          </div>
          <ImgToText
            title="QR Code"
            subtitle="Dynamic QR code capable of live video conversations"
            details="Delight your prospects and customers with the best video
            assistant solutions just by scanning a QR code. Just open your
            camera and scan the QR code to watch the video for quick
            customer query resolution."
            link="/qr-code"
            points={QRCode}
            Image={QRCodeImage}
            logo={QRCodeIcon}/>
            <div className='safemeet-container'>
            <hr className="safemeet-sumup-hr"></hr>
          </div>
          <TextToImg
            title="Nudges"
            subtitle="Automate Notifications with pre-built templates"
            details="Send gentle reminders and offer details to your customers in a
            user-friendly way. It’s the best way to attract new customers and
            retain the existing ones. Deliver a consistent customer
            experience through nudges."
            link="/nudges"
            points={Nudges}
            Image={NudgesImage}
            logo={NudgesIcon}/>
            <div className='safemeet-container'>
            <hr className="safemeet-sumup-hr"></hr>
          </div>
          <ImgToText
            title="Video Chat"
            subtitle="Live Video Calls with powerful collaboration features"
            details="Stay one step ahead of your competitors by providing visual communication. The built-in video chatting technology by SaleAssist allows your customers to connect in person no matter their geographical location. Resolve customer issues more interactively and improve customer satisfaction."
            link="/video-chat"
            points={VideoChat}
            Image={VideoChatImage}
            logo={VideoChatIcon}/>
            <div className='safemeet-container'>
            <hr className="safemeet-sumup-hr"></hr>
          </div>
          <TextToImg
            title="Co Browsing"
            subtitle="Type, Click & Scroll for your customers"
            details="Co-browse your way to a better digital experience. View and
            interact with your customers’ browsers when they get stuck.
            Help your customer troubleshoot their issues by collaborating
            with them on-screen.
"
            link="/co-browsing"
            points={CoBrowsing}
            Image={CoBrowsingImage}
            logo={CoBrowsingIcon}/>
            
          <TrySaleAssist/>
        </Layout1>
      </React.Fragment>
    )
  }
}
