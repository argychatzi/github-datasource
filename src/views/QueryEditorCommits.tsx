import React from 'react';
import { Input } from '@grafana/ui';

import { QueryInlineField } from '../components/Forms';
import { CommitsOptions } from '../types';
import { RightColumnWidth, LeftColumnWidth } from './QueryEditor';

interface Props extends CommitsOptions {
  onChange: (value: CommitsOptions) => void;
}

export default (props: Props) => {
  return (
    <>
      <QueryInlineField labelWidth={LeftColumnWidth} label="Ref (Branch / Tag)">
        <Input
          css=""
          width={RightColumnWidth}
          value={props.gitRef}
          onChange={el => props.onChange({ ...props, gitRef: el.currentTarget.value })}
        />
      </QueryInlineField>
    </>
  );
};
