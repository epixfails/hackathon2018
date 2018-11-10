import React from 'react';
import styled from 'styled-components';
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from 'react-simple-dropdown';
import { bookStatus } from '../../../../common/constants';

const Trigger = styled.div`
  width: 100px;
  color: #fff;
  padding: 5px 0;
  margin-right: 20px;
`;

const OptionsList = styled.ul`
  padding: 0;
  list-style-type: none;
  color: #fff;
`;

const SelectItem = styled.li`
  padding: 10px;
`;

const getButtonText = selected => {
  if (selected === bookStatus.personal) {
    return 'в личные книги';
  }

  if (selected === bookStatus.free) {
    return 'готов';
  }

  return 'читаю';
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
        <Trigger>{getButtonText(selected)}</Trigger>
      </DropdownTrigger>
      <DropdownContent>
        <OptionsList>
          {Object.values(bookStatus).map(status => (
            <SelectItem
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
