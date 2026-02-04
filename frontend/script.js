/***********************
 STUDENTS DATA (75)
************************/
const students = [
  { enrollment: "BTIO25O1076", name: "LAKSHITA SAXENA" },
  { enrollment: "BTIO25O1077", name: "MAHI AWASTHI" },
  { enrollment: "BTIO25O1078", name: "MANYA SIROTHIYA" },
  { enrollment: "BTIO25O1079", name: "METRI BANSAL" },
  { enrollment: "BTIO25O1080", name: "MILAN SINGHAL" },
  { enrollment: "BTIO25O1081", name: "MRADUL DIXIT" },
  { enrollment: "BTIO25O1082", name: "NAKUL KUSHWAH" },
  { enrollment: "BTIO25O1083", name: "NANDINI SHINDE" },
  { enrollment: "BTIO25O1084", name: "NISHA SHARMA" },
  { enrollment: "BTIO25O1085", name: "OM MISHRA" },
  { enrollment: "BTIO25O1086", name: "PALAK NAMDEV" },
  { enrollment: "BTIO25O1087", name: "PARTH NEEKHRA" },
  { enrollment: "BTIO25O1088", name: "PRACHI PAL" },
  { enrollment: "BTIO25O1089", name: "PRAKHAR YADAV" },
  { enrollment: "BTIO25O1090", name: "PRASHANT PATEL" },
  { enrollment: "BTIO25O1091", name: "PRAVESH KUMAR MISHRA" },
  { enrollment: "BTIO25O1092", name: "PRINCE RAKHOLYA" },
  { enrollment: "BTIO25O1093", name: "PRINCE SHARMA" },
  { enrollment: "BTIO25O1094", name: "PRIYA YADAV" },
  { enrollment: "BTIO25O1095", name: "PRIYANSHI SAXENA" },
  { enrollment: "BTIO25O1096", name: "RAHUL AHIRWAR" },
  { enrollment: "BTIO25O1097", name: "RAJ GOUR" },
  { enrollment: "BTIO25O1098", name: "RAJVEER GURJAR" },
  { enrollment: "BTIO25O1099", name: "RASHMI SHIVHARE" },
  { enrollment: "BTIO25O1100", name: "RISHABH SHARMA" },
  { enrollment: "BTIO25O1101", name: "RIYA ATUL SAXENA" },
  { enrollment: "BTIO25O1102", name: "ROHIT SINGH BHADOURIYA" },
  { enrollment: "BTIO25O1103", name: "SAKSHAM SINGH KUSHWAH" },
  { enrollment: "BTIO25O1104", name: "SAKSHI BAIRAGI" },
  { enrollment: "BTIO25O1105", name: "SAKSHI JHA" },
  { enrollment: "BTIO25O1106", name: "SAKSHI SINGHAL" },
  { enrollment: "BTIO25O1107", name: "SALONI SANODIYA" },
  { enrollment: "BTIO25O1108", name: "SALONI SAXENA" },
  { enrollment: "BTIO25O1109", name: "SANDILI GUPTA" },
  { enrollment: "BTIO25O1110", name: "SANSKRITI PATHAK" },
  { enrollment: "BTIO25O1111", name: "SARTHAK SINGH SIKARWAR" },
  { enrollment: "BTIO25O1112", name: "SARVESH TIWARI" },
  { enrollment: "BTIO25O1113", name: "SHAILI KUMARI" },
  { enrollment: "BTIO25O1114", name: "SHAILJA MISHRA" },
  { enrollment: "BTIO25O1115", name: "SHASHANK RATHORE" },
  { enrollment: "BTIO25O1116", name: "SHAURYA BANDIL" },
  { enrollment: "BTIO25O1117", name: "SHIVA GUPTA" },
  { enrollment: "BTIO25O1118", name: "SHIVAM RAJORIYA" },
  { enrollment: "BTIO25O1119", name: "SHIVAM UPADHAYAY" },
  { enrollment: "BTIO25O1120", name: "SHIVANG RAJORIYA" },
  { enrollment: "BTIO25O1121", name: "SHUBH KURELE" },
  { enrollment: "BTIO25O1122", name: "SHUBHI SHUKLA" },
  { enrollment: "BTIO25O1123", name: "SIDDHARTH DWIVEDI" },
  { enrollment: "BTIO25O1124", name: "SIDDHARTH TRIPATHI" },
  { enrollment: "BTIO25O1125", name: "SNEHA AGRAWAL" },
  { enrollment: "BTIO25O1126", name: "SNEHA PARIHAR" },
  { enrollment: "BTIO25O1127", name: "SNEHAL SINGH" },
  { enrollment: "BTIO25O1128", name: "SUHANI SHARMA" },
  { enrollment: "BTIO25O1129", name: "SUHANI SHRIVAS" },
  { enrollment: "BTIO25O1130", name: "SUJAL BARFA" },
  { enrollment: "BTIO25O1131", name: "SURAJ SINGH RAJAWAT" },
  { enrollment: "BTIO25O1132", name: "SUYASH SINGH CHAUHAN" },
  { enrollment: "BTIO25O1133", name: "TANISHK PAL" },
  { enrollment: "BTIO25O1134", name: "TANIYA MALVIYA" },
  { enrollment: "BTIO25O1135", name: "TEJASWA SINGH RANA" },
  { enrollment: "BTIO25O1136", name: "TRIPTI DUBEY" },
  { enrollment: "BTIO25O1137", name: "TWINKAL GOLHANI" },
  { enrollment: "BTIO25O1138", name: "UBHAY HARDENIYA" },
  { enrollment: "BTIO25O1139", name: "VANSH SHRIVASTAVA" },
  { enrollment: "BTIO25O1140", name: "VANSH TRIVEDI" },
  { enrollment: "BTIO25O1141", name: "VARISH SHUKLA" },
  { enrollment: "BTIO25O1142", name: "VEDANT SAXENA" },
  { enrollment: "BTIO25O1143", name: "VIPIN GURJAR" },
  { enrollment: "BTIO25O1144", name: "VIRAT JAAT" },
  { enrollment: "BTIO25O1145", name: "VRANDA DIXIT" },
  { enrollment: "BTIO25O1146", name: "YASH BAGHEL" },
  { enrollment: "BTIO25O1147", name: "YOGITA SHARMA" },
  { enrollment: "BTIO25O1148", name: "YUVRAJ PAL" },
  { enrollment: "BTIO25O1149", name: "YUVRAJ SINGH BHADORIYA" },
  { enrollment: "BTIO25O1150", name: "YUVRAJ SINGH YADAV" }
];

/***********************
 PAGE LOAD
************************/
document.addEventListener("DOMContentLoaded", () => {
  loadAttendancePage();
  loadViewPage();
  loadDashboard();
});

/***********************
 MARK ATTENDANCE
************************/
function loadAttendancePage() {
  const table = document.getElementById("studentTable");
  if (!table) return;

  table.innerHTML = "";

  students.forEach(s => {
    table.innerHTML += `
      <tr>
        <td>${s.enrollment}</td>
        <td>${s.name}</td>
        <td>
          <select id="${s.enrollment}">
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </td>
      </tr>
    `;
  });
}

function saveAttendance() {
  const attendance = students.map(s => ({
    enrollment: s.enrollment,
    name: s.name,
    status: document.getElementById(s.enrollment).value
  }));

  localStorage.setItem("attendance", JSON.stringify(attendance));
  alert("Attendance Saved Successfully ✅");
}

/***********************
 VIEW ATTENDANCE
************************/
function loadViewPage() {
  const table = document.getElementById("viewTable");
  if (!table) return;

  const data = JSON.parse(localStorage.getItem("attendance")) || [];
  table.innerHTML = "";

  data.forEach(s => {
    table.innerHTML += `
      <tr>
        <td>${s.enrollment}</td>
        <td>${s.name}</td>
        <td>${s.status}</td>
      </tr>
    `;
  });
}

/***********************
 DASHBOARD
************************/
function loadDashboard() {
  const total = document.getElementById("totalStudents");
  if (!total) return;

  const data = JSON.parse(localStorage.getItem("attendance")) || [];

  const present = data.filter(s => s.status === "Present").length;
  const absent = data.filter(s => s.status === "Absent").length;

  total.innerText = students.length;
  document.getElementById("presentCount").innerText = present;
  document.getElementById("absentCount").innerText = absent;
}
