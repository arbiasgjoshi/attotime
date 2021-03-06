import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import loadable from '@loadable/component';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-react-intl';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import Article from '@components/molecules/article';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import Steps from '@components/organisms/steps';
import ImagesBox from '@components/organisms/images-box';

import image5 from '@images/plumbing/Respond faster to emergency plumbing call-outs@2x.png';
import image6 from '@images/plumbing/Avoid surprises by forecasting your wage bill ahead of payday@2x.png';

import {
  container,
  industryPadding,
  oldVsNewGradient,
  noPadding,
  background,
} from '@styles/main.module.scss';
import {
  firstList,
  checkList1,
  accordionList1,
  accordionList2,
} from '@data/industries/plumbing-and-heating.js';
import { oldList, newList, plumberSteps } from '@data/industries';

const Modal = loadable(() => import('@components/molecules/modal'));
const Footer = loadable(() => import('@components/molecules/footer'));
const SubscribeBanner = loadable(() => import('@components/molecules/subscribe-banner'));

const PlumbingAndHeating = () => {
  const Intl = useIntl();

  const [showDialog, setShowDialog] = useState(false);
  const openModal = () => setShowDialog(true);
  const closeModal = () => setShowDialog(false);
  const [values, setValues] = useState(null);

  const toggleDeleteInvite = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email }),
    };
    fetch('https://staging.attotime.com/delete-invite', requestOptions)
      .then((res) => res.json())
      .then((data) => {
        closeModal();
        setValues(data);
        setTimeout(() => openModal(), 2000);
      });
  };

  const formSuccessState = (val) => {
    if (val?.action !== 'delete') {
      closeModal();
      setValues(val);
    } else {
      toggleDeleteInvite(val);
    }
  };

  return (
    <>
      <div className={`${container} ${industryPadding}`}>
        <Modal
          close={closeModal}
          showDialog={showDialog}
          hasValues={values}
          onDelete={toggleDeleteInvite}
          setFormValues={(formValues) => formSuccessState(formValues)}
        />
        <Seo
          title="Time Tracking for Plumbing and Heating Companies"
          description="Track all your plumbers' time and locations throughout their workday. Save endless hours on admin and payroll. And, respond faster to emergency call-outs."
        />
        <Header />
        <IndustryMainCard
          smallTitle="ATTO FOR PLUMBERS AND HEATING ENGINEERS"
          title="Time Tracking for Plumbing and Heating Companies"
          list={checkList1}
          image="plumbing-banner"
        />
        <Divider className="style4" />
        <Story
          img="plumbing"
          paragraph={`"This app has really helped our company. I love the location service that it provides while my employees are clocked in. This is absolutely necessary as our employees drive to multiple job site locations.???`}
          author="Lyns & J"
        />
        <Divider />
        <Title
          title="Track all of your plumbers throughout their workday"
          description="With real-time activity tracking, you can check if your plumbers are working, on a break, or enjoying some time off."
          bodyStyle="secondBodyStyle"
          maxWidth={920}
          maxDescriptionWidth={800}
        />
        <Divider className="centenary" />
        <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
        <Divider />
        <Article
          title="Get helpful reminders so your plumbers never forget to clock in!"
          description="When dealing with burst pipes and emergency call-outs, it???s easy to lose track of time. That???s why when your plumbers enter or leave a job site, and at their normal start and end time, we???ll remind them to clock in and out. And if they happen to forget, they can add a manual time entry for you to review later."
          image="plumbing-one"
          maxWidth={500}
          imagePadding="6rem 0"
          imageWidth={550}
          // imageHeight={354}
        />
        <Divider className="style3" />
        <Article
          title="Entrust your on-site manager to track your plumbers??? time"
          description="Dealing with commercial or industrial plumbing jobs that require multiple plumbers on-site? Instead of having each plumber track their time individually, your on-the-job manager can clock in and out on all of your plumbers??? behalf."
          image="plumbing-two"
          isSwapped
          maxWidth={500}
          imagePadding="6rem 17rem 6rem 0"
          imageWidth={378}
          // imageHeight={354}
        />
        <Divider className="style3" />
        <Title
          title="Keep track of your plumbers as they make their way to different call-outs throughout the day"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle list={accordionList1} image={image5} />
        <Divider />
        <Title
          title="Everything you need to keep plumbing jobs on schedule and on budget"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle list={accordionList2} isSwapped image={image6} />
        <Divider className="style11" />
        <Title
          title="Say goodbye to paper timesheets!"
          description="Switch to Atto, an easier and more accurate time-tracking solution for plumbing and heating companies."
          maxWidth={1040}
          maxDescriptionWidth={900}
        />
      </div>
      <div className={oldVsNewGradient}>
        <div className={`${container} ${noPadding}`}>
          <Divider />
          <OldVsNew oldList={oldList} newList={newList} />
          <Divider />
        </div>
      </div>
      <div className={background}>
        <div className={`${container} ${noPadding}`}>
          <StaticImage
            src="../../../images/plumbing/Say goodbye to paper timesheets@2x.png"
            quality={96}
            width={1209}
            placeholder="blurred"
          />
          <Divider className="style3" />
          <ImagesBox
            imageType="plumbing-boxes"
            title="Trusted by thousands of plumbers & heaters across 50+ countries"
          />
        </div>
      </div>
      <div className={`${container} ${noPadding}`}>
        <Divider />
        <Title
          title="Get everything set up in 3 simple steps"
          description="Atto is designed to be the easiest time-tracking app to use.
         There???s absolutely no technical knowledge required."
          maxWidth={932}
          maxDescriptionWidth={750}
        />
        <Divider className="style1" />
        <Steps list={plumberSteps} toggleModal={() => openModal()} />
        <Divider className="style4" />
        <SubscribeBanner
          title="All cisterns go! Get to work with accurate time tracking from Atto."
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
        />
        <Footer />
      </div>
    </>
  );
};

export default PlumbingAndHeating;
