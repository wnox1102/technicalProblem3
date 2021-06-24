/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
  Row,
} from 'react-table';
import Pagination from './Pagination';

interface IHeader {
  Header: React.ReactNode;
  accessor: string;
  disableFilters?: boolean;
  disableSortBy?: boolean;
}

interface TableProps {
  headers: Array<IHeader>;
  content: Array<Record<string, any>>;
  onClickRow?: (_id: string) => void;
  href?: string;
  as?: string;
  text?: string;
}

interface GlobalFilterProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  preGlobalFilteredRows: Row<object>[];
  globalFilter: any;
  setGlobalFilter: (filterValue: any) => void;
}

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: GlobalFilterProps) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((_value) => {
    setGlobalFilter(_value || undefined);
  }, 100);

  return (
    <label htmlFor="search" className="relative">
      <span className="sr-only">Buscador</span>
      <input
        name="search"
        type="search"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Buscar en ${count} registros`}
        className="bg-gray-100 border border-gray-300 shadow-sm w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none text-gray-600 placeholder-gray-400"
      />
      <button type="button" className="absolute right-0 top-0 mt-1 mr-4">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </label>
  );
}

function Table({ headers, content, href, as, text, onClickRow }: TableProps) {
  const columns = React.useMemo(() => [...headers], [headers]);
  const data = React.useMemo(() => [...content], [content]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    nextPage,
    previousPage,
    state: { pageIndex, globalFilter },
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <>
      <div className="flex flex-row flex-wrap w-full mb-2">
        <div className="w-full md:w-1/2 lg:w-2/3 inline-flex">
          <h2 className="text-base leading-normal text-gray-600 my-auto">
            Buscar {text}
          </h2>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-2">
          <GlobalFilter
            globalFilter={globalFilter}
            preGlobalFilteredRows={preGlobalFilteredRows}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
      </div>
      <div className="overflow-x-auto w-full block">
        <table
          className="w-full border-collapse mb-4 text-gray-600 min-w-max bg-white shadow-lg rounded-lg px-4"
          style={{ captionSide: 'bottom' }}
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="p-3 border-b border-gray-300 text-left text-gray-700"
                    {...header.getHeaderProps(header.getSortByToggleProps())}
                  >
                    <span className="inline-flex w-full">
                      <span className="my-auto pr-2">
                        {header.render('Header')}
                      </span>
                      {header.canSort ? (
                        <span className="ml-auto my-auto">
                          {header.isSorted ? (
                            header.isSortedDesc ? (
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                                />
                              </svg>
                            )
                          ) : (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 8h16M4 16h16"
                              />
                            </svg>
                          )}
                        </span>
                      ) : null}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, idx) => {
              prepareRow(row);
              return (
                <tr
                  className={`${onClickRow ? 'cursor-pointer' : ''} ${
                    idx % 2 === 0 ? 'bg-gray-200 bg-opacity-50' : ''
                  } hover:bg-gray-300`}
                  {...row.getRowProps()}
                  data-id={content?.[idx]?._id}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onClickRow) {
                      onClickRow(e?.currentTarget?.dataset?.id);
                    }
                  }}
                >
                  {row.cells.map((cell) => (
                    <td
                      className="p-3 align-top border-t border-gray-300"
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        previousPage={previousPage}
        nextPage={nextPage}
        pageIndex={pageIndex}
        pageCount={pageCount}
        pageOptions={pageOptions}
      />
    </>
  );
}

export default Table;
