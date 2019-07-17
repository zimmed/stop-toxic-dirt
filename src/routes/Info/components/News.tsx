import * as React from 'react';
import moment from 'moment';
import Table from 'react-table';
import { useContext } from '~features/state';
import { Panel, A } from '~features/ui/components';
import { news } from '~data';

const DateCol = {
  accessor: 'date',
  Header: 'Date',
  Cell: ({ value }: { value: string }) =>
    moment(value, 'YYYY/MM/DD').format('DD MMM YY'),
  style: { textAlign: 'center' },
};
const SourceCol = {
  Header: 'Source',
  accessor: 'source',
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
    original: { url, source, date },
    value,
  }: {
    value: string;
    original: { url: string; source: string; date: string };
  }) => (
    <span>
      {source}: <A src={url}>{value}</A> (
      {moment(date, 'YYYY/MM/DD').format('M/D/YY')})
    </span>
  ),
};

function News() {
  const state = useContext();
  const columns = state.isPortrait
    ? [VerboseNameCol]
    : [DateCol, SourceCol, NameCol];

  return (
    <Panel preview={news.length > 10} maxHeight="20em">
      <Table
        columns={columns}
        data={news}
        showPagination={false}
        defaultPageSize={news.length}
        resizable={false}
        defaultSortDesc={true}
      />
    </Panel>
  );
}

export default News;
