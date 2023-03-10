import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';
import { GroupedOption, groupedOptions } from './data/SelectData';
import { ActionMeta, OnChangeValue } from 'react-select';

export default class CreatableSingle extends Component {
  handleChange = (
    newValue: OnChangeValue<GroupedOption, true>,
    actionMeta: ActionMeta<GroupedOption>
  ) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  handleInputChange = (inputValue: any, actionMeta: any) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    return (
      <CreatableSelect
        isClearable
        // onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        options={groupedOptions}
        formatCreateLabel={()=> undefined}
        noOptionsMessage={() => "No options match"}
      />
    );
  }
}
