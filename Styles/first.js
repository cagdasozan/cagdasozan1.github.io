    const timeContainer = document.getElementById("time-container");
    const BIRTH_DAY = "08-27-1992";
    const BIRTH_DAY_DATE =new Date(BIRTH_DAY);
    const intlNumberFormatter = Intl.NumberFormat("en-US");

    setInterval(() => {
      const now =new Date();
      const difference = Math.floor((now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000); //gettime gives milliseconds thats why we divide it  to 1000
      timeContainer.innerHTML = intlNumberFormatter.format(difference);
    }, 1000);