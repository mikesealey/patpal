import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [csvData, setCSVData] = useState('');
  const [uploadedCSVData, setUploadedCSVData] = useState("")

  function FetchCommaSepValues() {
      useEffect(() => {
        async function getCSV() {
          console.log("here")
          try {
            const response = await fetch('TestData.csv');
            const data = await response.text();
            setCSVData(data);
          } catch (error) {
            console.error('Error fetching CSV:', error);
          }
        }
        getCSV();
      }, []);
  }


    const handleFileChange = (event) => {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onload = (e) => {
        const contents = e.target.result
        setUploadedCSVData(contents)
      }
      reader.readAsText(file)
    }
  


  // FetchCommaSepValues()
  // console.log(csvData)

 
  return (
    <>
      <h1>Upload CSV Here</h1>
      <input type="file" accept=".csv" onChange={handleFileChange}/>
      <p>
        {uploadedCSVData || "No CSV found"}
      </p>
    </>
  )
}

export default App
