import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from 'axios'
import { DocsExample } from 'src/components'

const Tables = () => {
  const [barangData, setBarangData] = useState([])

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/barang') // Replace with your actual API endpoint
        setBarangData(response.data.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  console.log(barangData)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Small tables</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>small</code> property to make any <code>&lt;CTable&gt;</code> more compact
              by cutting all cell <code>padding</code> in half.
            </p>
            <DocsExample href="components/table#small-tables">
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Kode Barang</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nama Barang</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Satuan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Harga Satuan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Stok</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {barangData.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{barangData?.KodeBarang}</CTableDataCell>
                      <CTableDataCell>{barangData?.NamaBarang}</CTableDataCell>
                      <CTableDataCell>{barangData?.Satuan}</CTableDataCell>
                      <CTableDataCell>{barangData?.HargaSatuan}</CTableDataCell>
                      <CTableDataCell>{barangData?.Stok}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
