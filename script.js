const tipcalcy=()=>{
    let amount=document.getElementById("bill_amount").value;
    let perc=document.getElementById("tip_perc").value;
    let tipPer=amount*(perc/100);
    let total=tipPer + Number(amount);
    document.getElementById("tip_amount").value=tipPer;
    document.getElementById("total_billed").value=total;

  }