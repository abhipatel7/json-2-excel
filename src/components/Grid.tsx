import { FC, useRef } from 'react';
import {
  Grid as KendoGrid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { GridProps } from '../interface';

export const Grid: FC<GridProps> = ({ data, columns }) => {
  const _export = useRef<ExcelExport | null>(null);

  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };

  return (
    <ExcelExport data={data} ref={_export}>
      <KendoGrid data={data}>
        <GridToolbar>
          <button
            title="Export Excel"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            onClick={excelExport}
          >
            Export to Excel
          </button>
        </GridToolbar>
        {columns.map(({ field, title }) => (
          <Column key={field} field={field} title={title} />
        ))}
      </KendoGrid>
    </ExcelExport>
  );
};
