function getCurrentDate() {
    const currentDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
    const dayName = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const monthName = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
  
    const formattedDate = `Today is ${dayName} the ${dayOfMonth} of ${monthName} ${year}`;
    return formattedDate;
  }
  
  const currentDate = getCurrentDate();
  console.log(currentDate);
  