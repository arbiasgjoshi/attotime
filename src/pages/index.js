import React from 'react';

import HeaderComponent from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import { FooterLinks } from '@locale/en.js';
import FooterComponent from '@components/molecules/footer';
import Divider from '@components/atoms/divider';
import Title from '@components/molecules/title';
import Video from '@components/molecules/video';
import Story from '@components/organisms/story';
import Number from '@components/atoms/number-card';
import CheckList from '@components/molecules/check-list';
import MainTitle from '@components/molecules/main-title-card';
import EmailForm from '@components/atoms/email-form';
import FeatureTabs from '@components/organisms/feature-tabs';
import FreeTrial from '@components/organisms/free-trial';
import Services from '@components/organisms/services';
import { container } from '@styles/main.module.scss';

import ConstructionLogo from '@images/construction-industry-logo.svg';
import PaintingLogo from '@images/painting-industry-logo.svg';
import HealthcareLogo from '@images/healthcare-industry-logo.svg';
import PlumbingLogo from '@images/plumbing-industry-logo.svg';
import ElectrianLogo from '@images/electrician-industry-logo.svg';
import LandscapingLogo from '@images/landscaping-industry-logo.svg';
import RoofingLogo from '@images/roofing-industry-logo.svg';
import CleaningLogo from '@images/cleaning-industry-logo.svg';
import ThreeDots from '@images/three-dots.svg';

import { StaticImage } from 'gatsby-plugin-image';
// import CommentCard from '@components/molecules/comment-card';

import authorImage from '@images/no-image.png';
import CarouselComponent from '@components/molecules/carousel';

// import ArrowRight from '@images/arrow-right.svg';
// import ArrowLeft from '@images/arrow-left.svg';

// import Carousel, { Dots, slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
// import '@components/molecules/carousel/carousel.scss';

// import {
//   btnWrapper,
//   leftAligned,
//   rightAligned,
//   disabled,
//   carouselWrapper,
// } from '@components/molecules/carousel/carousel.module.scss';

import {
  // slider,
  sliderWrapper,
  sliderText,
  checkListContainer,
  numbers,
} from './homepage.module.scss';

const titleList = [
  { title: 'No longer chasing timesheets.', id: '1asdd1a' },
  { title: 'Cutting payroll costs with accurate time entries.', id: '1asdd1b' },
  { title: 'Staying in the loop without constan check-ins', id: '1asdd1c' },
  { title: 'Saving hours of admin with instanly-generated timesheets.', id: '1asdd1d' },
];

const checkList = [
  { title: 'Avoid guesswork with accurate time-tracking' },
  { title: 'Increase employee accountability and safety' },
  { title: 'Stay in the loop without constant check-ins' },
  { title: 'Enjoy hassle-free automated employee timesheets' },
  { title: 'Streamline the entire payroll process' },
];
const serviceList = [
  { title: 'Construction', icon: <ConstructionLogo /> },
  { title: 'Landscaping & Gardening', icon: <LandscapingLogo /> },
  { title: 'Roofing', icon: <RoofingLogo /> },
  { title: 'Painting & Decorating', icon: <PaintingLogo /> },
  { title: 'Healthcare & Medical', icon: <HealthcareLogo /> },
  { title: 'Electrical', icon: <ElectrianLogo /> },
  { title: 'Plumbing & Heating', icon: <PlumbingLogo /> },
  { title: 'Other industries', icon: <ThreeDots /> },
];

const Home = () => (
  <div className={container}>
    <SEO title="Attotime - Landing Page" />
    <HeaderComponent />
    <MainTitle
      title="Time tracking, simplified."
      subtitle="Atto is a simple all-in-one time-tracking and timesheet solution. Spend less time managing your business and more time getting work done."
    />
    <EmailForm
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
      style="homepage"
    />
    <Divider className="style1" />
    <StaticImage
      src="../images/banner-image-2@2x.png"
      alt="Home banner image"
      width={1140}
      height={485}
    />
    <Divider className="style4" />
    <div className={sliderWrapper}>
      {/* <Carousel
        className={carouselWrapper}
        width={960}
        plugins={[
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <button className={`${btnWrapper} ${leftAligned}`} type="button">
                  <ArrowLeft />
                </button>
              ),
              arrowLeftDisabled: (
                <button className={`${btnWrapper} ${leftAligned} ${disabled}`} type="button">
                  <ArrowLeft />
                </button>
              ),
              arrowRight: (
                <button className={`${btnWrapper} ${rightAligned}`} type="button">
                  <ArrowRight />
                </button>
              ),
              arrowRightDisabled: (
                <button className={`${btnWrapper} ${rightAligned} ${disabled}`} type="button">
                  <ArrowRight />
                </button>
              ),
              addArrowClickHandler: true,
            },
          },
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
      >
        <CommentCard
          title="Amazing for my business!"
          description="Super convenient and easy to use, so happy i’ve found Atto! Highly recommend."
          date="23 Jul"
          author="Nita Ora"
        />
        <CommentCard
          title="A must have software"
          description="I just love the ongoning improvements."
          date="20 Jul"
          author="James Stone"
        />
        <CommentCard
          title="Everything you need"
          description="Service is fabolous and it’s easy to use. My employees love it."
          date="18 Jun"
          author="Rich Mathews"
        />
        <CommentCard
          title="A must have software"
          description="I just love the ongoning improvements."
          date="20 Jul"
          author="James Stone"
        />
        <CommentCard
          title="Everything you need"
          description="Service is fabolous and it’s easy to use. My employees love it."
          date="18 Jun"
          author="Rich Mathews"
        />
      </Carousel> */}
      <div className={sliderText}>
        <span>Rated Excellent 5/5 over 1,200 reviews</span>
      </div>
    </div>
    <Divider className="style4" />
    <FeatureTabs />
    <Divider />
    <Title
      maxWidth={840}
      maxDescriptionWidth={766}
      title="Thousands of businesses have saved time using Atto"
      description="And it’s not just time saved, but money and stress too."
    />
    <Divider className="style3" />
    <Video />
    <Divider className="style2" />
    <div className={checkListContainer}>
      <CheckList list={titleList} />
    </div>
    <Divider />
    <Title
      title="See how Atto works with your industry"
      description="Atto helps all types of businesses across the world manage their employees’ time."
      maxDescriptionWidth={700}
    />
    <Divider className="style2" />
    <Services list={serviceList} />
    <Divider className="style8" />
    <div className={numbers}>
      <Number title="500,000+" description="Timesheets Produced" />
      <Number title="150,000+" description="App Downloads" />
      <Number title="10,000+" description="Companies use Atto" />
      <Number title="250 million+" description="Minutes Tracked" />
    </div>
    <Divider />
    <Title title="Hear what business owners say about Atto" />
    <Divider className="style9" />
    <CarouselComponent large>
      <Story
        className="homepage"
        img={authorImage}
        paragraph="“Atto has saved us $1,000’s on payroll and taken away the stress of running a business.”"
        author="Robert Bennet - DPA Cleaning Services, Inc."
      />
      <Story
        className="homepage"
        img={authorImage}
        paragraph="“Atto has saved us $1,000’s on payroll and taken away the stress of running a business.”"
        author="Robert Bennet - DPA Cleaning Services, Inc."
      />
      <Story
        className="homepage"
        img={authorImage}
        paragraph="“Atto has saved us $1,000’s on payroll and taken away the stress of running a business.”"
        author="Robert Bennet - DPA Cleaning Services, Inc."
      />
    </CarouselComponent>
    <Divider />
    <FreeTrial
      title="No time to waste!"
      description="Stay in control of your employees’ time."
      list={checkList}
    />
    <FooterComponent FooterLinks={FooterLinks} />
  </div>
);

export default Home;
