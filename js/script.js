function sendMail(params) {
    var tempParams ={
        fromName:document.getElementById("fromName").value,
        email:document.getElementById("email").value,
        phoneNumber:document.getElementById("phoneNumber").value,
        message:document.getElementById("message").value
    };

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')


    const alert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
      
        alertPlaceholder.append(wrapper)
      }

      

      if(tempParams.email.length>10 && tempParams.message.length>10 && tempParams.fromName.length>5) {
        emailjs.send('service_iwpwz0n', 'template_4gi0emo', tempParams).then(function(res){
            console.log("sucessful", res.status);
            
                  alert('Your Message Has Been Sent!', 'success')
            
              })
      }
      }



function sendLoanRegistration(params) {
    var tempParamsTwo ={
        fullName:document.getElementById("fullName").value,
        phoneNumber:document.getElementById("phoneNumber").value,
        emailAddress:document.getElementById("emailAddress").value,
        loanPurpose:document.getElementById("loanPurpose").value,
        desiredLoanAmount:document.getElementById("desiredLoanAmount").value,
        creditScoreSelect:document.getElementById("creditScoreSelect").value,
        militaryStatus:document.getElementById("militaryStatus").value,
        employmentStatus:document.getElementById("employmentStatus").value,
        propertyOwned:document.getElementById("propertyOwned").value,
        coborrower:document.getElementById("coborrower").value,
        
    };

    const alertPlaceholderTwo = document.getElementById('liveAlertPlaceholderTwo')

    const alertTwo = (message, type) => {
        const wrapperTwo = document.createElement('div')
        wrapperTwo.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
      
        alertPlaceholderTwo.append(wrapperTwo)
      }

      if(tempParamsTwo.fullName.length>5 && tempParamsTwo.emailAddress.length>10 && tempParamsTwo.desiredLoanAmount.length>4 && tempParamsTwo.loanPurpose.length>1 && tempParamsTwo.militaryStatus.length>1 && tempParamsTwo.phoneNumber.length>6) {
        
        emailjs.send('service_iwpwz0n', 'template_zmzlpxn', tempParamsTwo).then(function(res){
            
            console.log("sucessful", res.status);
            console.log(tempParamsTwo)
           
            alertTwo('Your Loan Application Has Been Sent!', 'success')
            
        })





      }
}





