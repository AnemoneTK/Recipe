// Array เก็บข้อมูลวัตถุดิบ
const ingredients = [
  "กล้วยหอมสุกบด 200 กรัม",
  "น้ำมะนาว 1 ช้อนชา",
  "น้ำตาลทราย 170 กรัม",
  "แป้งเค้ก 200 กรัม",
  "เบกกิ้งโซดา 1+1/2 ช้อนชา",
  "เกลือ 1/2 ช้อนชา",
  "น้ำมันพืช 1 ถ้วย",
  "กลิ่นวานิลลา 1 ช้อนชา",
  "ไข่ไก่ 3 ฟอง",
];

// Array เก็บข้อมูลขั้นตอนการทำ
const steps = [
  "บดกล้วยหอมให้ละเอียด (ควรใช้กล้วยที่สุกงอม จะได้ความหอมและเส้นใยที่สวย)",
  "หลังจากนั้นบีบน้ำมะนาวลงไป คนให้เข้ากัน",
  "นำไข่และน้ำตาลใส่โถตี ตีด้วยความเร็วสูงสุด จนขึ้นฟู",
  "ร่อนส่วนผสมแป้งใส่ลงอ่างผสม ตีผสมให้เข้ากัน",
  "หลังจากนั้นใส่กลิ่นวานิลลา ใส่กล้วยบดและน้ำมัน ตีผสมให้เข้ากัน",
  "ตักใส่พิมพ์อบไฟ 200 องศาเซลเซียล ใช้เวลา 25-30 นาที",
];

// ดึงข้อมูลจาก Array มาแสดงใน HTML
const ingredientsList = document.getElementById("ingredientsList");
const stepsList = document.getElementById("stepsList");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = ingredient;
  ingredientsList.appendChild(li);
});

steps.forEach((step) => {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = step;
  stepsList.appendChild(li);
});
