import { useLocation } from "react-router-dom";

const Results = () => {
const location = useLocation();
const { formData } = location.state;

let salary = formData.salary;
let salaryOfYear = salary * 12;
let taxRate = salaryOfYear * (10 / 100);
let income = salaryOfYear - taxRate;

return (
    <div>
    <h1>Result</h1>
    <p>
    <strong>ชื่อ: Jiraphat Phruthalikhit {formData.name} </strong>
    </p>
    <p>
    <strong>งาน: Film Director {formData.job} </strong>
    </p>
    <p>
    <strong>เงินเดือน: 60000 {salary} บาท</strong>
    </p>
    <p>
    <strong>เงินได้ทั้งปี: 600000 {salaryOfYear} บาท</strong>
</p>
<p>
<strong>หักภาษี ณ ที่%จ่าย 10%: 75000 {taxRate} บาท</strong>
</p>
<p>
<strong>เงินได้สุทธิ: 55000 {income} บาท</strong>
</p>
</div>
);
};
export default Results
