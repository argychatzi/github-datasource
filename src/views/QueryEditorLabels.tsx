import React from 'react';
import { Input } from '@grafana/ui';

import { QueryInlineField } from '../components/Forms';
import { LabelsOptions } from '../types';
import { RightColumnWidth, LeftColumnWidth } from './QueryEditor';

interface Props extends LabelsOptions {
  onChange: (value: LabelsOptions) => void;
}

export default (props: Props) => {
  return (
    <>
      <QueryInlineField labelWidth={LeftColumnWidth} label="Query (optional)">
        <Input
          css=""
          width={RightColumnWidth}
          value={props.query}
          onChange={el => props.onChange({ ...props, query: el.currentTarget.value })}
        />
      </QueryInlineField>
    </>
  );
};
