const GridDatas = {
    HistoryColumns : [
        { field: 'id', headerName: '#', width: 50 },
        { field: 'patientLastName', headerName: 'Овог', width: 170 },
        { field: 'patientFirstName', headerName: 'Нэр', width: 170 },
        { field: 'hospitalName', headerName: 'Эмнэлэг', width: 170 },
        { field: 'date', headerName: 'Он сар өдөр', width: 170 },
        { field: 'description', headerName: 'Тайлбар онош', width: 170 },
        { field: 'doctorFirstName', headerName: 'Эмч', width: 170 },
        { field: 'diseaseName', headerName: 'Өвчин Зовиур', width: 170 },
    ],
    HospitalColumns : [
        { field: 'id', headerName: '#', width: 50 },
        { field: 'hospitalName', headerName: 'Нэр', width: 170 },
        { field: 'hospitalDescription', headerName: 'Дэлгэрэнгүй', width: 170 },
    ],
    PatientColumns : [
        { field: 'id', headerName: '#', width: 50 },
        { field: 'patientLastName', headerName: 'Овог', width: 170 },
        { field: 'patientFirstName', headerName: 'Нэр', width: 170 },
    ],
    DoctorColumns : [
        { field: 'id', headerName: '#', width: 50 },
        { field: 'doctorLastName', headerName: 'Овог', width: 170 },
        { field: 'doctorFirstName', headerName: 'Нэр', width: 170 },
    ],
}
export default GridDatas;