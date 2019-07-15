import * as React from 'react';
import moment from 'moment';
import Table from 'react-table';
import { Panel, A } from '~features/ui/components';
import { documents } from '~data';

const columns = [
  {
    accessor: 'date',
    Header: 'Date',
    Cell: ({ value }: { value: string }) =>
      moment(value, 'YYYY/MM/DD').format('DD MMM YY'),
    style: { textAlign: 'center' },
  },
  {
    Header: 'Type',
    accessor: 'type',
    style: { textAlign: 'center' },
  },
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({
      original: { url },
      value,
    }: {
      value: string;
      original: { url: string };
    }) => <A src={url}>{value}</A>,
  },
];

function Documents() {
  return (
    <Panel preview={documents.length > 10} maxHeight="20em">
      <Table
        columns={columns}
        data={documents}
        showPagination={false}
        defaultPageSize={documents.length}
        resizable={false}
        defaultSortDesc={true}
      />
    </Panel>
  );
}

export default Documents;
