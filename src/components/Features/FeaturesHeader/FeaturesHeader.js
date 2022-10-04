import TopList from "./featuresList";
const topList = [
  {
    text: "AI Conversation",
    path: "/features/topIcon/Ai_conversation.svg",
  },
  {
    text: "Live Chat",
    path: "/features/topIcon/live-chat.svg",
  },
  {
    text: "Co-Browsing",
    path: "/features/topIcon/browsing.svg",
  },
  {
    text: "Video Review",
    path: "/features/topIcon/VideoReviews.svg",
  },
  {
    text: "Nudge",
    path: "/features/topIcon/Nudge.svg",
  },
  {
    text: "QR Code",
    path: "/features/topIcon/QrCode.svg",
  },
  {
    text: "Video Chat",
    path: "/features/topIcon/video-call.svg",
  },
  {
    text: "Campaign",
    path: "/features/topIcon/campaign.svg",
  },
];

const FeaturesHeader = () => {
  return (
    <div className="featuresTop">
      <div className="safemeet-container">
        <h1>
          Powerful on Their Own.
          <br />
          Even Better Together.
        </h1>
        <p>
          Accelerate your customer's journey with various AI enabled Video
          Engagement features to increase customer engagement & sales
          conversions.
        </p>
      </div>
      <div className="TopFeature">
        {topList.map((text, index) => (
          <TopList text={text.text} img={text.path} key={index} />
        ))}
      </div>
    </div>
  );
};
export default FeaturesHeader;
