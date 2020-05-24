let students = '';

['Sam', 'Ari', 'Sharon', 'Steve'].forEach((name) => {
   if (name !== 'Steve') {
     name += ' & ';
   }
   students += name;
});
console.log(students);