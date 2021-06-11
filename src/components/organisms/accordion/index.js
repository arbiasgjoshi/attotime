import React, { useState } from 'react';

import Icon from '@components/atoms/icon';

import { motion, AnimatePresence } from 'framer-motion';

import { triggerItemWrap, activeClass, contentWrapper } from './accordion.module.scss';

const triggerItem = (val, opened) => (
  <div className={triggerItemWrap}>
    <motion.h5
      initial={false}
      className={opened ? activeClass : null}
      transition={{ duration: 0.25 }}
    >
      {val}
    </motion.h5>
    {opened ? (
      <div className="closed">
        <Icon iconClass="minus" />
      </div>
    ) : (
      <div className="opened">
        <Icon iconClass="plus" />
      </div>
    )}
  </div>
);

const Accordion = ({ i, expanded, setExpanded, content, title }) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header initial={false} onClick={() => setExpanded(isOpen ? false : i)}>
        {triggerItem(title, isOpen)}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className={contentWrapper}
            >
              {content}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const FramerAccordion = ({ items }) => {
  const [expanded, setExpanded] = useState(0);

  return items.map((item, i) => (
    <Accordion
      i={i}
      key={i}
      expanded={expanded}
      setExpanded={setExpanded}
      content={item.description}
      title={item.title}
    />
  ));
};

export default FramerAccordion;
