/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Icon from '@components/atoms/icon';

import { motion, AnimatePresence } from 'framer-motion';

import {
  triggerItemWrap,
  activeClass,
  accordionItem,
  iconItem,
  industryIcon,
  industryAccordion,
  svgWrap,
  adjustPadding,
  featureImgWrapper,
  contentWrapper,
} from './accordion.module.scss';

const triggerItem = (val, opened, itemIcon, hasArrow) => (
  <div className={triggerItemWrap}>
    {itemIcon && <div className={svgWrap}>{itemIcon}</div>}
    <motion.h5
      initial={false}
      className={opened ? activeClass : null}
      transition={{ duration: 0.25 }}
    >
      {val}
    </motion.h5>
    {opened ? (
      <div className={`${iconItem} ${hasArrow && industryIcon}`}>
        <Icon iconClass={hasArrow ? 'arrow-up' : 'minus'} />
      </div>
    ) : (
      <div className={`${iconItem} ${hasArrow && industryIcon}`}>
        <Icon iconClass={hasArrow ? 'arrow-down' : 'plus'} />
      </div>
    )}
  </div>
);

const Accordion = ({
  image,
  industries,
  i,
  icon,
  expanded,
  setExpanded,
  content,
  featureImage,
  title,
  faq,
  hasArrow,
  featureTabs,
}) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header initial={false} onClick={() => setExpanded(isOpen ? false : i)}>
        {triggerItem(title, isOpen, icon, hasArrow)}
      </motion.header>
      <AnimatePresence initial={false} exitBeforeEnter>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            style={{ overflow: 'hidden' }}
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <motion.div
              initial="collapsed"
              animate="open"
              variants={{
                open: { translateY: '0', opacity: 1 },
                collapsed: { translateY: '2rem', opacity: 0 },
              }}
              transition={{ delay: 0.1 }}
              className={contentWrapper}
            >
              {!faq ? <p>{content}</p> : <>{content}</>}
              {featureTabs && featureImage && (
                <div className={featureImgWrapper}>
                  <img src={featureImage} alt={title} />
                </div>
              )}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const FramerAccordion = ({
  items,
  industries = false,
  noIconPadding = false,
  featureTabs = false,
  arrowIcon,
  type,
  onSetAccordionImage,
}) => {
  const [expanded, setExpanded] = useState(0);

  const onAccordionChange = (val, accordionImage) => {
    setExpanded(val);
    if (accordionImage) {
      onSetAccordionImage(accordionImage);
    }
  };

  return (
    <div
      className={`${accordionItem} ${industries && industryAccordion} ${
        noIconPadding && adjustPadding
      }`}
    >
      {items.map((item, i) => (
        <Accordion
          i={i}
          key={i}
          expanded={expanded}
          industries={industries}
          featureTabs={featureTabs}
          type={type}
          hasArrow={arrowIcon}
          setExpanded={(index) => onAccordionChange(index, item.image)}
          icon={item.icon}
          featureImage={item.featureImage}
          content={item.description}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default FramerAccordion;
