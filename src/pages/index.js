import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import { useIntl } from 'gatsby-plugin-intl';

import Icon from '@components/atoms/icon';
import Divider from '@components/atoms/divider';
import EmailForm from '@components/atoms/email-form';
import Number from '@components/atoms/number-card';
import HeaderComponent from '@components/molecules/header';
import Seo from '@components/molecules/seo';
import FooterComponent from '@components/molecules/footer';
import Title from '@components/molecules/title';
import MainTitle from '@components/molecules/main-title-card';
import CommentCard from '@components/molecules/comment-card';
import CarouselComponent from '@components/molecules/carousel';
import FeatureTabs from '@components/organisms/feature-tabs';
import FreeTrial from '@components/organisms/free-trial';
import Story from '@components/organisms/story';
import Services from '@components/organisms/services';
import VideoCheckList from '@components/organisms/video-checklist';

import { serviceList } from '@data/listed-data';
import authorImage from '@images/no-image.png';

import { container } from '@styles/main.module.scss';
import '@styles/includes/slick-carousel.scss';
import { FooterLinks } from '@locale/en.js';
import {
  btnWrapper,
  pulledLeft,
  pulledRight,
  carouselWrapper,
} from '@components/molecules/carousel/carousel.module.scss';
import { sliderWrapper, numbers, desktopImage } from './homepage.module.scss';

const SampleNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <button className={`${btnWrapper} ${pulledRight}`} onClick={onClick} type="button">
      <Icon iconClass="arrow-right" fSize={1.2} />
    </button>
  );
};

const SamplePrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <button className={`${btnWrapper} ${pulledLeft}`} onClick={onClick} type="button">
      <Icon iconClass="arrow-left" fSize={1.2} />
    </button>
  );
};

const Home = () => {
  const Intl = useIntl();

  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    vertical: false,
    slidesToScroll: 1,
    centerPadding: '20px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  });

  const titleList = [
    { title: Intl.formatMessage({ id: 'pages.homepage.timesheetCheckItemZero' }), id: '1asdd1a' },
    { title: Intl.formatMessage({ id: 'pages.homepage.timesheetCheckItemOne' }), id: '1asdd1b' },
    { title: Intl.formatMessage({ id: 'pages.homepage.timesheetCheckItemTwo' }), id: '1asdd1c' },
    { title: Intl.formatMessage({ id: 'pages.homepage.timesheetCheckItemThree' }), id: '1asdd1d' },
  ];

  const checkList = [
    { title: Intl.formatMessage({ id: 'pages.homepage.subscribeCheckItemZero' }), id: '1asdd1a' },
    { title: Intl.formatMessage({ id: 'pages.homepage.subscribeCheckItemOne' }), id: '1asdd1a' },
    { title: Intl.formatMessage({ id: 'pages.homepage.subscribeCheckItemTwo' }), id: '1asdd1a' },
    { title: Intl.formatMessage({ id: 'pages.homepage.subscribeCheckItemThree' }), id: '1asdd1a' },
    { title: Intl.formatMessage({ id: 'pages.homepage.subscribeCheckItemFour' }), id: '1asdd1a' },
  ];

  // console.log(titleList);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSettings({
        ...settings,
        slidesToShow: 1,
      });
    } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
      setSettings({
        ...settings,
        slidesToShow: 2,
        centerMode: false,
        centerPadding: '0',
      });
    } else {
      setSettings({
        ...settings,
        slidesToShow: 3,
        centerMode: false,
        centerPadding: '0',
      });
    }
  }, []);

  return (
    <div className={container}>
      <Seo title="ATTO: Timesheets for Employees | Time & GPS Location Tracking" />
      <HeaderComponent />
      <MainTitle
        title={Intl.formatMessage({ id: 'pages.homepage.title' })}
        subtitle={Intl.formatMessage({ id: 'pages.homepage.description' })}
      />
      <EmailForm
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
        checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
        checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
        checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
        style="homepage"
      />
      <Divider className="style1" />
      <StaticImage
        src="../images/banner-image-2@2x.png"
        alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
        width={1140}
        height={505}
        quality={95}
        placeholder="none"
        className={desktopImage}
      />
      <Divider className="style4" />
      <div className={sliderWrapper}>
        <Slider {...settings} className={carouselWrapper} width={960}>
          <CommentCard
            title="Amazing for my business!"
            description="Super convenient and easy to use, so happy i’ve found Atto! Highly recommend."
            date="23 Jul"
            author="Nita Ora"
            sliderItem
          />
          <CommentCard
            title="A must have software"
            description="I just love the ongoning improvements."
            date="20 Jul"
            author="James Stone"
            sliderItem
          />
          <CommentCard
            title="Everything you need"
            description="Service is fabolous and it’s easy to use. My employees love it."
            date="18 Jun"
            author="Rich Mathews"
            sliderItem
          />
          <CommentCard
            title="A must have software"
            description="I just love the ongoning improvements."
            date="20 Jul"
            author="James Stone"
            sliderItem
          />
          <CommentCard
            title="Everything you need"
            description="Service is fabolous and it’s easy to use. My employees love it."
            date="18 Jun"
            author="Rich Mathews"
            sliderItem
          />
        </Slider>
      </div>
      <Divider className="style4" />
      <FeatureTabs />
      <Divider />
      <Title
        maxWidth={840}
        maxDescriptionWidth={766}
        title={Intl.formatMessage({ id: 'pages.homepage.secondSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.homepage.secondSectionDesc' })}
        marginBottom="2rem"
      />
      <Divider className="style3" />
      <VideoCheckList
        list={titleList}
        videoUrl="https://vimeo.com/704266"
        cardStyle="centerAligned"
      />
      <Divider />
      <Title
        title={Intl.formatMessage({ id: 'pages.homepage.thirdSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.homepage.thirdSectionDesc' })}
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
      <Title title={Intl.formatMessage({ id: 'pages.homepage.fourthSectionTitle' })} />
      <Divider className="style9" />
      <CarouselComponent large>
        <Story
          className="homepage"
          img={authorImage}
          paragraph="“Atto has saved us $1,000’s on payroll and taken away the stress of running a business.”"
          author="Helen Smith, Owner of SCW Cleaning Limited"
        />
        {/* <Story
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
        /> */}
      </CarouselComponent>
      <Divider />
      <FreeTrial
        title={Intl.formatMessage({ id: 'pages.homepage.subscribeTitle' })}
        description={Intl.formatMessage({ id: 'pages.homepage.subscribeDesc' })}
        list={checkList}
      />
      <FooterComponent FooterLinks={FooterLinks} />
    </div>
  );
};

export default Home;
