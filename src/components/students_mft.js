let students = [
  {
    id: 1,
    name: "مهدی فیاض",
    imgURL: "../public/images/Mahdi.jpg",
    phone: "+989155150730",
    email: "mahdi@fayaz.com",
  },
  {
    id: 2,
    name: "زهرا رحمانی فر",
    imgURL: "../public/images/Zahra.jpg",
    phone: "+989155150730",
    email: "zahra@rahmanifar.com",
  },
  {
    id: 3,
    name: "رضا حسینی",
    imgURL: "../public/images/Reza.jpg",
    phone: "+989155150730",
    email: "reza@hoseini.com",
  },

  {
    id: 4,
    name: "الهام نوروزی",
    imgURL: "../public/images/Elham.jpg",
    phone: "+989155150730",
    email: "elham@norouzi.com",
  },
  {
    id: 5,
    name: "Elham Nourouzi",
    imgURL: "../public/images/Negar.jpg",
    phone: "+989155150730",
    email: "elham@norouzi.com",
  },
  {
    id: 6,
    name: "Nasim Kaseb",
    imgURL: "../public/images/Nasim.jpg",
    phone: "+989155150730",
    email: "nasim@kaseb.com",
  },
  {
    id: 7,
    name: "Mahya Shamaee",
    imgURL: "../public/images/Mahya.jpg",
    phone: "+989155150730",
    email: "mahya@shamaee.com",
  },
  {
    id: 8,
    name: "Samaneh Tupkanlu",
    imgURL: "../public/images/Samaneh.jpg",
    phone: "+989155150730",
    email: "samaneh@toupkanloo.com",
  },
  {
    id: 9,
    name: "Atousa Akbari",
    imgURL: "../public/images/Atusa.jpg",
    phone: "+989155150730",
    email: "atusa@akbari.com",
  },

  {
    id: 10,
    name: "Negar Attarrian",
    imgURL: "../public/images/Negar.jpg",
    phone: "+989155150730",
    email: "negar@attarian.com",
  },
  {
    id: 11,
    name: "Reza Hoseini",
    imgURL: "../public/images/Reza.jpg",
    phone: "+989155150730",
    email: "reza@hoseini.com",
  },
  {
    id: 12,
    name: "Zahra Rahmanifar",
    imgURL: "../public/images/Zahra.jpg",
    phone: "+989155150730",
    email: "zahra@rahmanifar.com",
  },
];

export default students;

export const getStudent = (sID) => {
  return students.find((student) => student.id === sID);
};

export const deleteStudent = (sID) => {
 students= students.filter((student) => student.id !== sID);
};
