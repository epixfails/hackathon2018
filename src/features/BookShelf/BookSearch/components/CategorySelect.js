import React from 'react';
import styled from 'styled-components';
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from 'react-simple-dropdown';
import { bookStatus } from '../../../../common/constants';

const Trigger = styled.div`
  display: flex;
  width: 140px;
  color: #fff;
  padding: 5px 0;
  margin-right: 40px;
  justify-content: flex-end;
  cursor: pointer;
`;

const Arrow = styled.span`
  display: block;
  position: relative;
  left: 10px;
  top: 7px;
  overflow: hidden;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:after {
    display: block;
    position: absolute;
    content: '';
    width: 10px;
    height: 20px;
    bottom: 15px;
    right: 10px;
    background: #fff;
    transform: rotate(-45deg);
  }
`;

const OptionsList = styled.ul`
  list-style-type: none;
  color: #fff;
  background: #fff;
  position: relative;
  bottom: 50px;
  right: 50px;
  padding: 0 10px;
  border-radius: 5px;
`;

const SelectItem = styled.li`
  padding: 10px 0;
  width: 162px;
  text-align: right;
  color: ${({ selected }) => (selected ? '#3388e8' : '#252525')};
  cursor: pointer;
`;

const getButtonText = selected => {
  if (selected === bookStatus.personal) {
    return 'В личные';
  }
  return 'В свободные';
};

export const CategorySelect = ({ handleSelect, selected }) => {
  let dropdown;

  return (
    <Dropdown
      ref={elem => {
        dropdown = elem;
      }}
    >
      <DropdownTrigger>
        <Trigger>
          {getButtonText(selected)}
          <Arrow isOpened={dropdown && dropdown.isActive()} />
        </Trigger>
      </DropdownTrigger>
      <DropdownContent>
        <OptionsList>
          {Object.values(bookStatus)
            .filter(status => status !== bookStatus.reading)
            .map(status => (
              <SelectItem
                selected={status === selected}
                onClick={() => {
                  handleSelect(status);
                  dropdown.hide();
                }}
                role="button"
              >
                {getButtonText(status)}
              </SelectItem>
            ))}
        </OptionsList>
      </DropdownContent>
    </Dropdown>
  );
};
