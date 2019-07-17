import * as React from 'react';
import moment from 'moment';
import Table from 'react-table';
import { Panel, A } from '~features/ui/components';
import { useContext } from '~features/state';
import { documents } from '~data';

const DateCol = {
  accessor: 'date',
  Header: 'Date',
  Cell: ({ value }: { value: string }) =>
    moment(value, 'YYYY/MM/DD').format('DD MMM YY'),
  style: { textAlign: 'center' },
};
const TypeCol = {
  Header: 'Type',
  accessor: 'type',
  style: { textAlign: 'center' },
};
const NameCol = {
  Header: 'Name',
  accessor: 'name',
  Cell: ({
    original: { url },
    value,
  }: {
    value: string;
    original: { url: string };
  }) => <A src={url}>{value}</A>,
};
const VerboseNameCol = {
  Header: 'Name',
  accessor: 'name',
  Cell: ({
    original: { url, date },
    value,
  }: {
    value: string;
    original: { url: string; date: string };
  }) => (
    <span>
      <A src={url}>{value}</A> ({moment(date, 'YYYY/MM/DD').format('M/D/YY')})
    </span>
  ),
};

function Documents() {
  const state = useContext();
  const columns = state.isPortrait
    ? [VerboseNameCol]
    : [DateCol, TypeCol, NameCol];

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
