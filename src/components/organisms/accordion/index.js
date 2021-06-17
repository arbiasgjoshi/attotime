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
  contentWrapper,
} from './accordion.module.scss';

const triggerItem = (val, opened, itemIcon, isIndustries) => (
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
      <div className={`${iconItem} ${isIndustries && industryIcon}`}>
        <Icon iconClass={isIndustries ? 'arrow-up' : 'minus'} />
      </div>
    ) : (
      <div className={`${iconItem} ${isIndustries && industryIcon}`}>
        <Icon iconClass={isIndustries ? 'arrow-down' : 'plus'} />
      </div>
    )}
  </div>
);

const Accordion = ({ i, expanded, setExpanded, content, icon, title, industries }) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header initial={false} onClick={() => setExpanded(isOpen ? false : i)}>
        {triggerItem(title, isOpen, icon, industries)}
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
              {industries ? <p>{content}</p> : <>{content}</>}
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
  type,
  onSetAccordionImage,
}) => {
  const [expanded, setExpanded] = useState(0);

  // const toggleAccordionImage = (img) => {
  //   console.log(img);
  // };

  const onAccordionChange = (val, accordionImage) => {
    setExpanded(val);
    if (accordionImage) {
      onSetAccordionImage(accordionImage);
    }
    // else {
    //   onSetAccordionImage(null);
    // }
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
          type={type}
          setExpanded={(index) => onAccordionChange(index, item.image)}
          icon={item.icon}
          content={item.description}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default FramerAccordion;
