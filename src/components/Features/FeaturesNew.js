import FeaturesHeader from "./FeaturesHeader/FeaturesHeader";
import FeatBox from "./FeatureListBox";
import FeatureData from "./Features.json";
import BarCode from "./barCode";
const FeaturesNew = () => {
  return (
    <>
      <FeaturesHeader />
      <div className="safemeet-container">
        <h2 className="ourFeatures">Our Features</h2>
        <p className="FeaturesSubTitile">
          Features are modular & easy to activate. No Development needed.
        </p>
      </div>
      <section className="AIConversation">
        <div className="safemeet-container">
          {FeatureData.slice(0, 2).map((data, indx) => (
            <FeatBox
              FeatureAll={data}
              oddClass={indx % 2 === 0 ? "evenClass" : "oddClass"}
              bigImg={"leftImage" + indx + 1}
              iconBg={"iconbg" + indx + 1}
              key={indx}
            />
          ))}
        </div>
      </section>
      <section className="QRCode">
        <div className="safemeet-container">
          {FeatureData.slice(2, 4).map((data, indx) => (
            <FeatBox
              FeatureAll={data}
              oddClass={indx % 2 === 0 ? "evenClass" : "oddClass"}
              bigImg={"leftImage" + indx + 2}
              iconBg={"iconbg" + indx + 2}
              key={indx}
            />
          ))}
        </div>
      </section>
      <section className="videoChat">
        <div className="safemeet-container">
          {FeatureData.slice(4, 6).map((data, indx) => (
            <FeatBox
              FeatureAll={data}
              oddClass={indx % 2 === 0 ? "evenClass" : "oddClass"}
              bigImg={"leftImage" + indx + 3}
              iconBg={"iconbg" + indx + 3}
              key={indx}
            />
          ))}
        </div>
      </section>
      <BarCode />
    </>
  );
};

export default FeaturesNew;
