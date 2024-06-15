import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { Table, Row, Rows } from 'react-native-table-component';
import * as DocumentPicker from 'expo-document-picker';
import * as XLSX from 'xlsx';

const GradesScreen = () => {
  const [grades, setGrades] = useState({});
  const [tableData, setTableData] = useState([]);
  const [tableHead, setTableHead] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const gradesRef = ref(db, 'other_scores');
    
    onValue(gradesRef, (snapshot) => {
      const data = snapshot.val() || {};
      setGrades(data);
      createTableData(data);
    });
  }, []);

  const createTableData = (data) => {
    const tableHead = ['User ID', 'Activity', 'Date', 'Score'];
    const tableData = [];

    Object.entries(data).forEach(([userId, activities]) => {
      Object.entries(activities).forEach(([activity, records]) => {
        Object.entries(records).forEach(([date, score]) => {
          tableData.push([userId, activity, date, score]);
        });
      });
    });

    setTableHead(tableHead);
    setTableData(tableData);
  };

  const handleUploadGrades = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    if (result.type === 'success') {
      const file = result.uri;
      const response = await fetch(file);
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      const db = getDatabase();
      const gradesRef = ref(db, 'other_scores');

      const newGrades = {};

      jsonData.forEach((row) => {
        const { userId, activity, date, score } = row;
        if (!newGrades[userId]) {
          newGrades[userId] = {};
        }
        if (!newGrades[userId][activity]) {
          newGrades[userId][activity] = {};
        }
        newGrades[userId][activity][date] = score;
      });

      set(gradesRef, newGrades)
        .then(() => {
          console.log('Grades updated successfully!');
        })
        .catch((error) => {
          console.error('Error updating grades:', error);
        });
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ScrollView horizontal>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
            <Row data={tableHead} style={{ height: 50, backgroundColor: '#f1f8ff' }} textStyle={{ textAlign: 'center', fontWeight: 'bold' }} />
            <Rows data={tableData} textStyle={{ textAlign: 'center' }} />
          </Table>
        </View>
      </ScrollView>
      <Button title="Upload Grades" onPress={handleUploadGrades} />
    </View>
  );
};

export default GradesScreen;
