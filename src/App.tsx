import { useEffect, useState } from 'react';
import './App.scss';
import { Column } from './interface';
import { getColumnsFromJSON } from './utilities/getColumnsFromJSON';
import { toTitleCase } from './utilities';
import { Form, Grid } from './components';

function App() {
  const [jsonData, setJsonData] = useState<string>('');
  const [gridData, setGridData] = useState<any[] | undefined>([]);
  const [columns, setColumns] = useState<Column[]>([]);

  useEffect(() => {
    if (jsonData) {
      const parsedJsonData = JSON.parse(jsonData);

      setColumns(
        getColumnsFromJSON(parsedJsonData[0]).map((col) => ({
          field: col,
          title: toTitleCase(col),
        }))
      );

      setGridData(parsedJsonData);
    }
  }, [jsonData]);

  return (
    <div className="App">
      <Form jsonData={jsonData} setJsonData={setJsonData} />
      {gridData?.length && <Grid data={gridData} columns={columns} />}
    </div>
  );
}

export default App;
