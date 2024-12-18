const validDoctorEmail = "doctor@doctor.com";
const validDoctorPassword = "doctor";
const validPatientEmail = "user@user.com";
const validPatientPassword = "user";

const patients = [];
const records = [];

function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
if (email === validDoctorEmail && password === validDoctorPassword) {
    document.getElementById('loginPage').classList.add('d-none');
    document.getElementById('doctorDashboard').classList.remove('d-none');
} else if (email === validPatientEmail && password === validPatientPassword) {
    document.getElementById('loginPage').classList.add('d-none');
    document.getElementById('recordsPage').classList.remove('d-none');
} else {
    document.getElementById('errorMessage').style.display = 'block';
}
}

function logout() {
   document.getElementById('doctorDashboard').classList.add('d-none');
       document.getElementById('addPatientPage').classList.add('d-none');
       document.getElementById('recordsPage').classList.add('d-none');
       document.getElementById('loginPage').classList.remove('d-none');
}

function showAddPatientPage() {
    document.getElementById('doctorDashboard').classList.add('d-none');
    document.getElementById('addPatientPage').classList.remove('d-none');
}

function addPatient() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const sys = document.getElementById('sys').value;
    const dia = document.getElementById('dia').value;

    const patient = {
        id: patients.length + 1,
        name: `${firstName} ${lastName}`,
        sys,
        dia
    };

    patients.push(patient);
    updatePatientsTable();


    document.getElementById('patientForm').reset();


    document.getElementById('addPatientPage').classList.add('d-none');
    document.getElementById('doctorDashboard').classList.remove('d-none');
}


function updatePatientsTable() {
    const tableBody = document.getElementById('patientsTable');
    tableBody.innerHTML = '';

    patients.forEach(patient => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.sys}</td>
            <td>${patient.dia}</td>
            <td><button class="btn btn-info btn-sm" onclick="viewDetails(${patient.id})">view details</button></td>
        `;

        tableBody.appendChild(row);
    });
}

function viewDetails(patientId) {
    const patient = patients.find(p => p.id === patientId);

    document.getElementById('detailsName').textContent = patient.name;
    document.getElementById('detailsRecords').innerHTML = `
        <tr>
            <td>${new Date().toISOString().split('T')[0]}</td>
            <td>${patient.sys}</td>
            <td>${patient.dia}</td>
            <td>60-120</td>
            <td>Sample description</td>
        </tr>
    `;

    document.getElementById('doctorDashboard').classList.add('d-none');
    document.getElementById('patientDetailsPage').classList.remove('d-none');
}

function addRecord() {
    const systolic = document.getElementById('systolic').value;
    const diastolic = document.getElementById('diastolic').value;
    const heartRate = document.getElementById('heartRate').value;
    const description = document.getElementById('description').value;

    const record = {
        date: new Date().toISOString().split('T')[0],
        systolic,
        diastolic,
        heartRate,
        description
    };

    records.push(record);
    updateRecordsTable();


    document.getElementById('recordForm').reset();


    document.getElementById('addRecordPage').classList.add('d-none');
    document.getElementById('recordsPage').classList.remove('d-none');
}
function returnToDashboard() {
    document.getElementById('patientDetailsPage').classList.add('d-none');
    document.getElementById('doctorDashboard').classList.remove('d-none');
}
function showAddRecordPage() {
    document.getElementById('recordsPage').classList.add('d-none');
    document.getElementById('addRecordPage').classList.remove('d-none');
}
function updateRecordsTable() {
    const tableBody = document.getElementById('recordsTable');
    tableBody.innerHTML = '';

    records.forEach(record => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${record.date}</td>
            <td>${record.systolic}</td>
            <td>${record.diastolic}</td>
            <td>${record.heartRate}</td>
            <td>${record.description}</td>
        `;

        tableBody.appendChild(row);
    });
}
