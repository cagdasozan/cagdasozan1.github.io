
    const timeContainer = document.getElementById("time-container");
    const BIRTH_DAY = "27-08-1992";
    const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
    console.log(BIRTH_DAY_DATE);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
        (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
      );

      timeContainer.innerHTML = intlNumberFormatter.format(difference);
    }, 1000);
  