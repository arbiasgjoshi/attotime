import React, { useState } from 'react';
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
import ArrowDown from '../../../images/arrow-down.svg';

const CustomSelect = () => {
  const [selected, setSelected] = useState('English');
  const [open, setOpen] = useState(false);

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

  const dropDownState = () => {
    let dropdownClasses = optionsDropdown;
    if (open) {
      dropdownClasses += ` ${isOpened}`;
    }
    return dropdownClasses;
  };

  const toggleDropdown = () => {
    setOpen(!open);
  };

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
      <div className={dropDownState}>
        {languages.map((lang) => (
          <button
            className={buttonClass(lang)}
            onClick={() => setSelected(lang.name)}
            type="button"
          >
            {lang.name}
          </button>
        ))}
      </div>
      <div
        className={backdropContainer}
        onKeyDown={() => {}}
        role="menu"
        tabIndex="-1"
        onClick={() => setOpen(false)}
      />
    </div>
  );
};

export default CustomSelect;
