import React, { useState, useEffect } from 'react';

import ArrowDown from '@images/arrow-down.svg';
import { useIntl, changeLocale } from 'gatsby-plugin-intl';
import {
  selectDropdown,
  invertedArrow,
  selectedItem,
  optionsDropdown,
  activeItem,
  isOpened,
  option,
  backdropContainer,
} from './custom-select.module.scss';

const CustomSelect = () => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const intl = useIntl();

  const languages = [
    {
      id: 'en',
      name: 'English',
    },
    {
      id: 'es',
      name: 'Español',
    },
    {
      id: 'fr',
      name: 'Française',
    },
    {
      id: 'de',
      name: 'Deutsch',
    },
  ];

  const buttonClass = (item) => {
    let defaultClass = option;
    if (item.name === selected) {
      defaultClass += ` ${activeItem}`;
    }
    return defaultClass;
  };

  // const dropDownState = () => {
  //   let dropdownClasses = optionsDropdown;
  //   if (open) {
  //     dropdownClasses += ` ${isOpened}`;
  //   }
  //   console.log('something fishy is going on here!!!!');
  //   return dropdownClasses;
  // };

  const renderLocale = (val) => {
    const currentItem = languages.filter((lang) => lang.name === val || lang.id === val);
    setSelected(currentItem[0].name);
  };

  const toggleDropdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    // setSelected(intl.locale);
    renderLocale(intl.locale);
  }, []);

  return (
    <div
      className={selectDropdown}
      onKeyDown={() => toggleDropdown()}
      role="menu"
      tabIndex="0"
      onClick={() => toggleDropdown()}
    >
      <div className={selectedItem}>
        <span>{selected}</span>
        <ArrowDown className={open ? invertedArrow : null} />
      </div>
      <div className={`${optionsDropdown} ${open && isOpened}`}>
        {languages.map((lang) => (
          <button className={buttonClass(lang)} onClick={() => changeLocale(lang.id)} type="button">
            {lang.name}
          </button>
        ))}
      </div>
      {open && (
        <div
          className={backdropContainer}
          onKeyDown={() => {}}
          role="menu"
          tabIndex="-1"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default CustomSelect;
