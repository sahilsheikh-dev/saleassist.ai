import React, { Component, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./HomePage/Home"));
const Pricing = lazy(() => import("./PricingPage/Pricing"));
const Login = lazy(() => import("./LoginPage/Login"));
const AiChat = lazy(() => import("./AI-Chat-Page/AiChat"));
const FourZeroFour = lazy(() => import("../components/404/404"));
const Construction = lazy(() =>
  import("../components/Construction/Construction")
);
const VideoChat = lazy(() => import("./Video-Chat/VideoChat"));
const CoBrowsing = lazy(() => import("./Co-Browsing/CoBrowsing"));
const Nudges = lazy(() => import("./Nudges/Nudges"));
const VideoReview = lazy(() => import("./Video-Review/VideoReview"));
const QRCode = lazy(() => import("./QR-Code/QRCode"));
const Campaign = lazy(() => import("./Campaign/Campaign"));
const LiveChat = lazy(() => import("./Live-Chat/LiveChat"));
const ClientsStory = lazy(() => import("./Clients-Story/ClientsStory"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
const Clients = lazy(() => import("./Clients/Clients"));
const OnetwoOne = lazy(() => import("./One-to-One/OnetwoOne"));
const OnetoMany = lazy(() => import("./One-to-Many/OnetoMany"));
const SignUp = lazy(() => import("./SignUp/SignUp"));
const ForgetPassword = lazy(() => import("./Forget-Password/ForgetPassword"));
const OnetoAny = lazy(() => import("./One-to-Any/OnetoAny"));
const DemoPage = lazy(() => import("./DemoPage/DemoPage"));
const Features = lazy(() => import("./Features/Features"));
const AboutUs = lazy(() => import("./About Us/AboutUs"));
const Partner = lazy(() => import("./Partner/Partner"));
const Blogs = lazy(() => import("./Blogs/Blogs"));
const BlogDesc = lazy(() => import("./Blog-desc/BlogDesc"));
const ThanksMessage = lazy(() =>
  import("../components/Thanks-Message/ThanksMessage")
);
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./TermsConditions/TermsConditions"));
const KnowledgeBase = lazy(() => import("./Knowledge-Base/KnowledgeBase"));
// const LiveShopping = lazy(() => import("./Live-shoping/LiveShopping"));
const LiveShopping = lazy(() => import("./Live-shoping/LiveShopping"));
const LiveCommerce = lazy(() => import("./livecommerce-fashion/LiveCommerce"));
const NotFoundPage = lazy(() => import("../components/404/404"));

const renderLoader = () => <></>;

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/forget-password" component={ForgetPassword} />
            <Route exact path="/demo" component={DemoPage} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/partner" component={Partner} />
            <Route exact path="/blog-desc/:slugs" component={BlogDesc} />
            {/* Construction Pages */}
            <Route exact path="/ai-chat" component={AiChat} />
            <Route exact path="/video-chat" component={VideoChat} />
            <Route exact path="/nudges" component={Nudges} />
            <Route exact path="/co-browsing" component={CoBrowsing} />
            <Route exact path="/video-review" component={VideoReview} />
            <Route exact path="/qr-code" component={QRCode} />
            <Route exact path="/live-chat" component={LiveChat} />
            <Route exact path="/campaign" component={Campaign} />
            <Route exact path="/client-story" component={ClientsStory} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/features" component={Construction} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/api-docs" component={Construction} />
            <Route exact path="/github" component={Construction} />
            <Route exact path="/blogs" component={Construction} />
            <Route exact path="/one-to-many" component={OnetoMany} />
            <Route exact path="/one-to-one" component={OnetwoOne} />
            <Route exact path="/one-to-any" component={OnetoAny} />
            <Route exact path="/Privacy-Policy" component={PrivacyPolicy} />
            <Route exact path="/Terms-Conditions" component={TermsConditions} />
            <Route exact path="/thanks-message" component={ThanksMessage} />
            <Route exact path="/knowledge-base" component={KnowledgeBase} />
            <Route exact path="/Live-shopping" component={LiveCommerce} />
            <Route exact path="/livecommerce" component={LiveCommerce} />
            <Route
              exact
              path="/livecommerce-electronics"
              component={LiveCommerce}
            />
            <Route
              exact
              path="/livecommerce-jewellery"
              component={LiveCommerce}
            />
            <Route
              exact
              path="/livecommerce-furniture"
              component={LiveCommerce}
            />
            <Route
              exact
              path="/livecommerce-automobile"
              component={LiveCommerce}
            />
            <Route path="*" component={NotFoundPage} />
            {/* Error Boundries */}
            <Route component={FourZeroFour} />
          </Switch>
        </Suspense>
      </React.Fragment>
    );
  }
}
